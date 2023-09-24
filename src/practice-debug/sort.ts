export const sortNumberList = (list: string[]): string[] => {
  return list.sort((a: string, b: string) => {
    return Number(a) - Number(b);
  });
};

export type User = {
  id: number;
  name: string;
};

export const sortUserList = (userList: User[], sortKey: keyof User) => {
  switch (sortKey) {
    case "id":
      return sortUserListById(userList);
    case "name":
      return sortUserListByName(userList);
  }
};

const sortUserListById = (userList: User[]) => {
  return userList.sort((a: User, b: User) => {
    return a.id - b.id;
  });
};

const sortUserListByName = (userList: User[]) => {
  return userList.sort((a: User, b: User) => a.name.localeCompare(b.name));
};
