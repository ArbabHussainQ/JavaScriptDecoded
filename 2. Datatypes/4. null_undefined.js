//undefined is a value which is assigned to those variables which we don't define ourselves. It can simply be called the default value of a variable.

let x;
console.log(x); // undefined
// type of undefined is undefined

//null is an assignment value that represents "no value" or "nothing". we assign null when we want to intentionally indicate that a variable should have no value.

let y = null;
console.log(y); // Output: null
//type of null is object. (A historical bug in javascript)

//Comparison
console.log(undefined == null);  // true (loose equality)

// This evaluates to true because of type coercion in loose equality (==). JavaScript tries to convert both values to a common type. In this case, both null and undefined are treated as "empty" values, so they are considered equal in loose comparison.

console.log(undefined === null); // false (strict equality)

//strict equality checks both the value and the type of the variables, and undefined and null have different types.
