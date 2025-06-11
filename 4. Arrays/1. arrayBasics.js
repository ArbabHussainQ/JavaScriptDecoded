/*--------------------------ARRAYS IN JAVASCRIPT--------------------------
->The array object in javascript enables us to store a collection of multiple 
items under a single variable name and provides methods for performing common operations.

->Arrays in javascript are resizable and can contain the values of different datatypes.
*/


// ->Defining an Array

//Method 1: let arrayName = [values]
let arr1 = [1,2,3,4,5];

//Method 2: let arrayName = new Array(values)
let arr2 = new Array(`JavaScript`, `Is`, `Fun`);

//->Arrays are 0 indexed. First value at index 0, second at index 1 and so on...
//->Array Values are accessed via their indices.
console.log(arr2[1]); // Is

//->There is an array property named length which tells us the number of elements inside an array,
console.log(`Length of Array1 is: ` + arr1.length);
console.log(`Length of Array2 is: ` + arr2.length);
