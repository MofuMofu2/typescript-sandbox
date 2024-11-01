import { changeUpperCase } from "./3-2";

it("提督の名前を大文字変換して返す", () => {
  expect(changeUpperCase()).toBe("GRACE HOPPER");
});
