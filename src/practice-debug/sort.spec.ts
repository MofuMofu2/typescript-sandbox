import { sortNumberList, sortUserList } from "./sort";

it("数字の文字列を0から10まで昇順（0,1,2...）ソートできる", () => {
  expect(
    sortNumberList(["0", "3", "4", "5", "8", "9", "6", "7", "10", "1", "2"])
  ).toEqual(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
});

const userList = [
  { id: 1, name: "hoge" },
  { id: 4, name: "foo" },
  { id: 6, name: "baz" },
  { id: 2, name: "fuga" },
  { id: 3, name: "piyo" },
  { id: 9, name: "tama" },
  { id: 5, name: "bar" },
  { id: 8, name: "buchi" },
  { id: 10, name: "tora" },
  { id: 7, name: "pamo" },
];

describe("オブジェクト配列の指定したキーを降順（2,1,0）でソートできる", () => {
  it("idのソートが要件通りできる", () => {
    expect(sortUserList(userList, "id")).toEqual([
      { id: 1, name: "hoge" },
      { id: 2, name: "fuga" },
      { id: 3, name: "piyo" },
      { id: 4, name: "foo" },
      { id: 5, name: "bar" },
      { id: 6, name: "baz" },
      { id: 7, name: "pamo" },
      { id: 8, name: "buchi" },
      { id: 9, name: "tama" },
      { id: 10, name: "tora" },
    ]);
  });

  it("nameのソートが要件通りできる", () => {
    expect(sortUserList(userList, "name")).toEqual([
      { id: 5, name: "bar" },
      { id: 6, name: "baz" },
      { id: 8, name: "buchi" },
      { id: 4, name: "foo" },
      { id: 2, name: "fuga" },
      { id: 1, name: "hoge" },
      { id: 7, name: "pamo" },
      { id: 3, name: "piyo" },
      { id: 9, name: "tama" },
      { id: 10, name: "tora" },
    ]);
  });
});
