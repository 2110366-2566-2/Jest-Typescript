import { isLeapYear } from "./leap_year";

test("Year 1900 is not a leap year", () => {
  expect(isLeapYear(1900)).toBe(false);
});
// test("Year -1 is not a leap year", () => {
//   expect(isLeapYear(-1)).toBe(false);
// });
test("Year 2000 is a leap year", () => {
  expect(isLeapYear(2000)).toBe(true);
});
test("Year 2020 is a leap year", () => {
  expect(isLeapYear(2020)).toBe(true);
});
test("Year 2023 is not a leap year", () => {
  expect(isLeapYear(2023)).toBe(false);
});
test("Year 2024 is a leap year", () => {
  expect(isLeapYear(2024)).toBe(true);
});
