import {Contracts} from "../src";

test("contracts", () => {
  // Ensure we have some expected value and it's well formed
  expect(Contracts.moonbase.COMPTROLLER).toMatch(/^0x\w{40}/)

  expect(Contracts.moonriver.COMPTROLLER)
      .not.toMatch(Contracts.moonbase.COMPTROLLER)

  expect(Contracts.moonriver.COMPTROLLER)
      .not.toMatch(Contracts.moonbeam.COMPTROLLER)
});