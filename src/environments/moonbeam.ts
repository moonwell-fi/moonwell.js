import BigNumber from "bignumber.js";

import {ContractBundle} from "../types";
import {MoonwellContract, MoonwellContractWithProxy} from '../contracts'

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
import StellaswapRewarder from '../deploy-artifacts/StellaswapRewarder.json'
import MToken from '../deploy-artifacts/MToken.json'

import * as types from "../../types/ethers-contracts";

export const contracts: ContractBundle = {
    CLAIMS: new MoonwellContractWithProxy<types.TokenSaleDistributor, types.TokenSaleDistributorProxy>(
        '0x933fCDf708481c57E9FD82f6BAA084f42e98B60e',
        TokenSaleDistributor,
        TokenSaleDistributorProxy,
    ),

    GOVERNOR: new MoonwellContract<types.MoonwellGovernorArtemis>(
        '0xfc4DFB17101A12C5CEc5eeDd8E92B5b16557666d',
        MoonwellGovernorArtemis,
    ),

    COMPTROLLER: new MoonwellContractWithProxy<types.Comptroller, types.Unitroller>(
        '0x8E00D5e02E65A19337Cdba98bbA9F84d4186a180',
        Comptroller,
        Unitroller,
    ),

    GOV_TOKEN: new MoonwellContract<types.Well>(
        '0x511aB53F793683763E5a8829738301368a2411E3',
        Well
    ),

    MAXIMILLION: new MoonwellContract<types.Maximillion>(
        '0xe5Ef9310cC7E3437bAD83466675f24FD62A380c3',
        Maximillion
    ),

    ORACLE: new MoonwellContract<types.ChainlinkOracle>(
        '0xED301cd3EB27217BDB05C4E9B820a8A3c8B665f9',
        ChainlinkOracle
    ),

    SAFETY_MODULE: new MoonwellContractWithProxy<types.StakedWell, types.TransparentProxy>(
        '0x8568A675384d761f36eC269D695d6Ce4423cfaB1',
        StakedWell,
        TransparentProxy,
    ),

    TIMELOCK: new MoonwellContract<types.Timelock>(
        '0x3a9249d70dCb4A4E9ef4f3AF99a3A130452ec19B',
        Timelock,
    ),

    INTEREST_RATE_MODEL: new MoonwellContract<types.InterestRateModel>(
        '0x1Ce7e4928943d6A4820375eBe737204dc1E73755',
        InterestRateModel,
    ),

    MERC_20_IMPL: new MoonwellContract<types.MErc20Delegator>(
        '0x948CCfff51F894DBA5C250aa2844d58E169f8aD9',
        MErc20Delegator,
    ),

    DEX_REWARDER: new MoonwellContract<types.StellaswapRewarder>(
        '0xcD04D2340c1dD9B3dB2C5c53c8B8bAa57b2654Be',
        StellaswapRewarder
    ),
    MARKETS: {
        "ETH.mad": {
            name: "Ethereum",
            assetTicker: "ETH",
            tokenAddress: "0x30d2a9f5fdf90ace8c17952cbb4ee48a55d916a7",
            mTokenAddress: "0xc3090f41Eb54A7f18587FD6651d4D3ab477b07a4",
            digits: 18,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e18),
            mTokenMantissa: new BigNumber(1e8),
            isDeprecated: true,
            marketContract: new MoonwellContract<types.MToken>(
                '0xc3090f41Eb54A7f18587FD6651d4D3ab477b07a4',
                MToken
            )
        },
        "BTC.mad": {
            name: "Bitcoin",
            assetTicker: "BTC",
            tokenAddress: '0x1DC78Acda13a8BC4408B207c9E48CDBc096D95e0',
            mTokenAddress: "0x24A9d8f1f350d59cB0368D3d52A77dB29c833D1D",
            digits: 8,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e8),
            mTokenMantissa: new BigNumber(1e8),
            isDeprecated: true,
            marketContract: new MoonwellContract<types.MToken>(
                '0x24A9d8f1f350d59cB0368D3d52A77dB29c833D1D',
                MToken
            )
        },
        "USDC.mad": {
            name: "USD Coin",
            assetTicker: "USDC",
            tokenAddress: "0x8f552a71efe5eefc207bf75485b356a0b3f01ec9",
            mTokenAddress: "0x02e9081DfadD37A852F9a73C4d7d69e615E61334",
            digits: 6,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e6),
            mTokenMantissa: new BigNumber(1e8),
            isDeprecated: true,
            marketContract: new MoonwellContract<types.MToken>(
                '0x02e9081DfadD37A852F9a73C4d7d69e615E61334',
                MToken
            )
        },
        'BUSD.wh': {
            name: "BUSD Coin",
            assetTicker: "BUSD",
            tokenAddress: "0x692c57641fc054c2ad6551ccc6566eba599de1ba",
            mTokenAddress: "0x298f2E346b82D69a473BF25f329BDF869e17dEc8",
            digits: 18,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e18),
            mTokenMantissa: new BigNumber(1e8),
            isDeprecated: true,
            marketContract: new MoonwellContract<types.MToken>(
                '0x298f2E346b82D69a473BF25f329BDF869e17dEc8',
                MToken
            )
        },
        "GLMR": {
            name: "Moonbeam",
            assetTicker: "GLMR",
            tokenAddress: null,
            mTokenAddress: "0x091608f4e4a15335145be0A279483C0f8E4c7955",
            digits: 18,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e18),
            mTokenMantissa: new BigNumber(1e8),
            marketContract: new MoonwellContract<types.MToken>(
                '0x091608f4e4a15335145be0A279483C0f8E4c7955',
                MToken
            )
        },
        "xcDOT": {
            name: "Polkadot",
            assetTicker: "xcDOT",
            tokenAddress: "0xffffffff1fcacbd218edc0eba20fc2308c778080",
            mTokenAddress: "0xD22Da948c0aB3A27f5570b604f3ADef5F68211C3",
            digits: 10,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e10),
            mTokenMantissa: new BigNumber(1e8),
            marketContract: new MoonwellContract<types.MToken>(
                '0xD22Da948c0aB3A27f5570b604f3ADef5F68211C3',
                MToken
            )
        },
        "xcUSDT": {
            name: "Tether",
            assetTicker: "xcUSDT",
            tokenAddress: "0xFFFFFFfFea09FB06d082fd1275CD48b191cbCD1d",
            mTokenAddress: "0x42A96C0681B74838eC525AdbD13c37f66388f289",
            digits: 6,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e6),
            mTokenMantissa: new BigNumber(1e8),
            marketContract: new MoonwellContract<types.MToken>(
                '0x42A96C0681B74838eC525AdbD13c37f66388f289',
                MToken
            )
        },
        "FRAX": {
            name: "Frax",
            assetTicker: "FRAX",
            tokenAddress: '0x322e86852e492a7ee17f28a78c663da38fb33bfb',
            mTokenAddress: "0x1C55649f73CDA2f72CEf3DD6C5CA3d49EFcF484C",
            digits: 18,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e18),
            mTokenMantissa: new BigNumber(1e8),
            marketContract: new MoonwellContract<types.MToken>(
                '0x1C55649f73CDA2f72CEf3DD6C5CA3d49EFcF484C',
                MToken
            )
        },
        "ETH.wh": {
            name: "Ethereum",
            assetTicker: "ETH",
            tokenAddress: "0xab3f0245b83feb11d15aaffefd7ad465a59817ed",
            mTokenAddress: "0xb6c94b3A378537300387B57ab1cC0d2083f9AeaC",
            digits: 18,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e18),
            mTokenMantissa: new BigNumber(1e8),
            marketContract: new MoonwellContract<types.MToken>(
                '0xb6c94b3A378537300387B57ab1cC0d2083f9AeaC',
                MToken
            )
        },
        'BTC.wh': {
            name: "Bitcoin",
            assetTicker: "BTC",
            tokenAddress: '0xe57ebd2d67b462e9926e04a8e33f01cd0d64346d',
            mTokenAddress: "0xaaa20c5a584a9fECdFEDD71E46DA7858B774A9ce",
            digits: 8,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e8),
            mTokenMantissa: new BigNumber(1e8),
            marketContract: new MoonwellContract<types.MToken>(
                '0xaaa20c5a584a9fECdFEDD71E46DA7858B774A9ce',
                MToken
            )
        },
        'USDC.wh': {
            name: "USD Coin",
            assetTicker: "USDC",
            tokenAddress: "0x931715fee2d06333043d11f658c8ce934ac61d0c",
            mTokenAddress: "0x744b1756e7651c6D57f5311767EAFE5E931D615b",
            digits: 6,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e6),
            mTokenMantissa: new BigNumber(1e8),
            marketContract: new MoonwellContract<types.MToken>(
                '0x744b1756e7651c6D57f5311767EAFE5E931D615b',
                MToken
            )
        },
        'xcUSDC': {
            name: "USD Coin",
            assetTicker: "xcUSDC",
            tokenAddress: "0xffffffff7d2b0b761af01ca8e25242976ac0ad7d",
            mTokenAddress: "0x22b1a40e3178fe7c7109efcc247c5bb2b34abe32",
            digits: 6,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e6),
            mTokenMantissa: new BigNumber(1e8),
            marketContract: new MoonwellContract<types.MToken>(
                '0x22b1a40e3178fe7c7109efcc247c5bb2b34abe32',
                MToken
            )
        },
    },
}
