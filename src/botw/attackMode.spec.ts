import { attack } from "./attackModel";

describe("リンクの攻撃力計算に関するテスト", () => {
  it("リンクが武器のみ装備している場合：武器の攻撃力 = リンクの攻撃力となる", () => {
    expect(attack(4)).toBe(4);
  });
});
