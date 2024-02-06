import { Environment } from "./types";
import BigNumber from "bignumber.js";

/**
 * Get the symbol of the native token in the given environment.
 */
export const getNativeTokenSymbol = (environment: Environment): string => {
  switch (environment) {
    case Environment.MOONBASE:
      return "DEV"
    case Environment.MOONRIVER:
      return "MOVR"
    case Environment.MOONBEAM:
      return "GLMR"
    default:
      throw new Error(`Unknown environment: ${environment}`)
  }
}

/**
 * Get the symbol of the Moonwell governance token in the given environment.
 */
export const getGovernanceTokenSymbol = (environment: Environment): string => {
  switch (environment) {
    case Environment.MOONBASE:
      return "MFAM"
    case Environment.MOONRIVER:
      return "MFAM"
    case Environment.MOONBEAM:
      return "WELL"
    case Environment.BASEGOERLI:
      return "WELL"
    default:
      throw new Error(`Unknown environment: ${environment}`)
  }
}


