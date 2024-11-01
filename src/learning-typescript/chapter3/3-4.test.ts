import { strictNullCheck, truthinessCheck } from "./3-4";

describe("3-4-1 10億ドルの過ち", () => {
  it("numが0.5より大きい場合は名前を小文字変換して返す", () => {
    expect(strictNullCheck(0.6)).toBe("tony");
  });

  it("numが0.5以下の場合はundefinedを返す", () => {
    expect(strictNullCheck(0.5)).toBe(undefined);
  });
});

describe("3-4-2 真偽性による絞り込み", () => {
  it("numが0.5より大きい場合は名前を大文字変換して返す", () => {
    expect(truthinessCheck(0.6)).toBe("BARBARA");
  });

  it("numが0.5以下の場合はundefinedを返す", () => {
    expect(truthinessCheck(0.5)).toBe(undefined);
  });
});
