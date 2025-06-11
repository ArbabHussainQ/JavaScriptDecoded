//METHODS OF ARRAYS:
const arr1 = [1,2,3,4,5];
const arr2 = [`JavaScript`, `Is`, `Fun`];
//Push -> Pushes the elements in a predefined array at the last.
arr2.push(`And`,`I`,`Love`,`it`);
console.log(arr2); 

//unshift -> Pushes the element at the first index, but it shifts all elements one
//by one to the right, which might take a lot of time if the 
//length of the array is too big, so we should use it only when the array is small
arr2.unshift(`Hello World,`);
console.log(arr2); // ['Hello World,', 'JavaScript', 'Is', 'Fun', 'And', 'I', 'Love', 'It']

//Pop -> 
console.log(arr1);
arr1.pop();
console.log(arr1);

//shift -> Deletes the first element from the array and shifts all elements to the left.
arr2.shift();
console.log(arr2);

//includes -> Searches the given element, if it's found, it returns true and false if it's not present in the array.

console.log(arr1.includes(3)); // true
console.log(arr1.includes(9)); // false

//indexOf -> Used to find the value's index in the array
console.log(arr1.indexOf(3)); // 2
// If the given value is not present in the array, it gives -1
console.log(arr1.indexOf(9));

//join -> Converts an array to the string type, We can also give any other seperator if we want, By default the seperator is ','.
let newArr = arr1.join("-");
console.log(arr1); // Old Array 
console.log(newArr); // Converted to the type string


//SLICE vs SPLICE

//slice -> Slice method returns the copy of a section of an array depending upon the given starting and ending index. Value of the ending index is not included

const myArr = [0, 1, 2, 3, 4, 5];

console.log("Before Slice ", myArr); // [0,1,2,3,4,5]
const myNewArr1 = myArr.slice(1, 3);
console.log(myNewArr1); //[1,2]
console.log("After Slice", myArr); // [0,1,2,3,4,5]
//So, in slice, our original array isn't modified but returns a copy of the selection.


//splice -> Splice method returns a section of an array(Value of the last index is included as well), but it manipulates the original array itself instead of just returning the copy
console.log("Before Splice ", myArr); // [0,1,2,3,4,5]
const myNewArr2 = myArr.splice(1, 3); 
console.log(myNewArr2); //[1,2,3]
console.log("After Splice", myArr); // [0,4,5]


//Joining Multiple Arrays Together.

//We can try pushing one array inside another, but it actually creates an array inside an array instead of combining all the elements.

const marvelHeroes = ["IronMan" , "Spiderman" , "Thor"];
const dcHeroes = ["Batman" , "SuperMan" , "Flash"];
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes); 
//[ 'IronMan', 'Spiderman', 'Thor', [ 'Batman', 'SuperMan', 'Flash' ] ]

//So Instead of actually joining the elements, it makes the whole array an element and then pushes it. So if I want to access SuperMan, I will have to do something like this 
// console.log(marvelHeroes[3][1]); SuperMan


//A good way of combining arrays is by using concat method. It returns a copy and doesn't modify any of the existing arrays.

const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);

//Likewise, we can use the spread  operator ..., it just spreads out the elements of multiple arrays into one array.

const allNewHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allNewHeroes);

//To check, whether something is an array, we can use Array.isArray()

console.log(Array.isArray("Arbab")); //false
console.log(Array.isArray(allNewHeroes)); //true

//We can also convert something to an array using Array.from() and Array.of()
console.log(Array.from("Arbab")); // ['A', 'r', 'b', 'a', 'b']
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]


