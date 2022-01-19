const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (strength) => {
  const damage = Math.ceil((Math.random() * (strength - 14))) + 14;
  return damage;
}

const warriorDamage = (strength, weaponDmg) => {
  const maximoDamage = strength * weaponDmg;
  const damage = Math.ceil((Math.random() * (maximoDamage - (strength - 1)))) + (strength - 1);
  return damage;
}

const mageDamage = (intelligence, mana) => {
  const maximoDamage = intelligence * 2;
  const damage = Math.ceil((Math.random() * (maximoDamage - (intelligence - 1)))) + (intelligence - 1);
  if (mana < 15) {
    return 'Não possui mana suficiente';
  }
  mana -= 15;
  return damage;
}

console.log(dragonDamage(dragon.strength));
console.log(warriorDamage(warrior.strength, warrior.weaponDmg));
console.log(mageDamage(mage.intelligence, mage.mana));