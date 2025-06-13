function myFunc() {
  console.log("A");
  console.log("R");
  console.log("B");
  console.log("A");
  console.log("B");
}
myFunc();
function xply(x, y) {
  return x * y;
}
console.log(xply(5, 6)); // 30
// function userLoggedIn (username){
// 	return `${username} just logged in`;
// };

function userLoggedIn(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(userLoggedIn()); // Now this will execute the return statement as well which we can handle by ending the function in the IF block by simply returning nothing

// Another nice way to write the IF condition instead of using the === is to use !. This exclamatory sign is known as NOT symbol which converts false to true. So by default, undefined is treated as a false value in JavaScript. so we can simply write (!username). It basically means if username is undefined (false), change it to true, it will be considered true and the codeblock would be executed.

function userLoggedIn2(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(userLoggedIn2("Agha"));

function greeting(username = "Someone") {
  // This someone would be default return value if no arguments are given.
  return `Good Morning ${username}`;
}
console.log(greeting()); // Good Morning Someone

function testFunc(a, b) {
  var result = a / b;
  return result;
}

var result = testFunc(5, 5);
console.log(result);

//Handling Objects in functions

const item = {
  itemName: "Keyboard",
  price: 20000,
};
function handleObject(anyObject) {
  console.log(`${anyObject.itemName} is of price ${anyObject.price}`);
}

handleObject(item);

const myArr = [2, 3, 4, 5];
function returnSecondVal(anyArray) {
  return anyArray[1];
}
console.log(returnSecondVal(myArr)); //3

// A function is a block of reusable code which performs some task. We create functions so that the same code can be reused in our program anytime we want without having to rewrite the same lines of code.
// Functions can take inputs, do some processing and return some outputs (return values).
// Note: In JS, we do not have to define the datatypes of the parameters while defining the function or use any var or let, just the names are satisfactory.

// Declaring a Function
/* Syntax:
function functionName (parameters) {
	//code block
}; This is known as Function Declaration, If we write the body as well, then that's called definition of a function
*/
function myFunc(){
  console.log("I am a Function");
}

// FUNCTION CALL: PARAMETERS and ARGUMENTS
// While defining the function, the inputs of the function are called Parameters and while giving the inputs while calling the function, the inputs are named as arguments
function add(num1, num2){ // num1 and num2 are parameters
	console.log(num1+num2);
};
// Calling the Function
add;
// This just means the reference of the function. It wouldn't print anything as JS will just look where the function add is and not actually execute it. To execute any function, we use brackets with the function name ().
add();

add(3, 4); // 7
// Here the 3 and 4 are known as arguments.

// Function Expression
// A function can also be assigned to a variable. Thats's known as Function Expression
const multiply = function (x,y){
	return x*y;
}
console.log(multiply(5, 6)); // 30

// return Keyword
// return keyword basically means that the function has ended and is returning a value. If we don't explicitly return any value then ==undefined== is returned by default.

// NOTE: return basically means the end of the function's body so anything written in the function's block after return statement will not be executed
function addTwoNumbers(a, b){
	return a + b;
	console.log("Function Has Done it's work") // Won't be executed, code unreachable
}
const result = addTwoNumbers(5,3);
console.log("The addition is: ", result); // The addition is: 8

// More about Function Parameters
function userLoggedIn(username){
	return `${username} just logged in`;
}
userLoggedIn("Agha") // Blank Output, as we are not printing the value returned by the function.
console.log(userLoggedIn("Agha")); // Agha just logged in

// What if we don't give any arguments?, then as stated earlier, the default return value ==undefined== would be returned.
console.log(userLoggedIn()); // undefined just logged in

// We can handle such cases by using an if condition to check whether the parameter username is defined or not.
function userLoggedIn2(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(userLoggedIn2("Agha"));

// We can also add our own default value for the function so that something else is returned by default if the arguments are not given
function greeting(username = "Someone"){ // This someone would be default return value if no arguments are given.
  return `Good Morning ${username}`;
  }
console.log(greeting()); // Good Morning Someone
  
/*
REST Operator ...
The rest and spread operators looks the same ... but it is differentiated via their use case. If we don't know how many arguments will be passed in the function when it is called so we can use the rest ( ... ) operator. It will take any number of values and treat them as an array
*/
function calculateCartPrice(num){
	return num;
}
console.log(calculateCartPrice(200, 400, 500)); // 200

// To solve this, just simply use the rest operator in the function parameter

function calculateCartPrice2(...num){
	return num;
}
console.log(calculateCartPrice2(200, 400, 500)); // [200, 400, 500]

// Functions with Objects and Arrays

// We can take any array or object in functions as arguments.

const item2 = {
	itemName: "Keyboard",
	price: 20000
};
function handleObject(anyObject){
		console.log(`${anyObject.itemName} is of price ${anyObject.price}`);
}
handleObject(item2); // Keyboard is of 20000

// Same is for arrays

const anotherArr = [2, 3, 4, 5];

function returnSecondVal(anyArray){
	return anyArray[1];
}
console.log(returnSecondVal(anotherArr)); //3
