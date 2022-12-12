export const enemyAttack = (enemy: number, weapon: number) => {
  return enemy + weapon;
};

export const calcBlock = (attack: number, armor: number) => {
  return calcDamage(attack, armor) * 0.25;
};

const calcDamage = (attack: number, armor: number) => {
  const point = attack - armor;
  return point > 0 ? point : 1;
};
