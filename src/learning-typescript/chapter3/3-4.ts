export const strictNullCheck = (num: number) => {
  let nameMaybe = num > 0.5 ? "TONY" : undefined;
  return nameMaybe?.toLowerCase();
};
