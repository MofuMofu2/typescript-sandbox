import { ThrowError } from "./throw-error";

describe("ThrowError", () => {
  it("should throw error", () => {
    // 1. 例外が発生すること
    // 2. 例外のメッセージが正しいこと
    // 3. 例外のレスポンスデータが正しいこと
    expect(() => {
      throw new ThrowError("error message", {
        message: "error message",
        code: 500,
      });
    }).toThrowError("error message");
  });
  it("例外の中にresponseDataが含まれている", () => {
    expect(() => {
      throw new ThrowError("error message", {
        message: "error message",
        code: 500,
      });
    }).toThrowError(
      new ThrowError("error message", { message: "error message", code: 500 })
    );
  });
});
