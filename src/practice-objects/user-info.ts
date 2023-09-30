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

export const convertNameUpperCase = (userList: UserInfo[]): UserInfo[] => {
  return userList.map((user) => {
    return {
      id: user.id,
      name: user.name.toUpperCase(),
      isAdmin: user.isAdmin,
    };
  });
};
