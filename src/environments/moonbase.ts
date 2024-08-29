import { Environment, EnvironmentConfig } from "../types";
import { MoonwellContract, MoonwellContractWithProxy, MoonwellMarket } from '../contracts'

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
import TemporalGovernor from "../deploy-artifacts/TemporalGovernor.json";
import BaseMoonwellViews from "../deploy-artifacts/BaseMoonwellViews.json";
import MultichainGovernor from "../deploy-artifacts/MultichainGovernor.json";
import XWELL from '../deploy-artifacts/XWELL.json'
import XWELLLockbox from '../deploy-artifacts/XWELLLockbox.json'

import * as types from "../../types/ethers-contracts";

export const environment: EnvironmentConfig = {
    environment: Environment.MOONBASE,
    networkID: 1287,
    chainID: 1287,
    chainName: 'Moonbase',
    nativeAssetTicker: 'DEV',
    protocolAssetTicker: 'WELL',
    safetyModuleTicker: 'stkWELL',
    ponderURL: 'https://ponder-staging.moonwell.fi',
    // graphQLURL: 'https://subgraph.satsuma-prod.com/dd48bfe50148/moonwell/moonbase/api',
    // graphQLURL: 'https://api.goldsky.com/api/public/project_clrkxxojt6qut01x1a4143b4c/subgraphs/moonwell-moonbase/prod/gn',
    // govGraphQLURL: 'https://subgraph.satsuma-prod.com/dd48bfe50148/moonwell/governance-moonbase/api',
    // govGraphQLURL: 'https://api.goldsky.com/api/public/project_clrkxxojt6qut01x1a4143b4c/subgraphs/governance-moonbase/prod/gn',
    // rpcNode: 'https://moonbase-alpha.blastapi.io/745df601-de88-4079-8898-12f7e9688150',
    rpcNode: 'https://rpc.moonwell.fi/main/evm/1287',
    publicRpcNode: 'https://rpc.testnet.moonbeam.network',
    wssNode: 'wss://moonbase-alpha.blastapi.io/745df601-de88-4079-8898-12f7e9688150',
    blockExplorerUrl: 'https://moonbase.moonscan.io/',
    contracts: {
        VIEWS: new MoonwellContractWithProxy<types.BaseMoonwellViews, types.TransparentProxy>(
            "0xb9B091b56e43C7d1CECbA855aa1549CB37Cb2cb7",
            BaseMoonwellViews,
            TransparentProxy,
        ),

        CLAIMS: new MoonwellContractWithProxy<types.TokenSaleDistributor, types.TokenSaleDistributorProxy>(
            '0xe7e6cdb90797f053229c0a81c3de9dc8110188b5',
            TokenSaleDistributor,
            TokenSaleDistributorProxy,
        ),

        GOVERNOR: new MoonwellContract<types.MoonwellGovernorArtemis>(
            '0x5713DD9A2B2ce515CF9232F48B457aebFb04b292',
            MoonwellGovernorArtemis,
        ),

        MULTICHAIN_GOVERNOR: new MoonwellContractWithProxy<types.MultichainGovernor, types.TransparentProxy>(
            '0xf152d75fe4cBB11AE224B94110c31F0bdDb55850',
            MultichainGovernor,
            TransparentProxy,
        ),

        XWELL: new MoonwellContract<types.XWELL>(
            '0xE8F339C51cb2700113ec6ef552eE1D6cCA3BfB95',
            XWELL,
        ),

        XWELL_LOCKBOX: new MoonwellContract<types.XWELLLockbox>(
            '0x751E27d340EFe99e35C4E68f9c3dF94BB4BE2aEA',
            XWELLLockbox,
        ),

        COMPTROLLER: new MoonwellContractWithProxy<types.Comptroller, types.Unitroller>(
            '0x1a14f9af09648F6550c339A71D3e449e31B8E0Ae',
            Comptroller,
            Unitroller,
        ),

        GOV_TOKEN: new MoonwellContract<types.Well>(
            '0x96d50c8b4072A1246d40c4455D7b6D748f7D4BD3',
            Well
        ),

        MAXIMILLION: new MoonwellContract<types.Maximillion>(
            '0x0EcD6826203B89f960633931A58b51916e985fA0',
            Maximillion
        ),

        ORACLE: new MoonwellContract<types.ChainlinkOracle>(
            '0xd5448A26b31ff94F62C8301577f7A3980CFdcd2d',
            ChainlinkOracle
        ),

        SAFETY_MODULE: new MoonwellContractWithProxy<types.StakedWell, types.TransparentProxy>(
            '0xCBfcab5e2E9DdC0B5Fa8B06Cd0e7a928c6D58DC0',
            StakedWell,
            TransparentProxy
        ),

        TIMELOCK: new MoonwellContract<types.Timelock>(
            '0x43A720C2690B00Ae0a0F9E4b79ED24184D9e8F0A',
            Timelock
        ),

        INTEREST_RATE_MODEL: new MoonwellContract<types.InterestRateModel>(
            '0x9347F66FFCfaBc2ed22F3BDa4184f61E135C9481',
            InterestRateModel,
        ),

        MERC_20_IMPL: new MoonwellContract<types.MErc20Delegator>(
            '0xd6AF44F2bf079CF2e0C342B1BdD7dc7CA85eF444',
            MErc20Delegator,
        ),

        DEX_REWARDER: new MoonwellContract<types.SolarbeamRewarder>(
            '0xC58Fe6C98076175FEBebdc73485576eA1c3750BF',
            SolarbeamRewarder
        ),

        TEMPORAL_GOVERNOR: new MoonwellContract<types.TemporalGovernor>(
            '0xc01EA381A64F8BE3bDBb01A7c34D809f80783662',
            TemporalGovernor,
        ),

        MARKETS: {
            "BTC.dev": new MoonwellMarket(
                "Bitcoin",
                "BTC",
                "BTC.dev",
                '0xDe71A6CFD13dE924c84C3a11f6c96Ef083df017d',
                "0xF43Cd9e03d925Dd9c660b46AE86eA350b2C299D2",
                8,
            ),
            "USDC.dev": new MoonwellMarket(
                "USD Coin",
                "USDC",
                "USDC.dev",
                '0x1AC96f01B9d2c6AdD1cEEBDEeA0B6B48Db6C0827',
                "0xbd17C45DB7C9782B34A5e6b22Be9755f62545009",
                18,
            ),
            "ETH.dev": new MoonwellMarket(
                "Ethereum",
                "ETH",
                "ETH.dev",
                '0x460dCc00F0D24e56D6C8a4B5dDFf6333403aCdB3',
                "0xBaeEd251E950D6C7c7Ec92FfAfC571da8e85f50B",
                18,
            ),
            "DEV": new MoonwellMarket(
                "DEV",
                "DEV",
                "DEV",
                null,
                "0xC409e77229B6eCA42EA19E7AcF2d6b99Ebc02626",
                18,
            ),
            "FRAX": new MoonwellMarket(
                "Frax",
                "FRAX",
                "FRAX",
                '0x224506760E75bCF6Ed3A80880e86F159189cE04f',
                "0x07bca43B75AbEd7496561130ab42CE7d9D08E978",
                18,
            ),
            "USDT.dev": new MoonwellMarket(
                "Tether",
                "USDT",
                "USDT.dev",
                '0xef388dA299f5E75b4e935B7eC9602097aA89b76f',
                "0x1dcCaE91438EA28A7e2e9178D9ADAd7096F47beF",
                18,
            )
        }
    }
}
