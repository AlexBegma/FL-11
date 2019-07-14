function isInteger(number) {
	return (number ^ 0) === number;

}

alert(isInteger(3));
alert(isInteger(59.7));
alert(isInteger(-37.2));
alert(isInteger(29));