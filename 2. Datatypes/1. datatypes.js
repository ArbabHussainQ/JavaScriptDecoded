
// var a = 12
// var b = 16
// console.log(a + b)

// Primitive DataTypes 
var a = 12;
var b = a;
b += 2;
console.log(a); // 12
console.log(b); // 14

// Non Primitive DataTypes
var arr = [1, 2, 3, 4, 5];
var brr = arr;

console.log(arr);
console.log(brr);
brr.pop();
console.log(brr);
console.log(brr);
console.log("\n\n\n")

//To copy reference values instead of just reference, we use something called spread operator ...
var arrayA = [1, 2, 3, 4, 5];
var arrayB = [...arrayA];
console.log(arrayA);
console.log(arrayB);
arrayB.pop();
console.log(arrayA);
console.log(arrayB);

let num1, num2, num3;
num1 = num2 = num3 = 3 + 3;
console.table(x = [num1, num2, num3]);
console.log(x);

/*DataTypes Summary:
number => 33
bigint => 123452534859312..
string => "Hello World"
boolean => true/false
null => standalone value
undefined
symbol => unique
object => [1,2,3,4,5], null
*/
