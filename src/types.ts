import BigNumber from "bignumber.js";
import {  ethers } from "ethers";
import { MoonwellContract, MoonwellContractWithProxy } from "./contracts";

export type StringOrNull = string | null

export type DeployArtifact = {
    _format: string
    contractName: string
    sourceName: string
    abi: any[]
    bytecode: string
    deployedBytecode: string
    linkReferences: any
    deployedLinkReferences: any
}

export type Market = {
    /** An asset's name (ex. "Polkadot") */
    name: string

    /** An asset's formal ticker (ex. "xcDOT" or "BTC") */
    assetTicker: string

    /** A market's underlying token address, null if native asset (GLMR/MOVR) */
    tokenAddress: StringOrNull

    /** A market's mToken address */
    mTokenAddress: string

    /** An market's underlying token mantissa */
    digits: number

    /** An market's mToken mantissa */
    mTokenDigits: number

    /** An market's underlying token mantissa as a BigNumber */
    mantissa: BigNumber,

    /** An market's mToken mantissa as a BigNumber */
    mTokenMantissa: BigNumber,
}

export type ContractBundle = {
    /** The environment's Claims contract address, null if non-existent */
    CLAIMS: MoonwellContractWithProxy

    /** The environment's Comptroller contract address */
    COMPTROLLER: MoonwellContract

    /** The environment's Governor contract address, null if non-existent */
    GOVERNOR: MoonwellContract

    /** The environment's Gov Token (WELL/MFAM) address */
    GOV_TOKEN: MoonwellContract

    /** The environment's Maximillion deployment, which is used for closing positions in the market after accuring a final round of interest */
    MAXIMILLION: MoonwellContract

    /** The environment's deployed PriceOracle, which brokers lookups to Chainlink */
    ORACLE: MoonwellContract

    /** The environment's Safety Module */
    SAFETY_MODULE: MoonwellContractWithProxy

    /** The environment's Governor Timelock address, null if non-existent */
    TIMELOCK: MoonwellContract

    /** The environment's interest model. */
    INTEREST_RATE_MODEL: MoonwellContract

    /** The contract that is the implementation of MErc20s */
    MERC_20_IMPL: MoonwellContract

    /** An object of all deployed markets in this environment */
    MARKETS: {
        [ticker: string]: Market
    }
}

/**
 * Property bag that represents a governance proposal.
 */
export type ProposalData = {
    /** A list of contract addresses. */
    targets: string[]

    /** The amount of the native asset to transfer with each call. */
    values: number[]

    /** Signatures of each method. */    
    signatures: string[]

    /** Calldata to send with each method call. */
    callDatas: string[]
}

export enum Environment {
    MOONRIVER = "moonriver",
    MOONBEAM = "moonbeam",
    MOONBASE = "moonbase",
}

export type ProtocolOptions = {
    rpcProvider: ethers.providers.JsonRpcProvider
}
