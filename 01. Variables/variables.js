/* 
There are 2 ways to declare variables. "var and let".

The difference between let and var is basically the scope of the variables they create.

Variables declared by let are only available inside the block where they're defined.
Variables declared by var are available throughout the function in which they're declared. {}

var is not mostly used because of the issue in block scope and functional scope.
let is more preferred over var because of its block scoping as it helps in avoiding unintentional errors

We can also declare variables using the const keyword whose value can't be changed after declaration. However, if the constant is an object, then we can add, delete and update to that object
*/

var a = 12;
const b = 15;
let x = 25;
let degree = "Software Engineering";
console.log("The Current Value of a is: " + a);
console.log(a);
a = 10;
console.log("The New Value of a is: " + a);
// b = 25;  Error as we can't modify a constant
console.log(x);
console.log(degree);
