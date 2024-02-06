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
    MTokenv2
} from "../types/ethers-contracts";
import * as types from "../types/ethers-contracts";
import { DAYS_PER_YEAR, SECONDS_PER_DAY } from ".";

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

    VIEWS: MoonwellContract<types.MoonwellViewsV1 | types.MoonwellViewsV2>
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
    BASEGOERLI = "basegoerli",
    BASE = "base",
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
    // The GraphQL API url for this environment
    graphQLURL: string,
    // The Governance GraphQL API url for this environment
    govGraphQLURL: string,
    // The RPC API for this config
    rpcNode: string
    blockExplorerUrl: string

    governanceEnvironment: Environment

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


export class BN {

    rawValue: BigNumber
    value: number

    constructor(
        shiftedBy?: number,
        rawValue?: BigNumber | string
    ) {
        this.rawValue = new BigNumber(rawValue?.toString() || '0')
        if (this.rawValue.isZero() || !shiftedBy) { this.value = this.rawValue.toNumber() }
        else this.value = this.rawValue.shiftedBy(shiftedBy).toNumber()
    }
}

export class StakingInfo {

    cooldown: BN
    unstakeWindow: BN
    distributionEnd: BN
    totalSupply: BN
    emissionPerSecond: BN
    apr: BN

    constructor(cooldown: BigNumber,
        unstakeWindow: BigNumber,
        distributionEnd: BigNumber,
        totalSupply: BigNumber,
        emissionPerSecond: BigNumber
    ) {
        this.cooldown = new BN(0, cooldown);
        this.unstakeWindow = new BN(0, unstakeWindow);
        this.distributionEnd = new BN(0, distributionEnd);
        this.totalSupply = new BN(-18, totalSupply);
        this.emissionPerSecond = new BN(0, emissionPerSecond);
        this.apr = new BN(
            0,
            this.emissionPerSecond.rawValue
                .times(SECONDS_PER_DAY)
                .times(DAYS_PER_YEAR)
                .plus(this.totalSupply.rawValue)
                .div(this.totalSupply.rawValue)
                .minus(1)
                .times(100)
        )


    }
}

export class ProtocolInfo {
    seizeGuardianPaused: boolean
    transferGuardianPaused: boolean

    constructor(seizePaused: boolean, transferPaused: boolean) {
        this.seizeGuardianPaused = seizePaused;
        this.transferGuardianPaused = transferPaused;
    }
}