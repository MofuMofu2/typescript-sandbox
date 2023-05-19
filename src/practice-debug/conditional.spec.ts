import { isWithinRange } from "./conditional";

it("0の場合はfalseを返す", () => {
  expect(isWithinRange(0)).toBe(false);
});

it("1の場合はtrueを返す", () => {
  expect(isWithinRange(1)).toBe(true);
});

it("2の場合はtrueを返す", () => {
  expect(isWithinRange(2)).toBe(true);
});

it("99の場合はtrueを返す", () => {
  expect(isWithinRange(99)).toBe(true);
});

it("100の場合はfalseを返す", () => {
  expect(isWithinRange(100)).toBe(false);
});

it("101の場合はfalseを返す", () => {
  expect(isWithinRange(101)).toBe(false);
});
