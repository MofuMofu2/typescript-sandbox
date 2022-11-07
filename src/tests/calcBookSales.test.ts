import { countBookSales, calcBookSales } from "../calcBookSales";

test("売り上げ数 = 持ち込み数 - (無配 + 残り + 通販サイト送付分）", () => {
  expect(
    countBookSales({
      total: 306,
      sample: 3,
      stock: 80,
      market: 164,
      price: 1000,
    })
  ).toBe(59);
});

test("売り上げ金額 = 売り上げ数 * 売価", () => {
  expect(
    calcBookSales({
      total: 306,
      sample: 3,
      stock: 80,
      market: 164,
      price: 1000,
    })
  ).toBe(59000);
});
