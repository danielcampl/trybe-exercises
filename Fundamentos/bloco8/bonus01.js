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

//EX01.
const dragonDamage = () => {
    const damage = Math.floor((Math.random() * 50) + 15);
    return damage;
}

//EX02.
const warriorDamage = () => {
    const damage = Math.floor((Math.random() * (30 * 2)) + 30);
    return damage;
}

//EX03.
const mageDamage = mage => {
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    const turnStatus = {
        manaSpent: 0,
        damageSpeal: 'Not enough mana',
    }

    if (mage.mana >= 15) {
        const mageDmg = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
        turnStatus.manaSpent = 15;
        turnStatus.damageSpeal = mageDmg;
        return turnStatus;
    }
    return turnStatus;
}

//BÔNUS01.
const gameActions = {
    warriorAction: (warriorDamage) => {
        const warriorAttack = warriorDamage(warrior);
        warrior.damage = warriorAttack;
        dragon.healthPoints -= warriorAttack;
    },

    //BÔNUS02.
    mageAction: (mageDamage) => {
        const mageAttack = mageDamage(mage);
        const turnStatus = mageAttack.damageSpeal;
        mage.damage = turnStatus;
        mage.mana -= mageAttack.manaSpent;
        dragon.healthPoints -= turnStatus;
    },

    //BÔNUS03.
    dragonAction: (dragonDamage) => {
        const dragonAttack = dragonDamage(dragon);
        mage.healthPoints -= dragonAttack;
        warrior.healthPoints -= dragonAttack;
        dragon.damage = dragonAttack;
    },

    //BÔNUS04.
    results: () => battleMembers,
};

gameActions.warriorAction(warriorDamage);
gameActions.mageAction(mageDamage);
gameActions.dragonAction(dragonDamage);
console.log(gameActions.results());