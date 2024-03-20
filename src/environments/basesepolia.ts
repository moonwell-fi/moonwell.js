import { Environment, EnvironmentConfig } from "../types";
import { MoonwellContract, MoonwellContractWithProxy, MoonwellMarketv2 } from '../contracts'

import TemporalGovernor from "../deploy-artifacts/TemporalGovernor.json";
import Comptrollerv2 from '../deploy-artifacts/Comptrollerv2.json'
import MultiRewardDistributor from '../deploy-artifacts/MultiRewardDistributor.json'
import Unitrollerv2 from '../deploy-artifacts/Unitrollerv2.json'
import ChainlinkOraclev2 from '../deploy-artifacts/ChainlinkOraclev2.json'
import InterestRateModelv2 from '../deploy-artifacts/InterestRateModelv2.json'
import MErc20Delegatorv2 from '../deploy-artifacts/MErc20Delegatorv2.json'
import WETHRouter from '../deploy-artifacts/WETHRouter.json'
import StakedWell from '../deploy-artifacts/StakedWell.json'
import TransparentProxy from '../deploy-artifacts/TransparentProxy.json'
import BaseMoonwellViews from "../deploy-artifacts/BaseMoonwellViews.json";


import * as types from "../../types/ethers-contracts";

export const environment: EnvironmentConfig = {
    environment: Environment.BASESEPOLIA,
    networkID: 84532,
    chainID: 84532,
    chainName: 'Base (Testnet)',
    nativeAssetTicker: 'ETH',
    protocolAssetTicker: 'WELL',
    safetyModuleTicker: 'stkWELL',
    graphQLURL: 'https://subgraph.satsuma-prod.com/dd48bfe50148/moonwell/basesepolia/api',
    govGraphQLURL: 'https://subgraph.satsuma-prod.com/dd48bfe50148/moonwell/governance-base-sepolia/api',
    rpcNode: 'https://sepolia.base.org',
    publicRpcNode: 'https://sepolia.base.org',
    wssNode: 'wss://sepolia.base.org',
    blockExplorerUrl: 'https://sepolia.basescan.org/',
    contracts: {

        VIEWS: new MoonwellContractWithProxy<types.BaseMoonwellViews, types.TransparentProxy>(
            '0x50F2E10171D8856338a925bD795cE7D055218428',
            BaseMoonwellViews,
            TransparentProxy,
        ),


        TEMPORAL_GOVERNOR: new MoonwellContract<types.TemporalGovernor>(
            '0xc01EA381A64F8BE3bDBb01A7c34D809f80783662',
            TemporalGovernor,
        ),


        COMPTROLLER: new MoonwellContractWithProxy<types.Comptrollerv2, types.Unitrollerv2>(
            '0xC72ba45f2Ae134F21DAEb2b7B5fd5De0064Ee9bB',
            Comptrollerv2,
            Unitrollerv2,
        ),

        MULTI_REWARD_DISTRIBUTOR: new MoonwellContract<types.MultiRewardDistributor>(
            '0xcdC49088c040f1209F1aa548b2Ae40d8E24B53A5',
            MultiRewardDistributor,
        ),

        ORACLE: new MoonwellContract<types.ChainlinkOraclev2>(
            '0x1AbEA09b07276669de5BC3a11F820fdC4ba529d1',
            ChainlinkOraclev2
        ),

        INTEREST_RATE_MODEL_USDBC: new MoonwellContract<types.InterestRateModelv2>(
            '0x7073814cfF6c183010df4D2BEC895a04bdB7f8cd',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_WETH: new MoonwellContract<types.InterestRateModelv2>(
            '0x2fdF038b9D09F7fA5E775cEF6787cdf0C780961c',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_cbETH: new MoonwellContract<types.InterestRateModelv2>(
            '0x38D292Adf50f0cceb12e06e1303d875F553D9b29',
            InterestRateModelv2,
        ),

        MERC_20_IMPL: new MoonwellContract<types.MErc20Delegatorv2>(
            '0x1c7b1689809F9f572e3DF9c1e063473549bdf37c',
            MErc20Delegatorv2,
        ),

        WETH_ROUTER: new MoonwellContract<types.WETHRouter>(
            '0xB7eAfB1B503c189CA4E5f19bCe272029cD98Cf1F',
            WETHRouter,
        ),

        SAFETY_MODULE: new MoonwellContractWithProxy<types.StakedWell, types.TransparentProxy>(
            '0x9374e4Ff60bBB28310C598695fC671A3c4c07E77',
            StakedWell,
            TransparentProxy,
        ),

        MARKETS: {
            "USDbC.test": new MoonwellMarketv2(
                "USD Coin",
                "USDbC",
                "USDbC.test",
                '0x4616975f7E6045FD9737e95bC527e9e14c727BD2',
                "0x876852425331a113d8E432eFFB3aC5BEf38f033a",
                6,
            ),
            "ETH.test": new MoonwellMarketv2(
                "Ethereum",
                "ETH",
                "ETH.test",
                '0x4200000000000000000000000000000000000006',
                "0x2F39a349A79492a70E152760ce7123A1933eCf28",
                18,
            ),
            "cbETH.test": new MoonwellMarketv2(
                "Coinbase Staked Ethereum",
                "cbETH",
                "cbETH.test",
                '0xdbc885569E711262926803184eC9Ff73816fc953',
                '0x5302EbD8BC32435C823c2e22B04Cd6c45f593e89',
                18,
            ),
        }
    }
}
