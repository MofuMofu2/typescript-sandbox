import { enemyAttack, calcBlock, blockPower } from "./blockModel";

describe("敵の攻撃力は敵の力 + 武器の攻撃力で決まることのテスト", () => {
  // 武器の攻撃力は必ず1以上のため考慮しない
  it("敵の攻撃力が0の場合", () => {
    expect(enemyAttack(0, 4)).toBe(4);
  });
  it("敵の攻撃力が1以上の場合", () => {
    expect(enemyAttack(4, 1)).toBe(5);
  });
});

describe("リンクの防御力は服の防御 + カチコチ料理のポイントで決まることのテスト", () => {
  // カチコチ料理は4・12・24で固定。つまり整数値をプラスする、で共通と考える
  it("服の防御力が0、カチコチ料理なしの場合", () => {
    expect(blockPower(0, 0)).toBe(0);
  });
  it("服の防御力が0、カチコチ料理ありの場合", () => {
    expect(blockPower(0, 12)).toBe(12);
  });
  it("服の防御力が1以上、カチコチ料理なしの場合", () => {
    expect(blockPower(3, 0)).toBe(3);
  });
  it("服の防御力が1以上、カチコチ料理ありの場合", () => {
    expect(blockPower(3, 4)).toBe(7);
  });
});

describe("ダメージが1以上存在する場合の防御計算に関するテスト", () => {
  it("武器以外0の場合", () => {
    expect(
      calcBlock({
        enemy: 0,
        weapon: 4,
        armor: 0,
        meal: 0,
      })
    ).toBe(4);
  });
  it("敵の力・武器以外0の場合", () => {
    expect(
      calcBlock({
        enemy: 4,
        weapon: 4,
        armor: 0,
        meal: 0,
      })
    ).toBe(8);
  });
  it("リンクは何も装備していない場合", () => {
    expect(
      calcBlock({
        enemy: 4,
        weapon: 4,
        armor: 0,
        meal: 0,
      })
    ).toBe(8);
  });
  it("服を装備してカチコチ料理なしの場合", () => {
    expect(
      calcBlock({
        enemy: 4,
        weapon: 4,
        armor: 4,
        meal: 0,
      })
    ).toBe(4);
  });
  it("全て装備ありの場合", () => {
    expect(
      calcBlock({
        enemy: 4,
        weapon: 4,
        armor: 4,
        meal: 12,
      })
    ).toBe(1);
  });
});

describe("ダメージ量が0ポイント以下だった場合の防御計算に関するテスト", () => {
  it("ダメージは1ポイントで固定される", () => {
    expect(
      calcBlock({
        enemy: 0,
        weapon: 4,
        armor: 4,
        meal: 0,
      })
    ).toBe(1);
  });
});
