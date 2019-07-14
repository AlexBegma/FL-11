function reverseNumber (numbers) {
	let abc = numbers.toString().split('').map(Number);
	let sojourn = [];

	for (let i = abc.length - 1; i>=0; i--) {
		sojourn.push(abc[i]);
	}

	let moveBack = sojourn.join('');
	let total = parseFloat(moveBack);
	if ( numbers < 0 ) {
		return total * - 1;
	} else {
		return total;
	}
}

alert(reverseNumber (-123456789));