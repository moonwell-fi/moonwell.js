import {Environment, EnvironmentConfig} from "../types";
import {MoonwellContract, MoonwellContractWithProxy, MoonwellMarketv2} from '../contracts'

import TemporalGovernor from "../deploy-artifacts/TemporalGovernor.json";
import Comptrollerv2 from '../deploy-artifacts/Comptrollerv2.json'
import MultiRewardDistributor from '../deploy-artifacts/MultiRewardDistributor.json'
import Unitrollerv2 from '../deploy-artifacts/Unitrollerv2.json'
import ChainlinkOraclev2 from '../deploy-artifacts/ChainlinkOraclev2.json'
import InterestRateModelv2 from '../deploy-artifacts/InterestRateModelv2.json'
import MErc20Delegatorv2 from '../deploy-artifacts/MErc20Delegatorv2.json'
import WETHRouter from '../deploy-artifacts/WETHRouter.json'

import * as types from "../../types/ethers-contracts";

export const environment: EnvironmentConfig = {
    environment: Environment.BASEGOERLI,
    networkID: 84531,
    chainID: 84531,
    chainName: 'Base (Testnet)',
    nativeAssetTicker: 'USDC',
    protocolAssetTicker: 'WELL',
    safetyModuleTicker: 'stkWELL',
    // TODO: Update this
    // graphQLURL: 'https://api.thegraph.com/subgraphs/name/moonwell-fi/moonwell-moonriver',
    graphQLURL: 'https://subgraph.satsuma-prod.com/dd48bfe50148/moonwell/basegoerli/api',
    rpcNode: 'https://goerli.base.org',
    blockExplorerUrl: 'https://goerli.basescan.org/',
    contracts: {
        TEMPORAL_GOVERNOR: new MoonwellContract<types.TemporalGovernor>(
            '0xBaA4916ACD2d3Db77278A377f1b49A6E1127d6e6',
            TemporalGovernor,
        ),
            

        COMPTROLLER: new MoonwellContractWithProxy<types.Comptrollerv2, types.Unitrollerv2>(
            '0xD73f191a50D4BFb5301AE0dF27F5164332df4618',
            Comptrollerv2,
            Unitrollerv2,
        ),

        MULTI_REWARD_DISTRIBUTOR: new MoonwellContract<types.MultiRewardDistributor>(
            '0x92ad0cEf7E4f89480ab65b9B9F666327E175702f',
            MultiRewardDistributor,
        ),

        ORACLE: new MoonwellContract<types.ChainlinkOraclev2>(
            '0x037fd3c408086E900c71Ca33abF67eC33288eA8c',
            ChainlinkOraclev2
        ),

        INTEREST_RATE_MODEL_USDC: new MoonwellContract<types.InterestRateModelv2>(
            '0x4696f537Ad80ef53D314624AD502f9d82397357e',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_WETH: new MoonwellContract<types.InterestRateModelv2>(
            '0xd14ab729d48E92C25AC6D18F8D8182d850f485be',
            InterestRateModelv2,
        ),  

        INTEREST_RATE_MODEL_WBTC: new MoonwellContract<types.InterestRateModelv2>(
            '0x9B9929848845269C08160873346f490e6F45e2C7',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_cbETH: new MoonwellContract<types.InterestRateModelv2>(
            '0xd86078e8802098A744F7c27D36304d905A1C2F02',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_wstETH: new MoonwellContract<types.InterestRateModelv2>(
            '0xf96cB4716EC5012c3Ea8c8b71eD79c1be68a8f44',
            InterestRateModelv2,
        ),

        MERC_20_IMPL: new MoonwellContract<types.MErc20Delegatorv2>(
            '0x8DDc78645E18CDb4b6fcE65777642ef4fFdC6115',
            MErc20Delegatorv2,
        ),

        WETH_ROUTER: new MoonwellContract<types.WETHRouter>(
            '0x3b995646420BcfE8395bA9F44251415126f7BD7A',
            WETHRouter,
        ),

        MARKETS: {
            "USDC.test": new MoonwellMarketv2(
                "USD Coin",
                "USDC",
                "USDC.test",
                '0x64487F97E95266a291514574fFe640A4AC45Bcce',
                "0x765741AB1937d85D4758e004Ef906A5E18839EFe",
                6,
            ),
            "ETH.test": new MoonwellMarketv2(
                "Ethereum",
                "ETH",
                "ETH.test",
                '0x4200000000000000000000000000000000000006',
                "0xdd702A5B463adB3b8AfddDB77B88DFaca8B2D3Ca",
                18,
            ),
            "WBTC.test": new MoonwellMarketv2(
                "Wrapped Bitcoin",
                "WBTC",
                "WBTC.test",
                '0xde1a381cAa4189D39c363985d9969D7D206970Bd',
                "0xe94362a857df3Fc87E80A8b26e16e3C97C861a98",
                8,
            ),
            "cbETH.test": new MoonwellMarketv2(
                "Coinbase Staked Ethereum",
                "cbETH",
                "cbETH.test",
                '0x74a9f643b2DeA9829b5f2194A7f8d3440D8932F0',
                '0x5E31c5753598A6618A4D1bb2d35f63fBa757c9e3',
                18,
            ),
            "wstETH.test": new MoonwellMarketv2(
                "Lido Staked Ethereum",
                "wstETH",
                "wstETH.test",
                '0x3A4c72391FA1e474663ffB43bbA5c851014c0065',
                '0x1DCc89000AE6EAF18bD855098d3670E820A8d0c4',
                18,
            ),
        }
    }
}
