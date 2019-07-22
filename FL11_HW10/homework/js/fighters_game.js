let HP = 100;
const maximum = 100;

class Fighter {
	constructor(name, damage, hp, agility, win = 0, lose = 0) {
		this._name = name;
		this._damage = damage;
		this._hp = hp;
		this._agility = agility;
		this._win = win;
		this._lose = lose;
	}

	getName() {
		return this._name;
	}
	getDamage() {
		return this._damage;
	}
	getHp() {
		return this._hp;
	}
	getAgility() {
		return this._agility;
	}
	getWin() {
		return this._win;
	}
	getLose() {
		return this._lose;
	}

	setHp(hp) {
		this._hp = hp;
	}
	setWin(win) {
		this._win = win;
	}
	setLose(lose) {
		this._lose = lose;
	}

	attack(defender) {
		let posibbleAttack = maximum - defender.getAgility();
		if(Math.random()*maximum < posibbleAttack) {
			this.dealDamage(defender);
			console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
		} else {
			console.log(`no damage`);
		}
	}
	heal(hp) {
		let sumHp = this.getHp() + hp;
		if(sumHp >= HP) {
			this.setHp(HP);
			console.log(`${this.getName()} heal is ${this.getHp()} now!`);
		} else {
			this.setHp(sumHp);
			console.log(`${this.getName()} heal is ${this.getHp()} now!`);
		}
	}
	addWin(fighter) {
		fighter.setWin(fighter.getWin() + 1);
		console.log(`${fighter.getName()} you are winner!`)
	}
	addLose(defender) {
		defender.setLose(defender.getLose() + 1);
		console.log(`${defender.getName()} sorry, you are loser.`)
	}
	dealDamage(defender) {
		if(defender.getHp() - this.getDamage() >= 0) {
			defender.setHp(defender.getHp() - this.getDamage());
		} else {
			defender.setHp(0);
		}
	}
	logCombatHistory() {
		console.log(`Name: ${this.getName()}, Wins: ${this.getWin()}, Losses: ${this.getLose()}`);
	}
}

function battle(fighter, defender) {
	do {
		fighter.attack(defender);
		if(defender.getHp() === 0) {
			fighter.addWin(fighter);
			defender.addLose(defender);
			fighter.logCombatHistory(fighter);
			defender.logCombatHistory(defender);
			return;
		}
		let action = fighter;
		fighter = defender;
		defender = action;
	} while (defender.getHp() > 0)
}

let numberOfDamageBilly = 20;
let numberOfDamageJoseph = 35;
let numberOfAgilityBilly = 100;
let numberOfAgilityJoseph = 100;
let numberOfHPBilly = 25;
let numberOfHPJoseph = 20;
let firstFighter = new Fighter('Billy', numberOfDamageBilly, numberOfAgilityBilly, numberOfHPBilly);
let secondFighter = new Fighter('Joseph', numberOfDamageJoseph, numberOfAgilityJoseph, numberOfHPJoseph);
battle(firstFighter, secondFighter);
/////////////////////////////////////////////////////


// Anastasia Broska
// 'use strict';
// const MAX_SUCCESS_ATTACK_PROBABILITY = 100;

// class Fighter {
// 	constructor(fighter) {
// 		let _name = fighter.name;
// 		let _damage = fighter.damage;
// 		let _totalHealth = fighter.hp;
// 		let _health = _totalHealth;
// 		let _agility = fighter.agility;
// 		let _win = 0;
// 		let _loss = 0;

// 		this.getName = () => _name;
// 		this.getDamage = () => _damage;
// 		this.getHealth = () => _health;
// 		this.getAgility = () => _agility;
// 		this.getWin = () => _win;
// 		this.getLoss = () => _loss;

// 		this.dealDamage = (damage) => {
// 			_health = _health - damage;
// 			if (_health < 0) {
// 				_health = 0;
// 			}
// 		};

