export const changeUpperCase = () => {
  let admiral: number | string;
  admiral = "Grace Hopper"; // ここで割り当てが発生して絞り込まれる

  return admiral.toUpperCase();
};

export const typeCheck = (num: number) => {
  let scientist = num > 0.5 ? "Rosalind Franklin" : 51;

  if (scientist === "Rosalind Franklin") {
    scientist = scientist.toUpperCase();
  }

  return scientist;
};
