export const sortNumberList = (list: string[]): string[] => {
  return list.sort((a: string, b: string) => {
    return Number(a) - Number(b);
  });
};

export const sortUserList = (list: any[], key: string): any[] => {};
