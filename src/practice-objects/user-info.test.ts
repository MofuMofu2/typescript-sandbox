import { filterAdminUsers, convertNameUpperCase } from "./user-info";

const testData = [
  { id: 1, name: "John", isAdmin: true },
  { id: 2, name: "Jane", isAdmin: false },
  { id: 3, name: "Doe", isAdmin: true },
];

describe("ユーザーリストの抽出ができる", () => {
  it("isAdminがtrueのユーザーリストだけ抽出する", () => {
    expect(filterAdminUsers(testData)).toEqual([
      { id: 1, name: "John", isAdmin: true },
      { id: 3, name: "Doe", isAdmin: true },
    ]);
  });

  it("falseだけの場合は空配列を返す", () => {
    expect(filterAdminUsers([{ id: 2, name: "Jane", isAdmin: false }])).toEqual(
      []
    );
  });

  it("空配列が引数に来たときは空配列を返す", () => {
    expect(filterAdminUsers([])).toEqual([]);
  });
});

describe("ユーザーリストの中の名前を大文字にして返す", () => {
  it("ユーザー名を大文字にして返す", () => {
    expect(convertNameUpperCase(testData)).toEqual([
      { id: 1, name: "JOHN", isAdmin: true },
      { id: 2, name: "JANE", isAdmin: false },
      { id: 3, name: "DOE", isAdmin: true },
    ]);
  });

  it("空配列が引数に来たときは空配列を返す", () => {
    expect(convertNameUpperCase([])).toEqual([]);
  });
});
