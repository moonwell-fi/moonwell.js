import {Contracts} from "../src";

test("contracts", () => {
  // Ensure we have some expected value and it's well formed
  expect(Contracts.moonbase.COMPTROLLER.address).toMatch(/^0x\w{40}/)

  expect(Contracts.moonriver.COMPTROLLER.address)
      .not.toMatch(Contracts.moonbase.COMPTROLLER.address)

  expect(Contracts.moonriver.COMPTROLLER.address)
      .not.toMatch(Contracts.moonbeam.COMPTROLLER.address)
});