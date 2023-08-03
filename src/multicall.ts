import {ethers} from 'ethers'
import {
    TMulticall,
    TNestedMulticall,
    TMulticallResult,
    MulticallTransformations,
    MoonwellMarket
} from "./index";
import BigNumber from "bignumber.js";

const MULTICALL_ABI = [
    'function aggregate(tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes[] returnData)',
    'function aggregate3(tuple(address target, bool allowFailure, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)',
    'function aggregate3Value(tuple(address target, bool allowFailure, uint256 value, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)',
    'function blockAndAggregate(tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes32 blockHash, tuple(bool success, bytes returnData)[] returnData)',
    'function tryAggregate(bool requireSuccess, tuple(address target, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)',
    'function tryBlockAndAggregate(bool requireSuccess, tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes32 blockHash, tuple(bool success, bytes returnData)[] returnData)',
];

function coerce(value: any){
    if (value._isBigNumber){
        return new BigNumber(value.toString())
    }
    if (Array.isArray(value)){
        return value.map(coerce)
    }
    return value
}

export async function multicall(provider: ethers.providers.Provider, calls: TMulticall){
    const multiCall = new ethers.Contract(
        '0xcA11bde05977b3631167028862bE2a173976CA11',
        MULTICALL_ABI,
        provider
    )

    // For each call, go encode the call using the contract interface and specified arguments
    const encodedCalls = Object.values(calls).map(([contract, fn, args]) => {
        const encodedFunctionCall = contract.interface.encodeFunctionData(
            contract.interface.getFunction(fn),
            args?.length === 0 ? undefined : args
        )
        return [contract.address, false, encodedFunctionCall]
    })

    // Go make the actual call
    const callResult = await multiCall.callStatic.aggregate3(encodedCalls)

    // Return a map in the same shape as the arguments, with the calls replaced with the call results
    return Object.fromEntries(
        Object.entries(calls).map(([key, [contract, fn, args]], index) => {
            const returned = contract.interface.decodeFunctionResult(
                contract.interface.getFunction(fn),
                callResult[index].returnData
            )

            if (returned.length !== 1){
                return [key, coerce(returned)]
            } else {
                return [key, coerce(returned[0])]
            }

        })
    )
}

export async function nestedMulticall(provider: ethers.providers.Provider, calls: TNestedMulticall[]){
    const multiCall = new ethers.Contract(
        '0xcA11bde05977b3631167028862bE2a173976CA11',
        MULTICALL_ABI,
        provider
    )

    let allEncodedCalls = []
    let resultAssignments = []

    calls.forEach(([topLevelKey, multiCall]) => {
        const encodedCalls = Object.entries(multiCall).map(([lookupKey, [contract, fn, args]]) => {
            const encodedFunctionCall = contract.interface.encodeFunctionData(
                contract.interface.getFunction(fn),
                args?.length === 0 ? undefined : args
            )
            resultAssignments.push([topLevelKey, lookupKey, fn, contract])
            return [contract.address, false, encodedFunctionCall]
        })
        allEncodedCalls = allEncodedCalls.concat(encodedCalls)
    })

    const callResult = await multiCall.callStatic.aggregate3(allEncodedCalls)

    const results = {}

    resultAssignments.map(([topLevelKey, lookupKey, fn, contract], index) => {
        if (!results[topLevelKey]){
            results[topLevelKey] = {}
        }
        const result = contract.interface.decodeFunctionResult(
            contract.interface.getFunction(fn),
            callResult[index].returnData
        )

        if (result.length === 1){
            results[topLevelKey][lookupKey] = coerce(result[0])
        } else {
            results[topLevelKey][lookupKey] = coerce(result)
        }

    })

    return results
}

export async function applyTransformations(
    provider: ethers.providers.Provider,
    multicallResult: TMulticallResult,
    transformations: MulticallTransformations
){
    for (const [transformKey, transformFn] of Object.entries(transformations)){
        if (!multicallResult[transformKey]){
            throw new Error("Invalid key specified in transformer: " + transformKey)
        }

        const newValue = await transformFn(multicallResult[transformKey])
        // console.log(`[${transformKey}] Old value: ${multicallResult[transformKey]} | New value ${newValue}`)
        multicallResult[transformKey] = newValue
    }
}

// Transformation that will scale a given BigNumber by a market's underlying decimals
export function scaleByMarketUnderlyingDecimals(market: MoonwellMarket){
    return function(val: BigNumber){
        if (val.isZero()){ return val }
        return val.shiftedBy(-1 * market.underlyingDecimals)
    }
}

// Transformation that will scale a given BigNumber by a static amount (positive or negative)
export function scaleByStaticAmount(shiftDecimals: number){
    return function(val: BigNumber){
        if (val.isZero()){ return val }
        return val.shiftedBy(shiftDecimals)
    }
}