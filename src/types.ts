import BigNumber from "bignumber.js";
import { Contract, ethers } from "ethers";

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

export type ContractData = {
    address: string,
    getDeployArtifact: () => DeployArtifact
    getContractInstance: () => Contract
}

export type ContractDataWithProxy = ContractData & {
    getProxyDeployArtifact: () => DeployArtifact
    getProxyContractInstance: () => Contract
}


export type Market = ContractDataWithProxy & {
    /** An asset's name (ex. "Polkadot") */
    name: string

    /** An asset's formal ticker (ex. "xcDOT" or "BTC") */
    assetTicker: string

    /** A market's underlying token address, null if native asset (GLMR/MOVR) */
    tokenAddress: StringOrNull

    /** A market's mToken address */
    // Remove since we've now inherited address
    // mTokenAddress: string

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
    CLAIMS: ContractDataWithProxy

    /** The environment's Comptroller contract address */
    COMPTROLLER: ContractData

    /** The environment's Governor contract address, null if non-existent */
    GOVERNOR: ContractData

    /** The environment's Gov Token (WELL/MFAM) address */
    GOV_TOKEN: ContractData

    /** The environment's Maximillion deployment, which is used for closing positions in the market after accuring a final round of interest */
    MAXIMILLION: ContractData

    /** The environment's deployed PriceOracle, which brokers lookups to Chainlink */
    ORACLE: ContractData

    /** The environment's Safety Module */
    SAFETY_MODULE: ContractDataWithProxy

    /** The environment's Governor Timelock address, null if non-existent */
    TIMELOCK: ContractData

    /** The environment's interest model. */
    INTEREST_RATE_MODEL: ContractData

    /** The contract that is the implementation of MErc20s */
    MERC_20_IMPL: ContractData

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

/** Outputs from compiling a contract. */
export type CompileArtifact = {
    /** Array of JSON objects  */
    abi: Record<string, any>[]

    /** Bytecode of the compiled contract, represented as a hexadecimal string. */
    bytecode: string

    /** NOTE: Other fields exist, but are not used and are therefore not typed. */
}

export enum Environment {
    MOONRIVER = "moonriver",
    MOONBEAM = "moonbeam",
    MOONBASE = "moonbase",
}

export type ProtocolOptions = {
    rpcProvider: ethers.providers.JsonRpcProvider
}