import BigNumber from "bignumber.js";

import { ContractBundle } from "../types";
import { MoonwellContract, MoonwellContractWithProxy } from '../contracts'

export const contracts: ContractBundle = {
    CLAIMS: new MoonwellContractWithProxy(
        '0x933fCDf708481c57E9FD82f6BAA084f42e98B60e',
        './deploy-artifacts/TokenSaleDistributor.json',
        './deploy-artifacts/TokenSaleDistributorProxy.json',
    ),

    GOVERNOR: new MoonwellContract(
        '0xfc4DFB17101A12C5CEc5eeDd8E92B5b16557666d',
        './deploy-artifacts/MoonwellGovernorArtemis.json',
    ),

    COMPTROLLER: new MoonwellContractWithProxy(
        '0x8E00D5e02E65A19337Cdba98bbA9F84d4186a180', 
        './deploy-artifacts/Comptroller.json',
        './deploy-artifacts/Unitroller.json',
    ),

    GOV_TOKEN:  new MoonwellContract(
        '0x511aB53F793683763E5a8829738301368a2411E3', 
        './deploy-artifacts/Well.json'
    ),

    MAXIMILLION: new MoonwellContract(
        '0xe5Ef9310cC7E3437bAD83466675f24FD62A380c3', 
        './deploy-artifacts/Maximillion.json'
    ),

    ORACLE: new MoonwellContract(
        '0xED301cd3EB27217BDB05C4E9B820a8A3c8B665f9', 
        './deploy-artifacts/ChainlinkOracle.json'
    ),

    SAFETY_MODULE: new MoonwellContractWithProxy(
        '0x8568A675384d761f36eC269D695d6Ce4423cfaB1', 
        './deploy-artifacts/StakedWell.json',
        './deploy-artifacts/TransparentProxy.json',
    ),

    TIMELOCK: new MoonwellContract(
        '0x3a9249d70dCb4A4E9ef4f3AF99a3A130452ec19B', 
        './deploy-artifacts/Timelock.json',
    ),

    INTEREST_RATE_MODEL: new MoonwellContract(
        '0x1Ce7e4928943d6A4820375eBe737204dc1E73755', 
        './deploy-artifacts/StakedWell.json',
    ),

    MERC_20_IMPL: new MoonwellContract(
        '0x948CCfff51F894DBA5C250aa2844d58E169f8aD9', 
        './deploy-artifacts/MErc20Delegator.json',
    ),

    DEX_REWARDER: new MoonwellContract(
        '0xcD04D2340c1dD9B3dB2C5c53c8B8bAa57b2654Be',
        './deploy-artifacts/stellaswapRewarder.json'
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
        },
    },
}
