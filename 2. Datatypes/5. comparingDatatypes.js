
// >, < , >=, <= , ==, !=, === are used to compare two variables or values and always return a boolean value (true or false).
console.log(2>1); // true
console.log("3" == 3); // true


console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// The reason is that an equality check (==) and comparisons (>, <, >=, <=) work differently.
// Comparisons convert null to a number(type coersion), treating it as 0, that's why (null>=0) is the same as (0>=0), hence it prints true while (null>0) is same as (0>0) prints false.

// == VS ===
// == is also known as loose equality in which JavaScript tries to convert both values to a common type and then compare them.
// === is known as strict equality and checks both the datatype and value(no type conversion occurs).