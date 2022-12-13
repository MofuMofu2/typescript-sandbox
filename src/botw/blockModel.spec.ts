import { enemyAttack, calcBlock } from "./blockModel";

describe("敵の攻撃力は敵の力 + 武器の攻撃力で決まることのテスト", () => {
  // 武器の攻撃力は必ず1以上のため考慮しない
  it("敵の攻撃力が0の場合", () => {
    expect(enemyAttack(0, 4)).toBe(4);
  });
  it("敵の攻撃力が1以上の場合", () => {
    expect(enemyAttack(4, 1)).toBe(5);
  });
});

describe("基本の防御計算に関するテスト", () => {
  it("ダメージ量が1ポイント以上の場合", () => {
    expect(calcBlock(4, 0)).toBe(4);
  });
  it("ダメージ量が0ポイント以下だった場合、ダメージは1ポイントで固定される", () => {
    expect(calcBlock(4, 4)).toBe(1);
  });
});
