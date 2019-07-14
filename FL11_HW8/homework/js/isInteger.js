function isInteger(number) {
	// return (number ^ 0) === number;  // Внимание: num^0 – в скобках! Это потому, что приоритет операции ^ очень низкий. Если не поставить скобку, то === сработает раньше. Получится num ^ (0 === num), а это совсем другое дело.
	return number % 1 === 0;
}

alert(isInteger(3));
alert(isInteger(59.7));
alert(isInteger(-37.2));
alert(isInteger(29));

// Побитовое исключающее «ИЛИ»:	 ^ .