let lengthAString = prompt('What is the triangle side length A ?');
let lengthBString = prompt('What is the triangle side length B ?');
let lengthCString = prompt('What is the triangle side length C ?');

let lengthA = Number(lengthAString);
let lengthB = Number(lengthBString);
let lengthC = Number(lengthCString);

if (lengthA > 0 && lengthB > 0 && lengthC > 0
	&& lengthA + lengthB > lengthC && lengthA + lengthC > lengthB && lengthB + lengthC > lengthA) {
	if (lengthA === lengthB && lengthA === lengthC && lengthB === lengthC) {
		console.log('Eequivalent triangle');
	} else if (lengthA === lengthB || lengthA === lengthC || lengthC === lengthB) {
		console.log('Isosceles triangle');
	} else if (lengthA !== lengthB && lengthA !== lengthC && lengthB !== lengthC) {
		console.log('Normal triangle');
	}
} else {
	console.log('Triangle doesn’t exist');
}