// 		this.heal = (amountOfHealing) => {
// 			_health = _health + amountOfHealing;
// 			if (_health > _totalHealth) {
// 				_health = _totalHealth;
// 			}
// 		};

// 		this.addWin = () => _win++;
// 		this.addLoss = () => _loss++;
// 	}

// 	attack(defender) {
// 		if (!(defender instanceof Fighter)) {
// 			console.error("Fighter can't attack unknown object!");
// 			return;
// 		}
// 		let successProbability = MAX_SUCCESS_ATTACK_PROBABILITY - defender.getAgility();
// 		let randomNumber = Math.floor(Math.random() * (MAX_SUCCESS_ATTACK_PROBABILITY + 1));
// 		if (randomNumber <= successProbability) {
// 			console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
// 			defender.dealDamage(this.getDamage());
// 		} else {
// 			console.log(`${this.getName()} attack missed`);
// 		}
// 	}

// 	logCombatHistory() {
// 		console.log(`Name: ${this.getName()}, Wins: ${this.getWin()}, Losses: ${this.getLoss()}`);
// 	}

// 	isDead() {
// 		return this.getHealth() <= 0;
// 	}

// 	isAlive() {
// 		return !this.isDead();
// 	}

// 	canFight() {
// 		if (this.isDead()) {
// 			console.log(`${this.getName()} is dead and can't fight.`);
// 			return false;
// 		}
// 		return true;
// 	}
// }

// function battle(firstFighter, secondFighter) {
// 	let firstFighterCanFight = firstFighter.canFight();
// 	let secondFighterCanFight = secondFighter.canFight();
// 	if (!(firstFighterCanFight && secondFighterCanFight)) {
// 		return;
// 	}
// 	while (firstFighter.isAlive() && secondFighter.isAlive()) {
// 		firstFighter.attack(secondFighter);
// 		if (secondFighter.isAlive()) {
// 			secondFighter.attack(firstFighter);
// 		}
// 	}
// 	if (firstFighter.isAlive()) {
// 		firstFighter.addWin();
// 		secondFighter.addLoss();
// 	} else {
// 		firstFighter.addLoss();
// 		secondFighter.addWin();
// 	}
// }
/////////////////////////////////////////////////////


