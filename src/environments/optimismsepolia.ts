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
import VoteCollector from '../deploy-artifacts/VoteCollector.json'
import XWELL from '../deploy-artifacts/XWELL.json'

import * as types from "../../types/ethers-contracts";

export const environment: EnvironmentConfig = {
    environment: Environment.OPTIMISMSEPOLIA,
    networkID: 11155420,
    chainID: 11155420,
    chainName: 'Optimism (Testnet)',
    nativeAssetTicker: 'ETH',
    protocolAssetTicker: 'WELL',
    safetyModuleTicker: 'stkWELL',
    ponderURL: 'https://ponder-staging.moonwell.fi',
    rpcNode: 'https://optimism-sepolia.blastapi.io/745df601-de88-4079-8898-12f7e9688150',
    publicRpcNode: 'https://sepolia.optimism.io/',
    wssNode: 'wss://optimism-sepolia.blastapi.io/745df601-de88-4079-8898-12f7e9688150',
    blockExplorerUrl: 'https://sepolia-optimistic.etherscan.io/',
    contracts: {

        VIEWS: new MoonwellContractWithProxy<types.BaseMoonwellViews, types.TransparentProxy>(
            '0x821Ff3a967b39bcbE8A018a9b1563EAf878bad39', // TODO: Add Optimism Sepolia Views address
            BaseMoonwellViews,
            TransparentProxy,
        ),


        TEMPORAL_GOVERNOR: new MoonwellContract<types.TemporalGovernor>(
            '0xBeD75989b06a286e6E81c7aB1129003Fe49813eD',
            TemporalGovernor,
        ),

        VOTE_COLLECTOR: new MoonwellContract<types.VoteCollector>(
            '', // TODO: Add Optimism Sepolia
            VoteCollector,
        ),

        XWELL: new MoonwellContract<types.XWELL>(
            '', // TODO: Add Optimism Sepolia
            XWELL,
        ),

        COMPTROLLER: new MoonwellContractWithProxy<types.Comptrollerv2, types.Unitrollerv2>(
            '0xb6479f6FA1F1FBCe20C63d240fD9cC3dD55C90a1',
            Comptrollerv2,
            Unitrollerv2,
        ),

        MULTI_REWARD_DISTRIBUTOR: new MoonwellContract<types.MultiRewardDistributor>(
            '0x10D78210afB247Dbd18c6733cf3EAd861440A5b9',
            MultiRewardDistributor,
        ),

        ORACLE: new MoonwellContract<types.ChainlinkOraclev2>(
            '0x8D895dc2f91A611ee55462cDf594975e052Bd687',
            ChainlinkOraclev2
        ),

        INTEREST_RATE_MODEL_USDC: new MoonwellContract<types.InterestRateModelv2>(
            '0x85851253F64591d69105cEf970474a7006b0264b',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_WETH: new MoonwellContract<types.InterestRateModelv2>(
            '0x13a27ca850c085BAE1E53F9939E4694098F6d4c0',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_wstETH: new MoonwellContract<types.InterestRateModelv2>(
            '0xfb6f9c0fBdB91d72745b0A5f3E4209Bea087d2bA',
            InterestRateModelv2,
        ),

        MERC_20_IMPL: new MoonwellContract<types.MErc20Delegatorv2>(
            '0xb58bd15aDC944b547806dDcaA80cd7C462b9Af19',
            MErc20Delegatorv2,
        ),

        WETH_ROUTER: new MoonwellContract<types.WETHRouter>(
            '0x454cA8988986d4B0C3CE074be7C94a599393631a',
            WETHRouter,
        ),

        SAFETY_MODULE: new MoonwellContractWithProxy<types.StakedWell, types.TransparentProxy>(
            '', // TODO: Add Optimism Sepolia
            StakedWell,
            TransparentProxy,
        ),

        MARKETS: {
            "USDC.test": new MoonwellMarketv2(
                "USD Coin",
                "USDC",
                "USDC.test",
                '0x1A28908DD5357C611D12608212CBEF9626750E41',
                '0xEc5DF73AaC57BFb41b12AC7732240C5E60FC3865',
                6,
            ),
            "ETH.test": new MoonwellMarketv2(
                "Ethereum",
                "ETH",
                "ETH.test",
                '0x4200000000000000000000000000000000000006',
                '0xc72A31fA38935E2e2d82FcE6506Cc4baff2DBC28',
                18,
            ),
            "wstETH.test": new MoonwellMarketv2(
                "Lido Staked Ethereum",
                "wstETH",
                "wstETH.test",
                '0x930e03A7dD7352870B70D13F122956c7740C1797',
                '0x2bdA97A1571eBd4C0E985f57fb0F229c4D664f2A',
                18,
            ),
        }
    }
}
