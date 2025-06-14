/*
Scoping in JavaScript refers to the accessibility of variables and functions in different parts of the code.
JavaScript has two types of scope: global scope and local scope.
   
Global Scope: Variables declared outside any function are in the global scope and can be accessed from anywhere in the code.
Local Scope: Variables declared within a function are in the local scope and can only be accessed within that function.

JavaScript also supports block scope, which is introduced with the `let` and 
`const` keywords. Variables declared with `let` or `const` inside a block 
(e.g., within curly braces `{}`) are only accessible within that block. However variables declared by var are not block scoped. They can be accessed outside the block as well, causing common pitfalls.
 */

let globalVar = "I am a global variable";
   function exampleFunction() {
       let localVar = "I am a local variable";
       console.log(globalVar); // Accessible
       console.log(localVar);  // Accessible
   }
console.log(globalVar); // Accessible
console.log(localVar);  // Uncaught ReferenceError: localVar is not defined
   if (true) {
       let blockVar = "I am a block-scoped variable";
       console.log(blockVar); // Accessible
   }
   console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

// Understanding scoping is crucial for avoiding common pitfalls such as variable shadowing and unintended global variables.

/* More About Scopes
Now above we have looked first level scope, there can be functions inside functions and multiple scope levels. Whenever we create if, loop and such { }, that becomes a block scope which is other than the global scope. Let's look at nested scopes
*/
function one(){
	const username = "Arbab";
	
	function two(){
		const website = "youtube";
		console.log(username); // Can we access the username? Yes.
	}  
	console.log(website); // Can we access website? NO, The variables ended in the inner scope
	// Executing Function Two
	two(); 
}
//Executing Function One
one(); // Execution starts from here. There is a completely different scope for functions(The Call Stack). Child functions can access parent function's variables but not the other way.

//The same is the case with if-else as well.
if(true) {
	const username = "Arbab";
	if(username == "Arbab") {
		const website = "Youtube";
		console.log(username + website);
	}
	console.log(website); // Error, Not defined
}
console.log(username); // Error, Not Defined


// INTERESTING CONCEPT:
addone(5); // Returned, not print
console.log(addone(5)); // Accessible, Prints 6
function addone(num) {
  return num + 1;
}

addTwo(5); // Not accessible, as the variable addTwo hasn't been defined yet. This is what people call Hoisting. Hoisting allows javascript to call functions before they are declared. However, functions defined using an expression are not hoisted
const addTwo = function (num) {
  // Variables can hold anything in javascript, this way of creating functions is called expression.
  return num + 2;
};
