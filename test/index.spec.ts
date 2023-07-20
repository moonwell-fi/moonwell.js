import {ContractBundle, Environments, Environment, MoonwellContract} from "../src";
import {ethers} from "ethers";

test("contracts", () => {
  // Ensure we have some expected value and it's well formed
  expect(Environments.moonbase.contracts.COMPTROLLER.address).toMatch(/^0x\w{40}/)

  expect(Environments.moonriver.contracts.COMPTROLLER.address)
      .not.toMatch(Environments.moonbase.contracts.COMPTROLLER.address)

  expect(Environments.moonriver.contracts.COMPTROLLER.address)
      .not.toMatch(Environments.moonbeam.contracts.COMPTROLLER.address)
});

test('environments & contract loading', () => {
  for (const contractEnv of [Environment.MOONBEAM, Environment.MOONRIVER, Environment.MOONBASE, Environment.BASEGOERLI]){
    const contracts: ContractBundle = Environments[contractEnv.toString()].contracts

    let contractName: string
    let contractObject: any
    for ([contractName, contractObject] of Object.entries(contracts)){
      if (contractName !== 'MARKETS'){
        // Ensure all contracts load successfully
        const artifact = contractObject.artifact
        expect(artifact.abi).toBeDefined()
        expect(artifact.abi.length).toBeGreaterThan(0)

        const contract = contractObject.contract
        expect(contract).toBeInstanceOf(ethers.Contract)
      }
    }
  }
})