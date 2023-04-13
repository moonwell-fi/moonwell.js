import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import { MoonwellContract, MoonwellContractWithProxy } from "./contracts";
import {
    MoonwellGovernorArtemis,
    MoonwellGovernorApollo,
    Comptroller,
    TokenSaleDistributor,
    TokenSaleDistributorProxy,
    Well,
    Maximillion,
    ChainlinkOracle,
    StakedWell,
    TransparentProxy,
    Timelock,
    InterestRateModel,
    MErc20Delegator,
    StellaswapRewarder, SolarbeamRewarder, MToken
} from "../types/ethers-contracts";
import * as types from "../types/ethers-contracts";

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

    /** Whether a market is deprecated */
    isDeprecated?: boolean
    
    marketContract: MoonwellContract<MToken>
}

export type ContractBundle = {
    /** The environment's Claims contract address, null if non-existent */
    CLAIMS: MoonwellContractWithProxy<TokenSaleDistributor, TokenSaleDistributorProxy> | null

    /** The environment's Comptroller contract address */
    COMPTROLLER: MoonwellContract<Comptroller>

    /** The environment's Governor contract address, null if non-existent */
    GOVERNOR: MoonwellContract<MoonwellGovernorArtemis | MoonwellGovernorApollo> | null

    /** The environment's Gov Token (WELL/MFAM) address */
    GOV_TOKEN: MoonwellContract<Well>

    /** The environment's Maximillion deployment, which is used for closing positions in the market after accuring a final round of interest */
    MAXIMILLION: MoonwellContract<Maximillion>

    /** The environment's deployed PriceOracle, which brokers lookups to Chainlink */
    ORACLE: MoonwellContract<ChainlinkOracle>

    /** The environment's Safety Module */
    SAFETY_MODULE: MoonwellContractWithProxy<StakedWell, TransparentProxy>

    /** The environment's Governor Timelock address, null if non-existent */
    TIMELOCK: MoonwellContract<Timelock> | null

    /** The environment's interest model. */
    INTEREST_RATE_MODEL: MoonwellContract<InterestRateModel>

    /** The contract that is the implementation of MErc20s */
    MERC_20_IMPL: MoonwellContract<MErc20Delegator>

    /** The dex rewarder contract for a given environment */
    DEX_REWARDER: MoonwellContract<StellaswapRewarder | SolarbeamRewarder>

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
