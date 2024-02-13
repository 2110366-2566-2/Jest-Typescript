import { passwordSafety } from "../passwordSafety";

describe("passwordSafety", () => {
  it("Case 1: Password is less than 8 characters", () => {
    expect(passwordSafety("ppp")).toStrictEqual(
      "Password should more than 8 characters"
    );
  });

  //...
});
