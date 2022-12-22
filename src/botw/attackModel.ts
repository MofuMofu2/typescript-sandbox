export const attack = (weapon: number, armor: number = 0, buff: number = 0) => {
  const weaponAttack = weapon + armor;
  return buff === 0 ? weaponAttack : Math.trunc(weaponAttack * buff);
};
