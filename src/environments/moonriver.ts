import BigNumber from "bignumber.js";

import { ContractBundle } from "../types";

export const contracts: ContractBundle = {
    CLAIMS: '0x8568A675384d761f36eC269D695d6Ce4423cfaB1',
    COMPTROLLER: '0x0b7a0EAA884849c6Af7a129e899536dDDcA4905E',
    GOVERNOR: '0x2BE2e230e89c59c8E20E633C524AD2De246e7370',
    GOV_TOKEN: '0xBb8d88bcD9749636BC4D2bE22aaC4Bb3B01A58F1',
    MAXIMILLION: '0x1650C0AD9483158f9e240fd58d0E173807A80CcC',
    ORACLE: '0x892bE716Dcf0A6199677F355f45ba8CC123BAF60',
    SAFETY_MODULE: '0xCd76e63f3AbFA864c53b4B98F57c1aA6539FDa3a',
    TIMELOCK: '0x04e6322D196E0E4cCBb2610dd8B8f2871E160bd7',
    INTEREST_RATE_MODEL: '0xC862A3af64a8d3C146E6c505a18c2B6c6a6601bf',
    MERC_20_IMPL: '0x45d17FE87e65064b2e85F91A9FF3aD0C7B6Cf75d',

    MARKETS: {
        "USDC.multi": {
            name: "USD Coin",
            assetTicker: "USDC",
            tokenAddress: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
            mTokenAddress: "0xd0670AEe3698F66e2D4dAf071EB9c690d978BFA8",
            digits: 6,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e6),
            mTokenMantissa: new BigNumber(1e8),
        },
        "ETH.multi": {
            name: "Ethereum",
            assetTicker: "ETH",
            tokenAddress: '0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C',
            mTokenAddress: "0x6503D905338e2ebB550c9eC39Ced525b612E77aE",
            digits: 18,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e18),
            mTokenMantissa: new BigNumber(1e8),
        },
        "BTC.multi": {
            name: "Bitcoin",
            assetTicker: "BTC",
            tokenAddress: '0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8',
            mTokenAddress: "0x6E745367F4Ad2b3da7339aee65dC85d416614D90",
            digits: 8,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e8),
            mTokenMantissa: new BigNumber(1e8),
        },
        "MOVR": {
            name: "Moonriver",
            assetTicker: "MOVR",
            tokenAddress: null,
            mTokenAddress: "0x6a1A771C7826596652daDC9145fEAaE62b1cd07f",
            digits: 18,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e18),
            mTokenMantissa: new BigNumber(1e8),
        },
        "xcKSM": {
            name: "Kusama",
            assetTicker: "xcKSM",
            tokenAddress: '0xffffffff1fcacbd218edc0eba20fc2308c778080',
            mTokenAddress: '0xa0D116513Bd0B8f3F14e6Ea41556c6Ec34688e0f',
            digits: 12,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e12),
            mTokenMantissa: new BigNumber(1e8),
        },
        "FRAX": {
            name: "Frax",
            assetTicker: "FRAX",
            tokenAddress: '0x1A93B23281CC1CDE4C4741353F3064709A16197d',
            mTokenAddress: "0x93Ef8B7c6171BaB1C0A51092B2c9da8dc2ba0e9D",
            digits: 18,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e18),
            mTokenMantissa: new BigNumber(1e8),
        },
        "USDT.multi": {
            name: "Tether",
            assetTicker: "USDT",
            tokenAddress: '0xB44a9B6905aF7c801311e8F4E76932ee959c663C',
            mTokenAddress: "0x36918B66F9A3eC7a59d0007D8458DB17bDffBF21",
            digits: 6,
            mTokenDigits: 8,
            mantissa: new BigNumber(1e6),
            mTokenMantissa: new BigNumber(1e8),
        }
    }
}