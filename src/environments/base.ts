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
    environment: Environment.BASE,
    networkID: 8453,
    chainID: 8453,
    chainName: 'Base',
    nativeAssetTicker: 'ETH',
    protocolAssetTicker: 'WELL',
    safetyModuleTicker: 'stkWELL',
    // graphQLURL: 'https://subgraph.satsuma-prod.com/dd48bfe50148/moonwell/base/api',
    graphQLURL: 'https://api.goldsky.com/api/public/project_clrkxxojt6qut01x1a4143b4c/subgraphs/moonwell-base/prod/gn',
    govGraphQLURL: 'https://api.goldsky.com/api/public/project_clrkxxojt6qut01x1a4143b4c/subgraphs/governance-moonbeam/prod/gn',
    // govGraphQLURL: 'https://subgraph.satsuma-prod.com/dd48bfe50148/moonwell/governance-moonbeam/api',
    rpcNode: 'https://base-mainnet.g.alchemy.com/v2/sTC_2N1UZj-sDCdsZcItpYsFodWYSyna',
    publicRpcNode: 'https://mainnet.base.org',
    wssNode: 'wss://base-mainnet.g.alchemy.com/v2/sTC_2N1UZj-sDCdsZcItpYsFodWYSyna',
    blockExplorerUrl: 'https://basescan.org/',
    contracts: {
        TEMPORAL_GOVERNOR: new MoonwellContract<types.TemporalGovernor>(
            '0x8b621804a7637b781e2BbD58e256a591F2dF7d51',
            TemporalGovernor,
        ),
            

        COMPTROLLER: new MoonwellContractWithProxy<types.Comptrollerv2, types.Unitrollerv2>(
            '0xfBb21d0380beE3312B33c4353c8936a0F13EF26C',
            Comptrollerv2,
            Unitrollerv2,
        ),

        MULTI_REWARD_DISTRIBUTOR: new MoonwellContract<types.MultiRewardDistributor>(
            '0xe9005b078701e2A0948D2EaC43010D35870Ad9d2',
            MultiRewardDistributor,
        ),

        ORACLE: new MoonwellContract<types.ChainlinkOraclev2>(
            '0xEC942bE8A8114bFD0396A5052c36027f2cA6a9d0',
            ChainlinkOraclev2
        ),

        INTEREST_RATE_MODEL_USDBC: new MoonwellContract<types.InterestRateModelv2>(
            '0x1603178b26C3bc2cd321e9A64644ab62643d138B',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_WETH: new MoonwellContract<types.InterestRateModelv2>(
            '0x4393277B02ef3cA293990A772B7160a8c76F2443',
            InterestRateModelv2,
        ),  

        /* INTEREST_RATE_MODEL_WBTC: new MoonwellContract<types.InterestRateModelv2>(
            '0x9B9929848845269C08160873346f490e6F45e2C7',
            InterestRateModelv2,
        ), */

        INTEREST_RATE_MODEL_cbETH: new MoonwellContract<types.InterestRateModelv2>(
            '0x523262439bAa43C9f722339879a15e1E05FB6696',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_wstETH: new MoonwellContract<types.InterestRateModelv2>(
            '0x1007100Ffc1aC1e63813Fb983bb3D3a8DF1CC193',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_rETH: new MoonwellContract<types.InterestRateModelv2>(
            '0x36BD01e31834A1ea271F0A135e92517a6320B511',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_DAI: new MoonwellContract<types.InterestRateModelv2>(
            '0xbc93DdFAE192926BE036c6A6Dd544a0e250Ab97D',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_USDC: new MoonwellContract<types.InterestRateModelv2>(
            '0x93AEE5b2431991eB96869057e98B0a7e9262cDEb',
            InterestRateModelv2,
        ),

        MERC_20_IMPL: new MoonwellContract<types.MErc20Delegatorv2>(
            '0x1FADFF493529C3Fcc7EE04F1f15D19816ddA45B7',
            MErc20Delegatorv2,
        ),

        WETH_ROUTER: new MoonwellContract<types.WETHRouter>(
            '0x70778cfcFC475c7eA0f24cC625Baf6EaE475D0c9',
            WETHRouter,
        ),

        MARKETS: {
            "USDC": new MoonwellMarketv2(
                "USD Coin",
                "USDC",
                "USDC",
                '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
                '0xEdc817A28E8B93B03976FBd4a3dDBc9f7D176c22',
                6,
            ),
            "ETH": new MoonwellMarketv2(
                "Ethereum",
                "ETH",
                "ETH",
                '0x4200000000000000000000000000000000000006',
                "0x628ff693426583D9a7FB391E54366292F509D457",
                18,
            ),
            "cbETH": new MoonwellMarketv2(
                "Coinbase Staked Ethereum",
                "cbETH",
                "cbETH",
                '0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22',
                '0x3bf93770f2d4a794c3d9EBEfBAeBAE2a8f09A5E5',
                18,
            ),
            "wstETH": new MoonwellMarketv2(
                "Lido Staked Ethereum",
                "wstETH",
                "wstETH",
                '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452',
                '0x627Fe393Bc6EdDA28e99AE648fD6fF362514304b',
                18,
            ),
            "rETH": new MoonwellMarketv2(
                "Rocket Pool Staked Ethereum",
                "rETH",
                "rETH",
                '0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c',
                '0xCB1DaCd30638ae38F2B94eA64F066045B7D45f44',
                18,
            ),
            /* "WBTC": new MoonwellMarketv2(
                "Wrapped Bitcoin",
                "WBTC",
                "WBTC",
                '0xde1a381cAa4189D39c363985d9969D7D206970Bd',
                "0xe94362a857df3Fc87E80A8b26e16e3C97C861a98",
                8,
            ), */
            "DAI": new MoonwellMarketv2(
                "DAI Stablecoin",
                "DAI",
                "DAI",
                '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
                '0x73b06D8d18De422E269645eaCe15400DE7462417',
                18,
            ),
            "USDbC": new MoonwellMarketv2(
                "USD Coin",
                "USDbC",
                "USDbC",
                '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca',
                "0x703843C3379b52F9FF486c9f5892218d2a065cC8",
                6,
            ),
        }
    }
}
