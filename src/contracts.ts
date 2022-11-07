import { ContractFactory, ethers } from 'ethers'
import { DeployArtifact } from './types'

/** A contract in the Moonwell ecosystem. */
export class MoonwellContract {
  /**
   * @param address The address of the contract.
   * @param artifactPath A path to the artifact to load.
   * @param signerOrProvider An optional signer that will be attached to all contract instances.
   */
  constructor(
      readonly address: string,
      readonly artifactPath: string,
      readonly signerOrProvider?: ethers.Signer | ethers.providers.Provider
  ) {}

  /** 
   * Get an ethers Contract instance representing the contract.
   * 
   * @param signerOrProvider An optional signer or provider that will be attached to the contract.
   */
  public getContract(signerOrProvider?: ethers.Signer | ethers.providers.Provider): ethers.Contract {
    return new ethers.Contract(
        this.address,
        this.getContractArtifact().abi,
        signerOrProvider || this.signerOrProvider
    )
  }

  /**
   * Return the deploy artifact that backs the contract.   
   */
  public getContractArtifact(): DeployArtifact {
    return require(this.artifactPath)
  }
}

/** A contract with a proxy in the Moonwell ecosystem. */
export class MoonwellContractWithProxy extends MoonwellContract {
  /**
   * @param proxyAddress The address of the contract.
   * @param implementationArtifactPath A path to the artifact to load when calls are passing through the proxy.
   * @param proxyArtifactPath A path to the artifact to load when working with tthe proxy directly.
   * @param signerOrProvider An optional signer that will be attached to all contract instances.
   */
  constructor(
      readonly proxyAddress: string,
      readonly implementationArtifactPath: string,
      readonly proxyArtifactPath: string,
      signerOrProvider?,
  ) {
    // Ensure `getContract` will return a proxy target with an implementation ABI
    super(proxyAddress, implementationArtifactPath, signerOrProvider)
  }

  /** 
   * Get an ethers Contract instance representing the proxy contract.
   * 
   * @param signerOrProvider An optional signer or provider that will be attached to the contract.
   */
  public getProxyContract(signerOrProvider?: ethers.Signer | ethers.providers.Provider): ethers.Contract {
    return new ethers.Contract(
        this.proxyAddress,
        this.getProxyArtifact().abi,
        signerOrProvider || this.signerOrProvider
    )
  }

  /**
   * Return the deploy artifact that backs the proxy contract.   
   */
  public getProxyArtifact(): DeployArtifact {
    return require(this.proxyArtifactPath)
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