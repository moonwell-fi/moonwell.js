import {Environment, EnvironmentConfig} from "../types";
import {MoonwellContract, MoonwellContractWithProxy, MoonwellMarketv2} from '../contracts'

import TemporalGovernor from "../deploy-artifacts/TemporalGovernor.json";
import Comptrollerv2 from '../deploy-artifacts/Comptrollerv2.json'
import MultiRewardDistributor from '../deploy-artifacts/MultiRewardDistributor.json'
import Unitrollerv2 from '../deploy-artifacts/Unitrollerv2.json'
import ChainlinkOraclev2 from '../deploy-artifacts/ChainlinkOraclev2.json'
import InterestRateModelv2 from '../deploy-artifacts/InterestRateModelv2.json'
import MErc20Delegatorv2 from '../deploy-artifacts/MErc20Delegatorv2.json'

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
            '0xe8d2B1462C59F527B2C888772A39dbE0Fba4f8b6',
            TemporalGovernor,
        ),
            

        COMPTROLLER: new MoonwellContractWithProxy<types.Comptrollerv2, types.Unitrollerv2>(
            '0xa1939Fcf6aA77a68a1f55Ff759c8Fe6a0eC59020',
            Comptrollerv2,
            Unitrollerv2,
        ),

        MULTI_REWARD_DISTRIBUTOR: new MoonwellContract<types.MultiRewardDistributor>(
            '0xF9b79cBb06D0B32F23a6c0Db2D34adDbAE0c92F0',
            MultiRewardDistributor,
        ),

        ORACLE: new MoonwellContract<types.ChainlinkOraclev2>(
            '0x3C74247d043689D58e8CacE181097Ba0fB2F1098',
            ChainlinkOraclev2
        ),

        INTEREST_RATE_MODEL_USDC: new MoonwellContract<types.InterestRateModelv2>(
            '0xd1E661964e6E179df0125ea49A4c0fC0b5C0AA2C',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_WETH: new MoonwellContract<types.InterestRateModelv2>(
            '0xA42b23AF1fBdca21f89b745AFB87Bf3123C9F215',
            InterestRateModelv2,
        ),  

        INTEREST_RATE_MODEL_WBTC: new MoonwellContract<types.InterestRateModelv2>(
            '0x99ecF6C7C1E52E2a4Fd53D2a929Eb0020F675A13',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_cbETH: new MoonwellContract<types.InterestRateModelv2>(
            '0x41bcfF1915D74ccC88aD195e00A29D71D14CB034',
            InterestRateModelv2,
        ),

        INTEREST_RATE_MODEL_wstETH: new MoonwellContract<types.InterestRateModelv2>(
            '0x0533A45538E6774dB3AE7a7097d6ab2b19fFd2b0',
            InterestRateModelv2,
        ),

        MERC_20_IMPL: new MoonwellContract<types.MErc20Delegatorv2>(
            '0x83C5dE4dDc7bE93907Cb599aCFd2db47838e00df',
            MErc20Delegatorv2,
        ),

        MARKETS: {
            "USDC.test": new MoonwellMarketv2(
                "USD Coin",
                "USDC",
                "USDC.test",
                '0xD771E77Dd0bC4d60263E0d461c3760D17D456fd6',
                "0x4016eC004869E35f24B061D27Ca6810A12f80Cfe",
                6,
            ),
            "ETH.test": new MoonwellMarketv2(
                "Ethereum",
                "ETH",
                "ETH.test",
                '0x431d95E69c50b18fb4e8234C5b9F2f1bb96527a0',
                "0xc71Ed236b67576cf43e2Eb1c961559f31213404b",
                18,
            ),
            "WBTC.test": new MoonwellMarketv2(
                "Wrapped Bitcoin",
                "WBTC",
                "WBTC.test",
                '0xB31D97a5523cBD1c68f18f45d0f983515E8AD4B2',
                "0xBa31280CBd9E4B48B78DEcaDcb850bfd50659c4f",
                8,
            ),
            "cbETH.test": new MoonwellMarketv2(
                "Coinbase Staked Ethereum",
                "cbETH",
                "cbETH.test",
                '0x2963B4F88C65e136a18F45F67Df4246fB2Bae944',
                '0x8C3270FeC76c99c7C07926ed76229C91204F9069',
                18,
            ),
            "wstETH.test": new MoonwellMarketv2(
                "Lido Staked Ethereum",
                "wstETH",
                "wstETH.test",
                '0x8675AB2d8fE76CC628a583b54F709740FDaaaC58',
                '0xd0096B9d6B817EA13b6b98d8b2527C16A093256c',
                18,
            ),
        }
    }
}
