let pipe = function(num, ...boxArguments) {

	return function(num) {

		for (var i = 0; i < boxArguments.length; i++) {
			num = addOne[i](num);
		}
		return num;
	};
};

let addOne = function(num){
	return num + 1;
};

alert(pipe(1, addOne)(1));
alert(pipe(1, addOne, addOne)(1));
alert(pipe(1, addOne, addOne, addOne)(1));