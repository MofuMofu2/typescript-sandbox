type UserInfo = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const users: UserInfo[] = [
  { id: 1, name: "John", isAdmin: true },
  { id: 2, name: "Jane", isAdmin: false },
  { id: 3, name: "Doe", isAdmin: true },
];

export const filterAdminUsers = (userLists: UserInfo[]): UserInfo[] => {
  return userLists.filter((user) => {
    return user.isAdmin === true;
  });
};
