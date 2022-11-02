import { ContractBundle, CompileArtifact } from './types'

/** Load a compiled contract artifact. */
export const loadArtifact = (contractName: keyof ContractBundle): CompileArtifact => {
  let artifactName: string|undefined = undefined
  switch (contractName) {
    case "ORACLE":
      artifactName = "ChainlinkOracle.json"
      break
    case "COMPTROLLER":
      artifactName = "Comptroller.json"
      break
    case "MERC_20_IMPL":
      artifactName = "MErc20Delegator.json"
      break
    case "SAFETY_MODULE":
      artifactName = "StakedWell.json"
      break
    case "TIMELOCK": 
      artifactName = "Timelock.json"
      break
    case "UNITROLLER":
      // TODO: we don't maintain a field for unitroller in Contract Bundle, but sometimes we might want to look at fields
      //       on it (ex. to verify pending admin). Note that this is a problem with all proxies that we will face (safety modules,
      //       markets, etc)
      // Two Ideas:
      // 1. Add a boolean to this method ('getProxy', default false) such that when you call 
      //      - loadArtifact(COMPTROLLER) => Comptroller artifact
      //      - loadArtifact(COMPTROLLER, { getProxy: true }) => Unitroller artifact
      //      - loadArtifact(ORACLE, { getProxy: true }) => throw new Error("No proxy on this contract")
      // 2. Add Unitroller field to ContractBundle
      throw new Error("Cannot implement")
   case "GOVERNOR":
      // TODO: we should return either govapollo or govartemis but don't know which. 
      // Same Ideas as above:
      // 1. Add an environment to this method an an optional param:
      //    - loadArtifact(GOVERNOR) => throw new Error("need environrment")
      //    - loadArtifact(GOVERNOR, { environment: MOONBEAM }) => GovernorArtemis
      //    - loadArtifact(GOVERNOR, { environment: MOONRIVER }) => GovernorApollo
      //    - loadArtifact(GOVERNOR, { environment: MOONBEAM, getProxy: true }) => throw new Error("No proxy on this contract")
    }

  return require(`./deploy-artifacts/${artifactName}`)
}