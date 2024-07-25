import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import { MoonwellContract, MoonwellContractWithProxy, MoonwellMarket, MoonwellMarketv2 } from "./contracts";
import {
    MoonwellGovernorArtemis,
    MoonwellGovernorApollo,
    TemporalGovernor,
    Comptroller,
    Comptrollerv2,
    MultiRewardDistributor,
    TokenSaleDistributor,
    TokenSaleDistributorProxy,
    Well,
    Maximillion,
    ChainlinkOracle,
    ChainlinkOraclev2,
    StakedWell,
    TransparentProxy,
    Timelock,
    InterestRateModel,
    InterestRateModelv2,
    MErc20Delegator,
    MErc20Delegatorv2,
    StellaswapRewarder,
    SolarbeamRewarder,
    MToken,
    MTokenv2,
    MoonwellViewsV1,
    MoonwellViewsV2,
    MoonwellViewsV3,
    BaseMoonwellViews,
    XWELL,
    MultichainGovernor,
    VoteCollector,
    XWELLLockbox,
} from "../types/ethers-contracts";
import * as types from "../types/ethers-contracts";

export type StringOrNull = string | null

export type DeployArtifact = {
    _format?: string
    contractName?: string
    sourceName?: string
    abi: any[]
    bytecode: any
    deployedBytecode: any
    linkReferences?: any
    deployedLinkReferences?: any
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

    marketContract: MoonwellContract<MToken | MTokenv2>
}

export type ContractBundle = {
    /** The environment's Claims contract address, null if non-existent */
    CLAIMS?: MoonwellContractWithProxy<TokenSaleDistributor, TokenSaleDistributorProxy>

    /** The environment's Comptroller contract address */
    COMPTROLLER: MoonwellContract<Comptroller | Comptrollerv2>

    /** The environment's MoonwellViews contract address */
    VIEWS:  MoonwellContractWithProxy<BaseMoonwellViews, TransparentProxy>

    /** The environment's Vote Collector contract address */
    VOTE_COLLECTOR?: MoonwellContract<VoteCollector>

    /** The environment's XWELL contract address */
    XWELL?: MoonwellContract<XWELL>

    /** The environment's XWELL Lockbox contract address */
    XWELL_LOCKBOX?: MoonwellContract<XWELLLockbox>

    /** The environment's Multichain Governor contract address */
    MULTICHAIN_GOVERNOR?: MoonwellContract<MultichainGovernor>

    /** The environment's MultiRewardDistributor proxy address */
    MULTI_REWARD_DISTRIBUTOR?: MoonwellContract<MultiRewardDistributor>

    /** The environment's Governor contract address, null if non-existent */
    GOVERNOR?: MoonwellContract<MoonwellGovernorArtemis | MoonwellGovernorApollo>

    /** The environment's Gov Token (WELL/MFAM) address */
    GOV_TOKEN?: MoonwellContract<Well>

    TEMPORAL_GOVERNOR?: MoonwellContract<TemporalGovernor>

    /** The environment's Maximillion deployment, which is used for closing positions in the market after accuring a final round of interest */
    MAXIMILLION?: MoonwellContract<Maximillion>

    /** The environment's deployed PriceOracle, which brokers lookups to Chainlink */
    ORACLE: MoonwellContract<ChainlinkOracle | ChainlinkOraclev2>

    /** The environment's Safety Module */
    SAFETY_MODULE?: MoonwellContractWithProxy<StakedWell, TransparentProxy>

    /** The environment's Governor Timelock address, null if non-existent */
    TIMELOCK?: MoonwellContract<Timelock>

    /** The environment's interest model. (Optional, use either this, or the markets below) */
    INTEREST_RATE_MODEL?: MoonwellContract<InterestRateModel | InterestRateModelv2>

    /** In newer environments, we have custom IR models per market (Optional, use either these or above) */
    INTEREST_RATE_MODEL_USDBC?: MoonwellContract<InterestRateModel | InterestRateModelv2>
    INTEREST_RATE_MODEL_WETH?: MoonwellContract<InterestRateModel | InterestRateModelv2>
    INTEREST_RATE_MODEL_WBTC?: MoonwellContract<InterestRateModel | InterestRateModelv2>
    INTEREST_RATE_MODEL_cbETH?: MoonwellContract<InterestRateModel | InterestRateModelv2>
    INTEREST_RATE_MODEL_wstETH?: MoonwellContract<InterestRateModel | InterestRateModelv2>
    INTEREST_RATE_MODEL_rETH?: MoonwellContract<InterestRateModel | InterestRateModelv2>
    INTEREST_RATE_MODEL_DAI?: MoonwellContract<InterestRateModel | InterestRateModelv2>
    INTEREST_RATE_MODEL_USDC?: MoonwellContract<InterestRateModel | InterestRateModelv2>
    INTEREST_RATE_MODEL_AERO?: MoonwellContract<InterestRateModel | InterestRateModelv2>
    INTEREST_RATE_MODEL_VELO?: MoonwellContract<InterestRateModel | InterestRateModelv2>
    INTEREST_RATE_MODEL_USDT?: MoonwellContract<InterestRateModel | InterestRateModelv2>
    INTEREST_RATE_MODEL_OP?: MoonwellContract<InterestRateModel | InterestRateModelv2>

    /** The contract that is the implementation of MErc20s */
    MERC_20_IMPL: MoonwellContract<MErc20Delegator | MErc20Delegatorv2>

    /** For networks with no native market, the WETH native wrapper/router */
    WETH_ROUTER?: MoonwellContract<types.WETHRouter>

    /** The dex rewarder contract for a given environment */
    DEX_REWARDER?: MoonwellContract<StellaswapRewarder | SolarbeamRewarder>

    /** An object of all deployed markets in this environment */
    MARKETS: {
        [ticker: string]: MoonwellMarket | MoonwellMarketv2
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
    BASESEPOLIA = "basesepolia",
    BASE = "base",
    OPTIMISM = "optimism",
}

export type ProtocolOptions = {
    rpcProvider: ethers.providers.JsonRpcProvider
}

export type EnvironmentConfig = {
    // The environment name/identifier
    environment: Environment,
    // The contracts for this network specifically
    contracts: ContractBundle,
    // The network ID for this environment
    networkID: number,
    // The chain ID for this environment
    chainID: number,
    // The chain name for this environment
    chainName: string,
    // The native asset ticker (i.e. MOVR, GLMR, ETH)
    nativeAssetTicker: string,
    // The gov token ticker (i.e. MFAM, WELL, wWELL)
    protocolAssetTicker: string,
    // The safety module ticker (i.e. stkWELL, stkMFAM)
    safetyModuleTicker: string,
    // The Ponder URL for this environment
    ponderURL: string,
    // The GraphQL API url for this environment (deprecated due to migrating to Ponder)
    // graphQLURL: string,
    // The Governance GraphQL API url for this environment (deprecated due to migrating to Ponder)
    // govGraphQLURL: string,
    // The RPC API for this config
    rpcNode: string
    // The public RPC API for this config
    publicRpcNode: string
    // The WSS API for this config
    wssNode: string
    blockExplorerUrl: string

    // Not sure if in use...
    // networkBlockTime: number
    // networkHomePage: string,
}

export type TMulticall = { [key: string]: [ethers.Contract, string, any[]?] }

export type TMulticallResult = { [key: string]: any }

export type TNestedMulticall = [string, TMulticall]
export type TNestedMulticallResult = {
    [key: string]: {
        [key: string]: any
    }
}

export type MulticallTransformations = {
    [key: string]: Function
}