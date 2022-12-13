export const enemyAttack = (enemy: number, weapon: number) => {
  return enemy + weapon;
};

export const calcBlock = (attack: number, armor: number) => {
  const point = calcDamage(attack, armor);
  return point > 0 ? point : 1;
};

const calcDamage = (attack: number, armor: number) => {
  return attack - armor;
};
