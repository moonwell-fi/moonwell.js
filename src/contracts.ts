import { ethers } from 'ethers'
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