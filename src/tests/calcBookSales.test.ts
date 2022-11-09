import {
  countBookSales,
  calcBookSales,
  calcAllBooksSales,
} from "../calcBookSales";

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

describe("一冊の同人誌の売り上げ数を計算する", () => {
  test("売り上げ数 = 持ち込み数 - (無配 + 残り + 通販サイト送付分）", () => {
    expect(countBookSales(fanbooks[0])).toBe(59);
  });

  test("売り上げ数の計算：無配が存在しない場合", () => {
    expect(
      countBookSales({
        total: 306,
        stock: 80,
        market: 164,
        price: 1000,
      })
    ).toBe(62);
  });

  test("売り上げ数の計算：在庫を全て通販に送った場合", () => {
    expect(
      countBookSales({
        total: 306,
        market: 164,
        price: 1000,
      })
    ).toBe(142);
  });

  test("売り上げ数の計算：全て売れた場合", () => {
    expect(
      countBookSales({
        total: 306,
        sample: 3,
        price: 1000,
      })
    ).toBe(303);
  });

  test("売り上げ数の計算：無配も含めて全て売れた場合", () => {
    expect(
      countBookSales({
        total: 306,
        price: 1000,
      })
    ).toBe(306);
  });

  test("売り上げ数の計算：何も売れなかったとき", () => {
    expect(
      countBookSales({
        total: 306,
        sample: 3,
        stock: 303,
        price: 1000,
      })
    ).toBe(0);
  });
});

describe("一冊の本に関する売り上げ数を計算する", () => {
  test("売り上げ金額 = 売り上げ数 * 売価", () => {
    expect(calcBookSales(fanbooks[0])).toBe(59000);
  });
});

describe("複数の同人誌の売り上げ額を計算する", () => {
  test("売り上げ金額の総額を計算して返す", () => {
    expect(calcAllBooksSales(fanbooks)).toBe(104000);
  });
});
