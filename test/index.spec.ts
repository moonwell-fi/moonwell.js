import {ContractBundle, Contracts, Environment, MoonwellContract} from "../src";
import {ethers} from "ethers";

test("contracts", () => {
  // Ensure we have some expected value and it's well formed
  expect(Contracts.moonbase.COMPTROLLER.address).toMatch(/^0x\w{40}/)

  expect(Contracts.moonriver.COMPTROLLER.address)
      .not.toMatch(Contracts.moonbase.COMPTROLLER.address)

  expect(Contracts.moonriver.COMPTROLLER.address)
      .not.toMatch(Contracts.moonbeam.COMPTROLLER.address)
});

test('environments & contract loading', () => {
  for (const contractEnv of [Environment.MOONBEAM, Environment.MOONRIVER, Environment.MOONBASE]){
    const contracts: ContractBundle = Contracts[contractEnv.toString()]

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