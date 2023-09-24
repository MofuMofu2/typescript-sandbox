import { sortUserList } from "./sort";

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

function getTop3Values() {
  const users = sortUserList(userList, "id");
  return users.slice(0, 3);
}

console.log(getTop3Values());
