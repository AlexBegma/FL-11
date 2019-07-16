// 0
function getNumbers(string) {

	let array = [];
	let temp;
	for (let i=0; i<string.length; i++) {
		temp = parseInt(string[i]);
		if(!isNaN(temp)) {
			array.push(temp);
		}
	}
	return array;
}

// 1
function findTypes(...args) {

	let outcome = {};
	let dataType = '';
	for (let i = 0; i < args.length; i++) {
		dataType = typeof args[i];
		if (outcome.hasOwnProperty(dataType)) {
			outcome[dataType] +=1;
		} else{
			outcome[dataType] = 1;
		}
	}
	return outcome;
}

// 2
function executeForEach(array, eachElement) {

	for (let i = 0; i < array.length; i++) {
		eachElement(array[i]);
	}
}

// 3
function mapArray(array, eachElement) {

	const result = [];

	executeForEach(array, function(el) {
		result.push(eachElement(el));
	});
	return result;
}

// 4
function filterArray(array, eachElement) {

	const result = [];

	executeForEach(array, function(el) {
		if(eachElement(el)) {
			result.push(el);
		}
	})
	return result;
}

// 5
function showFormattedDate(formattedDate) {

	const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const day = formattedDate.getDate();
	const month = monthName[formattedDate.getMonth()];
	const year = formattedDate.getFullYear();

	return `Date: ${month} ${day} ${year}`;
}

// 6
function canConvertToDate(date) {

	if(isNaN(Date.parse(date))) {
		return false;
	}
	return true;
}

// 7
function daysBetween(dateFirst, dateSecond) {

	const differ = dateSecond - dateFirst;
	const millisecondsPerDay = 86400000;

	return Math.round(differ/millisecondsPerDay);
}

// 8
function getAmountOfAdultPeople(data){

	const ageEighteenYears = 6570;
	const today = new Date();
	const result = filterArray(data, function(el) {

		const birthday = new Date(el[' birthday ']);
		return daysBetween(birthday, today) > ageEighteenYears;
	});
	return result.length;
}

// 9
function keys(object) {

	const arrayOfKeys = [];

	for (let key in object) {
		if (object.hasOwnProperty(key)) {
			arrayOfKeys.push(key);
		}
	}
	return arrayOfKeys;
}

// 10
function values(object) {

	const resultArray = [];
	for (let i in object) {

		if (object.hasOwnProperty(i)) {

			resultArray.push(object[i]);
		}
	}
	return resultArray;
}