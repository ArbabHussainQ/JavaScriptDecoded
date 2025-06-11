// Strings are sequences of characters used to represent and manipulate text. They are one of the most commonly used data types, and JavaScript provides a wide range of built-in methods to work with strings.

//STRING IMMUTABILITY
//Strings in JavaScript are immutable. It means their values can't be changed once created. Any further modification will result in the creation of new string.


//String Declaration.
let str1 = "I am a String";
let str2 = new String("I am another String");

// we can use "" '' or `` for declaring strings.

/* template literals (backticks``) support  string interpolation 
using ${varName} and also provide support for multi line strings */

let str3 = `I am 
a multi line
String`;
console.log(str3);

const name = "Arbab";
let age = 20;

//outdated way to print
console.log("My name is " + name + " and I am " + age + " years old" );

//Instead of this, we can use string interpolation using template literals.
console.log(`My name is ${name} and I am ${age} years old.`);
//This makes it much more readable.

//String length
console.log(name.length); // 5

//Accessing character from index and index from character. Indexing starts from 0
console.log(name.charAt(0)); //A
console.log(name.indexOf("b")); // the name Arbab had two b but it will only return the index of first one (2)

//SOME STRING METHODS

//changing case
let str4 = "Hello World!";
console.log(str4.toUpperCase()); // Output: HELLO WORLD!
console.log(str4.toLowerCase()); // Output: hello world!

//includes() checks if a substring exists in a string.
let str5 = "JavaScript is awesome!";
console.log(str5.includes("is"));    // Output: true
console.log(str5.startsWith("Java")); // Output: true
console.log(str5.endsWith("!"));      // Output: true

// slice(), substring(), and substr()
// These methods extract parts of a string.

/* slice(start, end) extracts from start to end (excluding end).
substring(start, end) is similar to slice(), but it doesn’t accept negative indexes.
substr(start, length) extracts a substring based on length.
*/
let str6 = "JavaScript";
console.log(str6.slice(0, 4));  // Output: Java
console.log(str6.substring(0, 4));  // Output: Java
console.log(str6.substr(0, 4));  // Output: Java

/*
replace() and replaceAll()
These methods replace a substring within a string.

replace() replaces the first occurrence of a substring.
replaceAll() replaces all occurrences.
*/
let str7 = "I love JavaScript. JavaScript is fun!";
console.log(str7.replace("JavaScript", "Java"));  // Output: I love Java. JavaScript is fun!
console.log(str7.replaceAll("JavaScript", "Java")); // Output: I love Java. Java is fun!

//trim() -> Trims the blank spaces in the start and end of the string

let str8 = "        COMPUTER        ";
console.log(str8) //         COMPUTER        
console.log(str8.trim()); // COMPUTER

//SPLIT METHOD -> Splits the string on a given condition. The new string will be of type array of those seperated words or characters.

let str9 = "I-AM-LEARNING-JAVASCRIPT";
console.log(str9); // I-AM-LEARNING-JAVASCRIPT
console.log(str9.split("-")); // [ 'I', 'AM', 'LEARNING', 'JAVASCRIPT' ]

// CHARACTER CODES (GETTING ASCII CODE)
// We can get the ASCII code of a String's character using .charCodeAt(index), or get the character from a code by String.fromCharCode(number);

let str10 = `JavaScript`;
console.log(str10.charCodeAt(1)); // 97
console.log(String.fromCharCode(65)); // A


