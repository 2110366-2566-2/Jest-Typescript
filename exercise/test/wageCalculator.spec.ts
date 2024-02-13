import { wageCalculator } from "../wageCalculator";

describe("wageCalculator", () => {
  it("Case 1: Not a leap year, mon, wed, no work level", () => {
    expect(wageCalculator(2023, ["mon", "wed"])).toStrictEqual(170);
  });

  //...
});
