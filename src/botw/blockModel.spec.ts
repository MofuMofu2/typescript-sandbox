import { enemyAttack } from "./blockModel";

describe("敵の攻撃力は敵の力 + 武器の攻撃力で決まることのテスト", () => {
  // 武器の攻撃力は必ず1以上のため考慮しない
  it("敵の攻撃力が0の場合", () => {
    expect(enemyAttack(0, 4)).toBe(4);
  });
  it("敵の攻撃力が1以上の場合", () => {
    expect(enemyAttack(4, 1)).toBe(5);
  });
});
