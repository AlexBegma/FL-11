let userChoose = confirm('Do you want to play a game?');

let minRandomNumber = 0;
let maxRandomNumber = 8;

function randomInteger(min, max) {
	let rand = min - minRandomNumber + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}

if (userChoose === false) {
	alert('You did not become a billionaire, but can.');
} else {

	let total = 0;
	let attempts = 3;
	let randomNumber = randomInteger(minRandomNumber, maxRandomNumber);
	let win = false;

	let fourth = 4;
	let third = 3;
	let second = 2;
	let bigPrize = 100;
	let middlePrize = 50;
	let smallPrize = 25;

	while (attempts > 0) {
		let mainChoose = +prompt('Choose a roulette pocket number from 0 to 8\n' +
			'Attempts left: ' + attempts +'\n' +
			'Total prize: ' + total +
			'$\nPossible prize on current attempt: 100$');
		if (mainChoose === randomNumber) {

			win = true;

			if (attempts === third) {
				total = bigPrize;
			} else if (attempts === second) {
				total = middlePrize;
			} else {
				total = smallPrize;
			}
			let wish = confirm('Congratulation, you won! Your prize is: ' + total + '$. Do you want to continue?');
			if (wish === false) {
				alert('Thank you for your participation. Your prize is: ' + total + '$');
			}
			break;
		}

		attempts = attempts - 1;
	}

	if (win === false){
		alert('Thank you for your participation. Your prize is: ' + total + '$');
		let wish = confirm('Do you want to play again?');
		if (wish === false) {
			alert('Thank you for your participation. Your prize is: ' + total + '$');
		} else {
			maxRandomNumber += fourth;
			bigPrize *= second;
			middlePrize *= second;
			smallPrize *= second;
		}
	}
}