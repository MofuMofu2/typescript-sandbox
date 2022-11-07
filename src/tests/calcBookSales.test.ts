import { countBookSales } from "../calcBookSales";

test("売り上げ数 = 持ち込み数 - (無配 + 残り + 通販サイト送付分）", () => {
  expect(
    countBookSales({
      total: 306,
      sample: 3,
      stock: 80,
      market: 164,
    })
  ).toBe(59);
});
