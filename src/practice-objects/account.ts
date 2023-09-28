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
