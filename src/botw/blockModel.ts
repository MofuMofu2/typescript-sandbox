type Battle = {
  enemy: number;
  weapon: number;
  armor: number;
  meal: number;
};

export const enemyAttack = (enemy: number, weapon: number) => {
  return enemy + weapon;
};

export const blockPower = (armor: number, meal: number) => {
  return armor + meal;
};

export const calcBlock = (battle: Battle) => {
  const point = calcDamage(
    enemyAttack(battle.enemy, battle.weapon),
    blockPower(battle.armor, battle.meal)
  );
  return point > 0 ? point : 1;
};

const calcDamage = (attack: number, block: number) => {
  return attack - block;
};
