type UserInfo = {
  id: number;
  name: string;
  isAdmin: boolean;
};

export const filterAdminUsers = (userLists: UserInfo[]): UserInfo[] => {
  return userLists.filter((user) => {
    return user.isAdmin === true;
  });
};
