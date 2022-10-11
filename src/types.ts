import BigNumber from "bignumber.js";

type StringOrNull = string | null

export type Market = {
    [ticker: string]: {
        name: string
        assetTicker: string
        tokenAddress: StringOrNull
        mTokenAddress: string
        digits: number
        mTokenDigits: number
        mantissa: BigNumber,
        mTokenMantissa: BigNumber,
    }
}

export type ContractBundle = {
    COMPTROLLER: string
    GOVERNOR: StringOrNull
    GOV_TOKEN: string
    MAXIMILLION: string
    ORACLE: string
    SAFETY_MODULE: string
    TIMELOCK: StringOrNull

    MARKETS: Market

    CLAIMS: StringOrNull
}