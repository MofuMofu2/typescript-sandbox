export const changeUpperCase = () => {
  let admiral: number | string;
  admiral = "Grace Hopper"; // ここで割り当てが発生して絞り込まれる

  return admiral.toUpperCase();
};
