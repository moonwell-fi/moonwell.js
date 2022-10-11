import {moonwellContracts} from "../src";

test("contracts", () => {
  // Ensure we have some expected value and it's well formed
  expect(moonwellContracts.moonbase.COMPTROLLER).toMatch(/^0x\w{40}/)
});