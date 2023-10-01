type Account = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  posts: Post[];
};

type Post = {
  postId: number;
  title: string;
  content: string;
};

export const countPost = (account: Account): number => {
  return account.posts.length;
};

export const accountProperty = <T extends keyof Account>(
  account: Account,
  property: T
): Account[T] => {
  return account[property];
};