// Anatolii Ocheretnyi
// const private_data = new WeakMap();
// class Fighter{
// 	constructor({name, damage, hp, agility}){
// 		const _private = new Map()
// 		.set('name', name)
// 		.set('damage', damage)
// 		.set('hp', hp)
// 		.set('maxHP', hp)
// 		.set('agility', agility);
// 		private_data.set(this, _private);
// 		this.win = 0;
// 		this.loss = 0;
// 	}
// 	get getName(){
// 		const _private = private_data.get(this);
// 		let name = _private.get('name');
// 		return name
// 	}
// 	get getDamage(){
// 		const _private = private_data.get(this);
// 		let damage = _private.get('damage');
// 		return damage
// 	}
// 	get getHealth(){
// 		const _private = private_data.get(this);
// 		let hp = _private.get('hp');
// 		return hp
// 	}
// 	get getMaxHp(){
// 		const _private = private_data.get(this);
// 		let maxHP = _private.get('maxHP');
// 		return maxHP
// 	}
// 	get getAgility(){
// 		const _private = private_data.get(this);
// 		let agility = _private.get('agility');
// 		return agility
// 	}
// 	atack(defender){
// 		let maxPosibilityOfAtack = 100;
// 		let posibilityOfAtack = maxPosibilityOfAtack - defender.getAgility;
// 		let chanceOfAtack = Math.floor(Math.random() * maxPosibilityOfAtack)
// 		if(posibilityOfAtack > chanceOfAtack){
// 			defender.dealDamage(this.getDamage);
// 			console.log(`${this.getName} make ${this.getDamage} damage to ${defender.getName}`);
// 		} else{
// 			console.log(`${this.getName} attack missed`);
// 		}
// 	}
// 	heal(heal) {
// 		const _private = private_data.get(this);
// 		let hp = _private.get('hp');
// 		let maxHP = _private.get('maxHP');
// 		hp += heal;
// 		_private.set('hp', hp);
// 		if(hp > maxHP){
// 			hp = maxHP
// 			_private.set('hp', hp);
// 		}
// 		return console.log(`${this.getName} health is: ${this.getHealth}`);
// 	}
// 	dealDamage(damage){
// 		const _private = private_data.get(this);
// 		let hp = _private.get('hp');
// 		hp -= damage
// 		_private.set('hp', hp);
// 		if(hp < 0){
// 			hp = 0
// 			_private.set('hp', hp);
// 		}
// 	}
// 	addWin(){
// 		this.win++;
// 	}
// 	addLose(){
// 		this.loss++;
// 	}
// 	logCombatHistory(){
// 		return console.log(`Name: ${this.getName} Wins: ${this.win}, Losses: ${this.loss}`);
// 	}
// }
// function battle(attackFighter, defenderFighter){
// 	while(attackFighter.getHealth > 0 && defenderFighter.getHealth > 0){
// 		if(attackFighter.getHealth > 0){
// 			attackFighter.atack(defenderFighter);
// 		}
// 		if(defenderFighter.getHealth > 0){
// 			defenderFighter.atack(attackFighter);
// 		}
// 		if(attackFighter.getHealth === 0){
// 			defenderFighter.addWin();
// 			attackFighter.addLose();
// 			console.log(`${attackFighter.getName} is dead and can't fight`);
// 		}
// 		if(defenderFighter.getHealth === 0){
// 			attackFighter.addWin();
// 			defenderFighter.addLose();
// 			console.log(`${defenderFighter.getName} is dead and can't fight`);
// 		}
// 	}
// }
/////////////////////////////////////////////////

// Anna Argunova
// function Fighter(object) {
//     let counterWins = 0,
//         counterLosses = 0;
//     const max = 100,
//         min = 0;
//     this.getName = () => object.name;
//     this.getDamage = () => object.damage;
//     this.getHealth = () => object.hp;
//     this.getAgility = () => object.agility;
//     this.addWin = () => counterWins++;
//     this.addLoss = () => counterLosses++;
//     this.setHealth = function (hp) {
//         if (hp <= max && hp >= 0) {
//             object.hp = hp;
//         }
//     }

//     this.heal = function (hp) {
//         if (hp + this.getHealth() > max) {
//             this.setHealth(max);
//         } else {
//             this.setHealth(hp + this.getHealth());
//         }
//     };

//     this.dealDamage = function (hp) {
//         if (this.getHealth() - hp < min) {
//             this.setHealth(min);
//         } else {
//             this.setHealth(this.getHealth() - hp);
//         }
//     };



//     this.attack = function (object2) {
//         let random = Math.floor(Math.random() * (max - 0 + 1)) + 0;
//         if (random >= this.getAgility()) {
//             object2.dealDamage(this.getDamage());
//             console.log(`${this.getName()} make ${this.getDamage()} damage to ${object2.getName()}`);
//         } else {
//             console.log(`${this.getName()} attack missed`);
//         }
//     };


//     this.logCombatHistory = function () {
//         console.log(`Name: ${this.getName()}, Wins: ${counterWins}, Losses: ${counterLosses}`);
//     }
// }

// function battle(object1, object2) {
//     let attacksFirst = true;
//     if (!object1.getHealth()) {
//         console.log(`${object1.getName()} is dead and can't fight`);
//     } else if (!object2.getHealth()) {
//         console.log(`${object2.getName()} is dead and can't fight`);
//     } else {
//         while (object1.getHealth() && object2.getHealth()) {

