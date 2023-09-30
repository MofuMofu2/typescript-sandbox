import { countPost } from "./account";

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
