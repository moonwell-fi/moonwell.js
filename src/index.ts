/**
 * <div align="center"><img src="media/spaceman.png" width="300" /></div>
 * 🌕 Moonwell.js is your one-stop shop for interacting with the <a target="_blank" href="https://moonwell.fi">Moonwell Protocol</a>.
 * @packageDocumentation
 */

import { ethers } from 'ethers'
ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR)

import { environment as MoonbeamEnvironment } from './environments/moonbeam'
import { environment as MoonriverEnvironment } from './environments/moonriver'
import { environment as MoonbaseEnvironment } from './environments/moonbase'
import { environment as BaseEnvironment } from './environments/base'
import { environment as BaseGoerliEnvironment } from './environments/basegoerli'

import { Environment } from "./types";

export const Environments = {
  [Environment.MOONBEAM]: MoonbeamEnvironment,
  [Environment.MOONRIVER]: MoonriverEnvironment,
  [Environment.MOONBASE]: MoonbaseEnvironment,
  [Environment.BASE]: BaseEnvironment,
  [Environment.BASEGOERLI]: BaseGoerliEnvironment,
}

export * from './types'
export * from './helpers'
export * from './contracts'
export * from './multicall'
export * from './views'
export { default as MToken } from './deploy-artifacts/MToken.json'

export const SECONDS_PER_DAY = 86400
export const DAYS_PER_YEAR = 365
