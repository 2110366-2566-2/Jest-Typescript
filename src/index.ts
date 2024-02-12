import { isLeapYear } from "./leap_year";

for (let year = 2000; year <= 2100; year++) {
  if (isLeapYear(year)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}
