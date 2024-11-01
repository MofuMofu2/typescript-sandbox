export const strictNullCheck = (num: number) => {
  let nameMaybe = num > 0.5 ? "TONY" : undefined;
  return nameMaybe?.toLowerCase();
};

export const truthinessCheck = (num: number) => {
  let geneticist = num > 0.5 ? "Barbara" : undefined;

  if (geneticist) {
    geneticist = geneticist.toUpperCase();
  }

  return geneticist;
};
