type Account = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  posts: Posts[];
};

type Posts = {
  postId: number;
  title: string;
  content: string;
};
