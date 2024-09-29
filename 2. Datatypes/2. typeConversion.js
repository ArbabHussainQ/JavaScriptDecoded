
//Some examples of type conversion in JavaScript....

/* 
To know the datatype of any variable or value, we can use the typeof() function.
It can be used in two ways
=> console.log(typeof variableName/value)
=> console.log(typeof(variableName/value))

We can convert the datatype of a variable by using something like this
Number(variable)
String(variable)
Boolean(variable)
*/


//String to Number
let score = "33";
console.log(typeof score); // string
let scoreInNumber = Number(score);
console.log(scoreInNumber); // 33
console.log(typeof scoreInNumber); // number
console.log("\n");

//What if the string had characters instead of numbers?
let score2 = "50abc";
console.log(typeof score); // string
let score2InNumber = Number(score2);
// But the actual value of the number would be NaN (Not a number). 
// So basically, the datatype of NaN is number
console.log(score2InNumber); // NaN
console.log(typeof score2InNumber);
console.log("\n");

//null object to number
let x = null;
console.log(x + " type:" + typeof x); //  nul type: object
let xtoNumber = Number(x);
console.log(xtoNumber + " type: " + typeof xtoNumber); // 0 type: number
console.log("\n");

//undefined to number
let undefinedNum = undefined;
console.log(undefinedNum); // undefined
console.log(typeof undefinedNum); // undefined
let num = Number(undefinedNum);
console.log(num); // NaN
console.log(typeof num); // number
console.log("\n");

// String to Number 
let text = "true";
console.log(typeof text); //string
let textInNumber = Number(text);
console.log(textInNumber); // NaN
console.log(typeof textInNumber); // number
console.log("\n");
// We can conclude that the string(consisting of characters) to number conversion will always have the value of NaN.

//Number to String
let someNum = 125;
console.log(typeof someNum); // number
let StringNumber = String(someNum);
console.log(StringNumber) // 125
console.log(typeof StringNumber); //string
console.log("\n");

// number to boolean
let isLoggedIn = 1;
console.log(typeof isLoggedIn); // Number
let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn); // true
console.log(typeof boolIsLoggedIn); // boolean
console.log("\n");
//if the number is 0, the value in boolean would be false, and with any other number, it will be true

// string to boolean
let someText = "";
console.log(someText); //
console.log(typeof Text); // undefined
let someBool = Boolean(someText);
console.log(someBool); // false
console.log(typeof someBool); // boolean
//Converting an empty string to boolean will output false and converting any other string will output true.



