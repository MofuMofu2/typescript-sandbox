import { calcBookSales } from "../calcBookSales";

test("売り上げ数 = 持ち込み数 - (無配 + 残り）", () => {
  expect(
    calcBookSales({
      total: 306,
      sample: 3,
      stock: 80,
    })
  ).toBe(59);
});
