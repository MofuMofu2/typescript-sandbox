import { countBookSales, calcBookSales } from "../calcBookSales";

const fanbooks = [
  {
    total: 306,
    sample: 3,
    stock: 80,
    market: 164,
    price: 1000,
  },
  {
    total: 104,
    sample: 2,
    stock: 32,
    market: 35,
    price: 1000,
  },
  {
    total: 20,
    price: 500,
  },
];

describe("一冊の同人誌の売り上げ数と売上額を計算する", () => {
  test("売り上げ数 = 持ち込み数 - (無配 + 残り + 通販サイト送付分）", () => {
    expect(countBookSales(fanbooks[0])).toBe(59);
  });

  test("売り上げ金額 = 売り上げ数 * 売価", () => {
    expect(calcBookSales(fanbooks[0])).toBe(59000);
  });
});
