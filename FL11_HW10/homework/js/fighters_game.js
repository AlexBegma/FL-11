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