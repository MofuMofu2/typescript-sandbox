type UserInfo = {
  id: number;
  name: string;
  isAdmin: boolean;
};

export const filterAdminUsers = (userList: UserInfo[]): UserInfo[] => {
  return userList.filter((user) => {
    return user.isAdmin === true;
  });
};
