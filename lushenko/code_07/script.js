let f1 = document.querySelector('.f-1');

function one() {
	console.log('work');
}
one();

// f1.onclick = one; 

f1.onclick = () => {
	console.log('Hello');
}

console.log(1 + one());
console.log(one());

function two() {
	console.log('work 2222');
	return 54;
}

console.log(1 + two());

let a = 8;
let b = 9;
// return a*b;

function multi() {
	console.log(a * b);
	return a * b;
}

let c1 = multi();
let c2 = multi();
console.log(c1, c2);

function multi2(x = 8, y = 9) {
return x*y;
}

console.log(multi2(4, 5));
console.log(multi2(20, 5));
console.log(multi2(4, a));
console.log(multi2(10));

f2 = document.querySelector('.f-2').onclick = function() {
	console.log('+++++');
}

f2 = document.querySelector('.f-2').onclick = () => {
	console.log('arrov');
	console.log('+++++');
}

// function(a, b) {
// return 56*a;
// }

(a, b) => {

}