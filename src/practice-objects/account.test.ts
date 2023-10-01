import { accountProperty, countPost } from "./account";

describe("ユーザーに紐づく投稿数を返す", () => {
  it("ユーザーに紐づく投稿数をカウントして返す", () => {
    expect(
      countPost({
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        isAdmin: false,
        posts: [
          {
            postId: 101,
            title: "My first post",
            content: "This is the content of my first post.",
          },
          {
            postId: 102,
            title: "My post",
            content: "This is the content of my second post.",
          },
        ],
      })
    ).toBe(2);
  });
  it("postsの配列が空のときは0を返す", () => {
    expect(
      countPost({
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        isAdmin: false,
        posts: [],
      })
    ).toBe(0);
  });
});

const userData = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  isAdmin: false,
  posts: [
    {
      postId: 101,
      title: "My first post",
      content: "This is the content of my first post.",
    },
    {
      postId: 102,
      title: "My post",
      content: "This is the content of my second post.",
    },
  ],
};

describe("指定したユーザープロパティの値を返すことができる", () => {
  it("posts以外のkeyを指定したとき", () => {
    expect(accountProperty(userData, "id")).toBe(1);
    expect(accountProperty(userData, "name")).toBe("John Doe");
    expect(accountProperty(userData, "isAdmin")).toBe(false);
  });

  it("postsを指定するとポスト情報の配列が全て返る", () => {
    expect(accountProperty(userData, "posts")).toEqual([
      {
        postId: 101,
        title: "My first post",
        content: "This is the content of my first post.",
      },
      {
        postId: 102,
        title: "My post",
        content: "This is the content of my second post.",
      },
    ]);
  });
});
