//Two ways to declare number type variables
let num1 = 123;
let num2 = new Number(123);
console.log(num1);
console.log(num2);

//SOME NUMBER METHODS
//tofixed()
console.log(num1.toFixed(2)); //123.00
const balance = 34.4689;

//toPrecision()
console.log(balance.toPrecision(2)); //34
console.log(balance.toPrecision(3)); //34.5

//toString()
const value = 100;
console.log(value.toString());

//toLocaleString()
const price = 3560000;
console.log(price.toLocaleString()); // 3,560,000
console.log(price.toLocaleString('en-IN')); // 35,60,000

//MAX AND MIN NUMBER VALUES
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//----------------MATH IN JAVASCRIPT-------------------

//.abs() -> Gives the absolute value i.e. Positive Values
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(6,3,7,2)); // 2
console.log(Math.max(6,3,7,2)); // 7

//Math.random()

console.log(Math.random()); // Generates a random number between 0 and 1. 0.563534543

console.log(Math.random()*10); // Generates a random number between 0 and 1 then xplies it by 10. e.g. 2.3454354. 

//Now there can be a case where the number generated is 0.05534256..., so to avoid this case, we add 1 to it so the number generated is always greater than 0

console.log((Math.random()*10) + 1);

//We can use the .floor() method to get the lower value only and ignore the ones after the '.'
console.log(Math.floor((Math.random()*10) + 1));

//Generating a random number between two number.

const min = 50;
const max = 100;
console.log(Math.floor(Math.random()* (max - min + 1) + min));
