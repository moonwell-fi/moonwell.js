/**
 * Moonwell.js is your one stop shop for interacting with the [Moonwell Protocol](https://moonwell.fi).
 *
 * @packageDocumentation
 */

import moonbeam from './environments/moonbeam'
import moonriver from './environments/moonriver'
import moonbase from './environments/moonbase'

/**
 * A mapping of environment to {@link ContractBundle} for each environment that Moonwell is deployed on.
 *
 * Holds all relevant contract addresses for the respective environment.
 *
 * Basic Usage:
 * ```ts
 * import {Contracts, Market} from '@moonwell-fi/moonwell.js'
 *
 * console.log("Market token addresses:")
 * Object.entries(Contracts.moonriver.MARKETS).map(([assetName, market] : [string, Market]) => {
 *     console.log("  ", assetName, '-', market.tokenAddress)
 * })
 *
 * console.log()
 *
 * console.log("USDC Market:", Contracts.moonriver.MARKETS['USDC.multi'])
 * ```
 *
 * Which will output the following
 * ```
 * Market token addresses:
 *    USDC.multi - 0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D
 *    ETH.multi - 0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C
 *    BTC.multi - 0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8
 *    MOVR - null
 *    xcKSM - 0xffffffff1fcacbd218edc0eba20fc2308c778080
 *    FRAX - 0x1A93B23281CC1CDE4C4741353F3064709A16197d
 *    USDT.multi - 0xB44a9B6905aF7c801311e8F4E76932ee959c663C
 *
 * USDC Market: {
 *   name: 'USD Coin',
 *   assetTicker: 'USDC',
 *   tokenAddress: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
 *   mTokenAddress: '0xd0670AEe3698F66e2D4dAf071EB9c690d978BFA8',
 *   digits: 6,
 *   mTokenDigits: 8,
 *   mantissa: BigNumber { s: 1, e: 6, c: [ 1000000 ] },
 *   mTokenMantissa: BigNumber { s: 1, e: 8, c: [ 100000000 ] }
 * }
 * ```
 *
*/
export const Contracts = {
  moonbeam,
  moonriver,
  moonbase,
}

export * from './types'