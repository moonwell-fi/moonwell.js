import { ethers } from 'ethers'
import { DeployArtifact } from './types'

/** A contract in the Moonwell ecosystem. */
export class MoonwellContract {
  public contract: ethers.Contract

  /**
   * @param address The address of the contract.
   * @param artifact The artifact to use.
   * @param signerOrProvider An optional signer that will be attached to all contract instances.
   */
  constructor(
      readonly address: string,
      readonly artifact: DeployArtifact,
      readonly signerOrProvider?: ethers.Signer | ethers.providers.Provider
  ) {
    this.artifact = artifact

    console.log({artifact})

    this.contract = new ethers.Contract(
        this.address,
        this.artifact.abi,
        signerOrProvider || this.signerOrProvider
    )
  }
}

/** A contract with a proxy in the Moonwell ecosystem. */
export class MoonwellContractWithProxy extends MoonwellContract {
  public proxyContract: ethers.Contract

  /**
   * @param proxyAddress The address of the contract.
   * @param implementationArtifact A path to the artifact to load when calls are passing through the proxy.
   * @param proxyArtifact A path to the artifact to load when working with tthe proxy directly.
   * @param signerOrProvider An optional signer that will be attached to all contract instances.
   */
  constructor(
      readonly proxyAddress: string,
      readonly implementationArtifact: DeployArtifact,
      readonly proxyArtifact: DeployArtifact,
      signerOrProvider?: ethers.Signer | ethers.providers.Provider,
  ) {
    // Ensure `getContract` will return a proxy target with an implementation ABI
    super(proxyAddress, implementationArtifact, signerOrProvider)

    this.proxyArtifact = proxyArtifact

    this.proxyContract = new ethers.Contract(
        this.proxyAddress,
        this.proxyArtifact.abi,
        signerOrProvider || this.signerOrProvider
    )
  }
}

/** 
 * Return a deploy artifact with the given name.
 *
 * This is a low level, environment agnostic functions. Users should prefer using the named contracts on an Environment
 * object whenever possible.
 * 
 * @param artifactName The name of the artifact 
 */
export const getDeployArtifact = (artifactName: string): DeployArtifact => {
  return require(`./deploy-artifacts/${artifactName}.json`)
}

/** 
 * Return a contract with the given artifact name.
 *
 * This is a low level, environment agnostic functions. Users should prefer using the named contracts on an Environment
 * object whenever possible.
 * 
 * @param artifactName The name of the artifact
 * @param address The address of the contract. 
 * @param signerOrProvider An optional signer or provider.
 */
 export const getContract = (
  artifactName: string, 
  address: string, 
  signerOrProvider?: ethers.Signer | ethers.providers.Provider
): ethers.Contract => {
  const artifact: DeployArtifact = require(`./deploy-artifacts/${artifactName}.json`)
  return new ethers.Contract(
    address,
    artifact.abi,
    signerOrProvider
  )
}

/**
 * Return a ContractFactory with the given artifact name.
 *
 * This is a low level, environment agnostic functions. Users should prefer using the named contracts on an Environment
 * object whenever possible.
 * 
 * @param artifactName The name of the artifact
 * @param signer An optional signer.
 */
 export const getContractFactory = (artifactName: string, signer?: ethers.Signer): ethers.ContractFactory => {
  const artifact: DeployArtifact = require(`./deploy-artifacts/${artifactName}.json`)
  return new ethers.ContractFactory(
    artifact.abi,
    artifact.bytecode,
    signer
  )
}