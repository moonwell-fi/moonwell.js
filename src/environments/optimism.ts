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
import BaseMoonwellViews from "../deploy-artifacts/BaseMoonwellViews.json";
import TransparentProxy from '../deploy-artifacts/TransparentProxy.json'
import VoteCollector from '../deploy-artifacts/VoteCollector.json'
import XWELL from '../deploy-artifacts/XWELL.json'
import StakedWell from '../deploy-artifacts/StakedWell.json'

import * as types from "../../types/ethers-contracts";

export const environment: EnvironmentConfig = {
    environment: Environment.OPTIMISM,
    networkID: 10,
    chainID: 10,
    chainName: 'Optimism',
    nativeAssetTicker: 'ETH',
    protocolAssetTicker: 'WELL',
    safetyModuleTicker: 'stkWELL',
    ponderURL: 'https://ponder.moonwell.fi',
    rpcNode: 'https://optimism-mainnet.blastapi.io/745df601-de88-4079-8898-12f7e9688150',
    publicRpcNode: 'https://optimism-rpc.publicnode.com',
    wssNode: 'wss://optimism-mainnet.blastapi.io/745df601-de88-4079-8898-12f7e9688150',
    blockExplorerUrl: 'https://optimistic.etherscan.io/',
    contracts: {

        VIEWS: new MoonwellContractWithProxy<types.BaseMoonwellViews, types.TransparentProxy>(
            '0x821Ff3a967b39bcbE8A018a9b1563EAf878bad39',
            BaseMoonwellViews,
            TransparentProxy,
        ),

        SAFETY_MODULE: new MoonwellContractWithProxy<types.StakedWell, types.TransparentProxy>(
            '0xfB26A4947A38cb53e2D083c6490060CCCE7438c5',
            StakedWell,
            TransparentProxy,
        ),


        TEMPORAL_GOVERNOR: new MoonwellContract<types.TemporalGovernor>(
            '0x17C9ba3fDa7EC71CcfD75f978Ef31E21927aFF3d',
            TemporalGovernor,
        ),

        VOTE_COLLECTOR: new MoonwellContract<types.VoteCollector>(
            '0x3C968481BE3ba1a99fed5f73dB2Ff51151037738',
            VoteCollector,
        ),

        XWELL: new MoonwellContract<types.XWELL>(
            '0xA88594D404727625A9437C3f886C7643872296AE',
            XWELL,
        ),

        COMPTROLLER: new MoonwellContractWithProxy<types.Comptrollerv2, types.Unitrollerv2>(
            '0xCa889f40aae37FFf165BccF69aeF1E82b5C511B9',
            Comptrollerv2,
            Unitrollerv2,
        ),

        MULTI_REWARD_DISTRIBUTOR: new MoonwellContract<types.MultiRewardDistributor>(
            '0xF9524bfa18C19C3E605FbfE8DFd05C6e967574Aa',
            MultiRewardDistributor,
        ),

        ORACLE: new MoonwellContract<types.ChainlinkOraclev2>(
            '0x2f1490bD6aD10C9CE42a2829afa13EAc0b746dcf',
            ChainlinkOraclev2
        ),

        INTEREST_RATE_MODEL_WETH: new MoonwellContract<types.InterestRateModelv2>(
            '0x2a55ba986a8c6EE17979f6233985414A865a280f',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_WBTC: new MoonwellContract<types.InterestRateModelv2>(
            '0xf5E4b63B8447879E8F44A988128ab1836F21f12A',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_cbETH: new MoonwellContract<types.InterestRateModelv2>(
            '0x7c94e5bddFDDB4a22C0432873844224036dFb4c1',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_wstETH: new MoonwellContract<types.InterestRateModelv2>(
            '0xEa952aCFa68ED588313134D81Ed9B19411E99B80',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_rETH: new MoonwellContract<types.InterestRateModelv2>(
            '0x612e737586Ae0cCF4a55DF3FCAF19993C16Db9E9',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_DAI: new MoonwellContract<types.InterestRateModelv2>(
            '0x04e6322D196E0E4cCBb2610dd8B8f2871E160bd7',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_USDC: new MoonwellContract<types.InterestRateModelv2>(
            '0xBD2FcfB778fef7a1650E19a6E0754E982F0fAae2',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_USDT: new MoonwellContract<types.InterestRateModelv2>(
            '0xdAdA7DB2cC9a5D3d3C12509B71964E82d4AE76D6',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_VELO: new MoonwellContract<types.InterestRateModelv2>(
            '0x7b2FaBffa53F59203aE5db1dd8E0e9A4D50c744e',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_OP: new MoonwellContract<types.InterestRateModelv2>(
            '0x69ff8B55d6f08e2266FEB10092AcE88217e0668e',
            InterestRateModelv2,
        ),

        MERC_20_IMPL: new MoonwellContract<types.MErc20Delegatorv2>(
            '0xA9CE0A4DE55791c5792B50531b18Befc30B09dcC',
            MErc20Delegatorv2,
        ),

        WETH_ROUTER: new MoonwellContract<types.WETHRouter>(
            '0xc4Ab8C031717d7ecCCD653BE898e0f92410E11dC',
            WETHRouter,
        ),

        MARKETS: {
            "USDC": new MoonwellMarketv2(
                "USD Coin",
                "USDC",
                "USDC",
                '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
                '0x8E08617b0d66359D73Aa11E11017834C29155525',
                6,
            ),
            "ETH": new MoonwellMarketv2(
                "Ethereum",
                "ETH",
                "ETH",
                '0x4200000000000000000000000000000000000006',
                '0xb4104C02BBf4E9be85AAa41a62974E4e28D59A33',
                18,
            ),
            "cbETH": new MoonwellMarketv2(
                "Coinbase Staked Ethereum",
                "cbETH",
                "cbETH",
                '0xadDb6A0412DE1BA0F936DCaeb8Aaa24578dcF3B2',
                '0x95C84F369bd0251ca903052600A3C96838D78bA1',
                18,
            ),
            "wstETH": new MoonwellMarketv2(
                "Lido Staked Ethereum",
                "wstETH",
                "wstETH",
                '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb',
                '0xbb3b1aB66eFB43B10923b87460c0106643B83f9d',
                18,
            ),
            "rETH": new MoonwellMarketv2(
                "Rocket Pool Staked Ethereum",
                "rETH",
                "rETH",
                '0x9Bcef72be871e61ED4fBbc7630889beE758eb81D',
                '0x4c2E35E3eC4A0C82849637BC04A4609Dbe53d321',
                18,
            ),
            "WBTC": new MoonwellMarketv2(
                "Wrapped Bitcoin",
                "WBTC",
                "WBTC",
                '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
                '0x6e6CA598A06E609c913551B729a228B023f06fDB',
                8,
            ),
            "USDT": new MoonwellMarketv2(
                "Tether",
                "USDT",
                "USDT",
                '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
                '0xa3A53899EE8f9f6E963437C5B3f805FEc538BF84',
                6,
            ),
            "VELO": new MoonwellMarketv2(
                "Velodrome Finance",
                "VELO",
                "VELO",
                '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05',
                '0x21d851585840942B0eF9f20d842C00C5f3735eaF',
                18,
            ),
            "DAI": new MoonwellMarketv2(
                "DAI Stablecoin",
                "DAI",
                "DAI",
                '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
                '0x3FE782C2Fe7668C2F1Eb313ACf3022a31feaD6B2',
                18,
            ),
            "OP": new MoonwellMarketv2(
                "Optimism",
                "OP",
                "OP",
                '0x4200000000000000000000000000000000000042',
                '0x9fc345a20541Bf8773988515c5950eD69aF01847',
                18,
            ),
        }
    }
}
