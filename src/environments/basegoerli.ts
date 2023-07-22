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
    // TODO: Update this
    graphQLURL: 'https://api.thegraph.com/subgraphs/name/moonwell-fi/moonwell-moonriver',
    rpcNode: 'https://goerli.base.org',
    blockExplorerUrl: 'https://goerli.basescan.org/',
    contracts: {
        TEMPORAL_GOVERNOR: new MoonwellContract<types.TemporalGovernor>(
            '0x36d1CCd52b7DF66b9038728540A1bB558902A364',
            TemporalGovernor,
        ),
            

        COMPTROLLER: new MoonwellContractWithProxy<types.Comptrollerv2, types.Unitrollerv2>(
            '0xE7074819f2418E553a07450eEd3Bb089207aB0a4',
            Comptrollerv2,
            Unitrollerv2,
        ),

        MULTI_REWARD_DISTRIBUTOR: new MoonwellContract<types.MultiRewardDistributor>(
            '0xA09c095735c0BaEEfC7F60E198edec34390A615C',
            MultiRewardDistributor,
        ),

        ORACLE: new MoonwellContract<types.ChainlinkOraclev2>(
            '0xf7E1F609a4EBF0B0e38bBDb1D6a1f637d25679D0',
            ChainlinkOraclev2
        ),

        INTEREST_RATE_MODEL: new MoonwellContract<types.InterestRateModelv2>(
            '0x152DEDB508bE6F5c050f44Fb5AefcA150CD7eB34',
            InterestRateModelv2,
        ),

        MERC_20_IMPL: new MoonwellContract<types.MErc20Delegatorv2>(
            '0x83C5dE4dDc7bE93907Cb599aCFd2db47838e00df',
            MErc20Delegatorv2,
        ),

        MARKETS: {
            "WBTC.test": new MoonwellMarketv2(
                "Bitcoin",
                "BTC",
                "WBTC.test",
                '0xc4A363d8347818AD672005A64E92141F63878D81',
                "0x6FaEA4BD6FecaBA689bd0Eb678b34584Fe3C3772",
                18,
            ),
            "USDC.test": new MoonwellMarketv2(
                "USD Coin",
                "USDC",
                "USDC.test",
                '0xcF66301FfFe00b27C9ed869B431dC06bE63102f0',
                "0xfd693042E524284796226234c4878F9b790Ef6C2",
                6,
            ),
            "ETH.test": new MoonwellMarketv2(
                "Ethereum",
                "ETH",
                "ETH.test",
                '0x3e0e24b307388C82781080C4C0a844C707779c37',
                "0x1376a2d851209cb4EcA0288C8d4e10c3C67526F7",
                18,
            ),
        }
    }
}
