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
const data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
]

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