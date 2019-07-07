let coordinateAx = prompt('What is cordinate Ax ?');
let coordinateAy = prompt('What is cordinate Ay ?');
let coordinateBx = prompt('What is cordinate Bx ?');
let coordinateBy = prompt('What is cordinate By ?');
let coordinateCx = prompt('What is cordinate Cx ?');
let coordinateCy = prompt('What is cordinate Cy ?');

let devider = 2;
let centerX = (Number(coordinateAx) + Number(coordinateBx)) / devider;
let centerY = (Number(coordinateAy) + Number(coordinateBy)) / devider;

if (Number(coordinateCx) === centerX && Number(coordinateCy) === centerY) {
	console.log(true);
} else {
	console.log(false);
}