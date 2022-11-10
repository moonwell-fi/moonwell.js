/**
 * <div align="center"><img src="media/spaceman.png" width="300" /></div>
 * 🌕 Moonwell.js is your one stop shop for interacting with the <a target="_blank" href="https://moonwell.fi">Moonwell Protocol</a>.
 * @packageDocumentation
 */

import { contracts as MoonbeamContracts } from './environments/moonbeam'
import { contracts as MoonriverContracts } from './environments/moonriver'
import { contracts as MoonbaseContracts } from './environments/moonbase'

import { Environment } from "./types";

/**
 * The {@link Contracts} object is simply a mapping of environment to {@link ContractBundle} for each environment that Moonwell is deployed on.
 *
 * Holds all relevant contract addresses and market details (mantissas, underlying digits, etc) for the respective environment.
 *
 * ## Usage Example:
 * ```ts
 * import {Contracts, Market} from '@moonwell-fi/moonwell.js'
 *
 * // Go enumerate all the Moonriver markets
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
  [Environment.MOONBEAM]: MoonbeamContracts,
  [Environment.MOONRIVER]: MoonriverContracts,
  [Environment.MOONBASE]: MoonbaseContracts,
}

export * from './types'
export * from './helpers'
export * from './contracts'
export { default as MToken } from './deploy-artifacts/MToken.json'