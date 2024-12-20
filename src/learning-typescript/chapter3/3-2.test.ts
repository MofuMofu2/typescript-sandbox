import { changeUpperCase, typeCheck, typeOfCheck } from "./3-2";

describe("3-2-1 割り当てによる絞り込み", () => {
  it("提督の名前を大文字変換して返す", () => {
    expect(changeUpperCase()).toBe("GRACE HOPPER");
  });
});

describe("3-2-2 条件チェック", () => {
  it("numが0.5より大きい場合は名前を大文字変換して返す", () => {
    expect(typeCheck(0.6)).toBe("ROSALIND FRANKLIN");
  });

  it("numが0.5以下の場合は年齢を返す", () => {
    expect(typeCheck(0.5)).toBe(51);
  });
});

describe("3-2-3 typeof チェック", () => {
  it("numが0.5より大きい場合は名前を小文字変換して返す", () => {
    expect(typeOfCheck(0.6)).toBe("rosalind franklin");
  });

  it("numが0.5以下の場合は年齢を固定小数点表記を用いて整形した文字列を返す", () => {
    expect(typeOfCheck(0.5)).toBe("51");
  });
});