//             if (attacksFirst) {
//                 object1.attack(object2);
//                 attacksFirst = false;
//             } else {
//                 object2.attack(object1);
//                 attacksFirst = true;
//             }
//         }
//     }
//     if (object1.getHealth() === 0) {
//         object1.addLoss();
//         object2.addWin();
//     } else {
//         object1.addWin();
//         object2.addLoss();
//     }
// }

// const myFighter = new Fighter({
//     name: 'John',
//     damage: 20,
//     hp: 100,
//     agility: 25
// });
// const myFighter2 = new Fighter({
//     name: 'Jack',
//     damage: 30,
//     hp: 100,
//     agility: 35
// });
///////////////////////////////////////////

//  Andrii Petrov
// let victory = Symbol('victory');
// let toll = Symbol('toll');
// let name = Symbol('name');
// let harm = Symbol('harm');
// let _agility = Symbol('agility');
// let _hp = Symbol('hp');
// let _fighterObj = Symbol('fighterObj');

// const oneHundredPercent = 100;

// class Fighter {
// 	constructor(fighterObj) {
// 		this[_fighterObj] = fighterObj;
// 		this[victory] = 0;
// 		this[toll] = 0;
// 		this[name] = fighterObj.name;
// 		this[harm] = fighterObj.damage;
// 		this[_hp] = fighterObj.hp;
// 		this[_agility] = fighterObj.agility;
// 	}

// 	getName() {
// 		return this[name];
// 	}

// 	getDamage() {
// 		return this[harm];
// 	}

// 	getAgility() {
// 		return this[_agility];
// 	}

// 	getHealth() {
// 		return this[_hp];
// 	}

// 	attack(anotherFighter) {
// 		let successProbability = oneHundredPercent - anotherFighter.getAgility();
// 		let isDamageSuccess = Math.floor(Math.random() * (oneHundredPercent + 1)) <= successProbability;

// 		if (isDamageSuccess) {
// 			anotherFighter.dealDamage(this.getDamage());
// 			return `${this.getName()} make ${this.getDamage()} to ${anotherFighter.getName()}`
// 		} else {
// 			return `${this.getName()} attack missed`
// 		}
// 	}

// 	logCombatHistory() {
// 		console.log(`Name: ${this.getName()}, Victory: ${this[victory]}, Toll: ${this[toll]}`);
// 	}

// 	heal(hp = Number.MAX_SAFE_INTEGER) {
// 		if (this[_hp] + hp > this[_fighterObj].hp) {
// 			this[_hp] = this[_fighterObj].hp;
// 		} else {
// 			this[_hp] += hp;
// 		}
// 	}

// 	dealDamage(damageHp) {
// 		if (this[_hp] - damageHp > 0) {
// 			this[_hp] -= damageHp;
// 		} else {
// 			this[_hp] = 0;
// 		}
// 	}

// 	addWin() {
// 		this[victory]++;
// 	}

// 	addLoss() {
// 		this[toll]++;
// 	}
// }

// function battle(fighter1, fighter2) {
// 	if (fighter1.getHealth() === 0) {
// 		console.log(`${fighter1.getName()} is dead and can't fight.`);
// 		return;
// 	} else if (fighter2.getHealth() === 0) {
// 		console.log(`${fighter2.getName()} is dead and can't fight.`);
// 		return;
// 	}

// 	while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
// 		console.log(fighter1.attack(fighter2));

// 		if (fighter2.getHealth() > 0) {
// 			console.log(fighter2.attack(fighter1));
// 		} else {
// 			fighter2.addLoss();
// 			fighter1.addWin();
// 		}

// 		if (fighter1.getHealth() === 0) {
// 			fighter1.addLoss();
// 			fighter2.addWin();
// 		}
// 	}
// }

// let fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
// let fighter2 = new Fighter({name: 'Jim', damage: 10, hp: 120, agility: 40});

// battle(fighter1, fighter2);
// console.log(fighter1.getHealth());
// console.log(fighter2.getHealth());
// fighter1.logCombatHistory();
// fighter2.logCombatHistory();
// battle(fighter1, fighter2);