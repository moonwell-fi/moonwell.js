import { ethers } from 'ethers'
import { BN, DeployArtifact, EnvironmentConfig, ProtocolInfo, StakingInfo } from './types'
import * as types from "../types/ethers-contracts";
import MToken from "./deploy-artifacts/MToken.json";
import MTokenv2 from "./deploy-artifacts/MTokenv2.json";
import { Environments, MoonwellContract } from './index'
import { environment } from './environments/moonbeam';

export class Callable<T> {

  constructor(readonly type: (new (...args: any[] | undefined) => T), readonly contract: ethers.Contract, readonly method: string, readonly args?: any[]) {
    this.type = type;
    this.contract = contract;
    this.method = method;
    this.args = args;
  }

  parse = (result: any) => {
    if (result.length === undefined) {
      result = [result]
    }
    return new this.type(
      ...result
    ) as T;
  }

  result = async () => {
    let result = await this.contract.callStatic[this.method](this.args ? [...this.args] : []);
    return this.parse(result);
  }
}

export class Views {

  private governanceProvider: ethers.providers.StaticJsonRpcProvider;
  private governanceViewsContract: MoonwellContract<types.MoonwellViewsV1 | types.MoonwellViewsV2>;;
  private provider: ethers.providers.StaticJsonRpcProvider;
  private viewsContract: MoonwellContract<types.MoonwellViewsV1 | types.MoonwellViewsV2>;

  constructor(
    readonly config: EnvironmentConfig
  ) {
    this.config = config;

    this.provider = new ethers.providers.StaticJsonRpcProvider({
      url: config.rpcNode
    })

    this.viewsContract = environment.contracts.VIEWS;

    if (config.governanceEnvironment !== config.environment) {

      this.governanceProvider = new ethers.providers.StaticJsonRpcProvider({
        url: Environments[config.governanceEnvironment].rpcNode
      })

      this.governanceViewsContract = Environments[config.governanceEnvironment].contracts.VIEWS;
    }

    this.methods = {
      getProtocolInfo: this.methods.getProtocolInfo.bind(this),
      getNativeTokenPrice: this.methods.getNativeTokenPrice.bind(this),
      getGovernanceTokenPrice: this.methods.getGovernanceTokenPrice.bind(this),
      getStakingInfo: this.methods.getStakingInfo.bind(this)
    }
  }

  getGovernanceViewsContract = () => {
    return this.governanceViewsContract || this.viewsContract
  }

  getGovernanceProvider = () => {
    return this.governanceProvider || this.provider
  }

  methods = {
    getProtocolInfo() {
      const thisArg = this as Views;
      return new Callable<ProtocolInfo>(ProtocolInfo, thisArg.viewsContract.contract.connect(thisArg.provider), 'getProtocolInfo')
    },
    getNativeTokenPrice() {
      const thisArg = this as Views;
      return new Callable<BN>(BN.bind(thisArg, -18), thisArg.getGovernanceViewsContract().contract.connect(thisArg.getGovernanceProvider()), 'getNativeTokenPrice')
    },
    getGovernanceTokenPrice() {
      const thisArg = this as Views;
      return new Callable<BN>(BN.bind(thisArg, -18), thisArg.getGovernanceViewsContract().contract.connect(thisArg.getGovernanceProvider()), 'getGovernanceTokenPrice')
    },
    getStakingInfo() {
      const thisArg = this as Views;
      return new Callable<StakingInfo>(StakingInfo, thisArg.getGovernanceViewsContract().contract.connect(thisArg.getGovernanceProvider()), 'getStakingInfo')

    }
  }

  getProtocolInfo = async () => {
    return await this.methods.getProtocolInfo().result();
  }

  getNativeTokenPrice = async () => {
    return await this.methods.getNativeTokenPrice().result();
  }

  getGovernanceTokenPrice = async () => {
    return await this.methods.getGovernanceTokenPrice().result();
  }

  getStakingInfo = async () => {
    return await this.methods.getStakingInfo().result();
  }




}
