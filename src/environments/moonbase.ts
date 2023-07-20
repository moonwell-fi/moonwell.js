import {Environment, EnvironmentConfig} from "../types";
import {MoonwellContract, MoonwellContractWithProxy, MoonwellMarket} from '../contracts'

import TokenSaleDistributor from '../deploy-artifacts/TokenSaleDistributor.json'
import TokenSaleDistributorProxy from '../deploy-artifacts/TokenSaleDistributorProxy.json'
import MoonwellGovernorArtemis from '../deploy-artifacts/MoonwellGovernorArtemis.json'
import Comptroller from '../deploy-artifacts/Comptroller.json'
import Unitroller from '../deploy-artifacts/Unitroller.json'
import Well from '../deploy-artifacts/Well.json'
import Maximillion from '../deploy-artifacts/Maximillion.json'
import ChainlinkOracle from '../deploy-artifacts/ChainlinkOracle.json'
import StakedWell from '../deploy-artifacts/StakedWell.json'
import TransparentProxy from '../deploy-artifacts/TransparentProxy.json'
import Timelock from '../deploy-artifacts/Timelock.json'
import InterestRateModel from '../deploy-artifacts/InterestRateModel.json'
import MErc20Delegator from '../deploy-artifacts/MErc20Delegator.json'
import SolarbeamRewarder from '../deploy-artifacts/SolarbeamRewarder.json'

import * as types from "../../types/ethers-contracts";

export const environment: EnvironmentConfig = {
    environment: Environment.MOONRIVER,
    networkID: 1285,
    chainID: 1285,
    nativeAssetTicker: 'MOVR',
    protocolAssetTicker: 'MFAM',
    graphQLURL: 'https://api.thegraph.com/subgraphs/name/moonwell-fi/moonwell-moonriver',
    rpcNode: 'https://rpc.api.moonriver.moonbeam.network',
    blockExplorerUrl: 'https://moonriver.moonscan.io/',
    contracts: {
        CLAIMS: new MoonwellContractWithProxy<types.TokenSaleDistributor, types.TokenSaleDistributorProxy>(
            '0xe7e6cdb90797f053229c0a81c3de9dc8110188b5',
            TokenSaleDistributor,
            TokenSaleDistributorProxy,
        ),

        GOVERNOR: new MoonwellContract<types.MoonwellGovernorArtemis>(
            '0x1eA239b116b911374BA144EFb5cA077d3A224fE9',
            MoonwellGovernorArtemis,
        ),

        TEMPORAL_GOVERNOR: null,

        COMPTROLLER: new MoonwellContractWithProxy<types.Comptroller, types.Unitroller>(
            '0x4524e0Dfa042188B1F9f804642456277dbDBE253',
            Comptroller,
            Unitroller,
        ),

        GOV_TOKEN: new MoonwellContract<types.Well>(
            '0x6efCf8fB404AC6DE593cE461877A634d067C942E',
            Well
        ),

        MAXIMILLION: new MoonwellContract<types.Maximillion>(
            '0xa2A09f11208327e69Ede9c2C6eE95282a13527AF',
            Maximillion
        ),

        ORACLE: new MoonwellContract<types.ChainlinkOracle>(
            '0x0A3F1AA8bc5C51bbD313e63644f2297aA170FF87',
            ChainlinkOracle
        ),

        SAFETY_MODULE: new MoonwellContractWithProxy<types.StakedWell, types.TransparentProxy>(
            '0x11fD9c97B0B8F50f6EB0e68342e3de8F76dd45fc',
            StakedWell,
            TransparentProxy
        ),

        TIMELOCK: new MoonwellContract<types.Timelock>(
            '0xE2270EEf667A66AF330f8411C17E79BdA2FC3595',
            Timelock
        ),

        INTEREST_RATE_MODEL: new MoonwellContract<types.InterestRateModel>(
            '0x4BABE1d4f89CbDdA49f0402B2C39d0c1923BF4A7',
            InterestRateModel,
        ),

        MERC_20_IMPL: new MoonwellContract<types.MErc20Delegator>(
            '0x83C5dE4dDc7bE93907Cb599aCFd2db47838e00df',
            MErc20Delegator,
        ),

        DEX_REWARDER: new MoonwellContract<types.SolarbeamRewarder>(
            '0xC58Fe6C98076175FEBebdc73485576eA1c3750BF',
            SolarbeamRewarder
        ),

        MARKETS: {
            "BTC.dev": new MoonwellMarket(
                "Bitcoin",
                "BTC",
                '0x0A996B2f808EF4Cd59a3790c6Bb8bf6E4105e0aA',
                "0x4b088a4b3250684c362911078A0E945AcC21E236",
                8,
            ),
            "USDC.dev": new MoonwellMarket(
                "USD Coin",
                "USDC",
                '0x3799D95Ee109129951c6b31535b2B5AA6dbF108c',
                "0x18f324E21846F1C21F4fbF8228705B17897eF15A",
                18,
            ),
            "ETH.dev": new MoonwellMarket(
                "Ethereum",
                "ETH",
                '0xf7A200a738f807B78c7a60aA315e115612C6c33a',
                "0xa28C4680058f4A73f6172A6ed23C9E624E443CFB",
                18,
            ),
            "DEV": new MoonwellMarket(
                "DEV",
                "DEV",
                null,
                "0x827Bb1E617B862d4BC81a6a7995a34dF6EE78a63",
                18,
            ),
            "FRAX": new MoonwellMarket(
                "Frax",
                "FRAX",
                '0x90384c78892be628DF6C76c3E49714Ef719117f4',
                "0x241D3210B0706e0c40CE5274bc23a9E494162F5F",
                18,
            ),
            "USDT.dev": new MoonwellMarket(
                "Tether",
                "USDT",
                '0xDc67f6725B90B7e623f008028835B00F8c399FE3',
                "0x1C3132CF5e41Eb3660B403db494711Ac5F383125",
                18,
            )
        }
    }
}
