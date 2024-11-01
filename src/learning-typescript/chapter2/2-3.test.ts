import { updateType } from "./2-3";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
it("rockerの値は数値に変換されており、小数点第一部までの文字列が返却される", () => {
  expect(updateType()).toBe("19.6");
});
