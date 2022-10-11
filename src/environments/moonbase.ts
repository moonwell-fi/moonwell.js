import BigNumber from "bignumber.js";

import {ContractBundle} from "../types";

const contracts: ContractBundle = {
    CLAIMS: '0xe7e6cdb90797f053229c0a81c3de9dc8110188b5',
    COMPTROLLER: '0x4524e0Dfa042188B1F9f804642456277dbDBE253',
    GOVERNOR: '0x1eA239b116b911374BA144EFb5cA077d3A224fE9',
    GOV_TOKEN: '0x6efCf8fB404AC6DE593cE461877A634d067C942E',
    MAXIMILLION: '0xa2A09f11208327e69Ede9c2C6eE95282a13527AF',
    ORACLE: '0x0A3F1AA8bc5C51bbD313e63644f2297aA170FF87',
    SAFETY_MODULE: '0x11fD9c97B0B8F50f6EB0e68342e3de8F76dd45fc',
    TIMELOCK: '0xE2270EEf667A66AF330f8411C17E79BdA2FC3595',

    MARKETS: {
        "BTC.dev": {
            name: "Bitcoin",
            assetTicker: "BTC",
            tokenAddress: '0x0A996B2f808EF4Cd59a3790c6Bb8bf6E4105e0aA',
            mTokenAddress: "0x4b088a4b3250684c362911078A0E945AcC21E236",
            digits: 8,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e8),
            mTokenMantissa: new BigNumber(1e8),
        },
        "USDC.dev": {
            name: "USD Coin",
            assetTicker: "USDC",
            tokenAddress: '0x3799D95Ee109129951c6b31535b2B5AA6dbF108c',
            mTokenAddress: "0x18f324E21846F1C21F4fbF8228705B17897eF15A",
            digits: 18,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e6),
            mTokenMantissa: new BigNumber(1e8),
        },
        "ETH.dev": {
            name: "Ethereum",
            assetTicker: "ETH",
            tokenAddress: '0xf7A200a738f807B78c7a60aA315e115612C6c33a',
            mTokenAddress: "0xa28C4680058f4A73f6172A6ed23C9E624E443CFB",
            digits: 18,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e18),
            mTokenMantissa: new BigNumber(1e8),
        },
        "DEV": {
            name: "DEV",
            assetTicker: "DEV",
            tokenAddress: null,
            mTokenAddress: "0x827Bb1E617B862d4BC81a6a7995a34dF6EE78a63",
            digits: 18,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e18),
            mTokenMantissa: new BigNumber(1e8),
        },
        "FRAX": {
            name: "Frax",
            assetTicker: "FRAX",
            tokenAddress: '0x90384c78892be628DF6C76c3E49714Ef719117f4',
            mTokenAddress: "0x241D3210B0706e0c40CE5274bc23a9E494162F5F",
            digits: 18,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e18),
            mTokenMantissa: new BigNumber(1e8),
        },
        "USDT.dev": {
            name: "Tether",
            assetTicker: "USDT",
            tokenAddress: '0xDc67f6725B90B7e623f008028835B00F8c399FE3',
            mTokenAddress: "0x1C3132CF5e41Eb3660B403db494711Ac5F383125",
            digits: 18,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e6),
            mTokenMantissa: new BigNumber(1e8),
        },
    }
}

export default contracts