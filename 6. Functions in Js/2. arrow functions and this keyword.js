/*
Arrow Function
This is one of the main features which came in ES6 which was released in 2015.
Note: using `this` in arrow functions returns empty object (lexial scope)
*/

//Method 1: Using Function Keyword
function add(a, b) {
  return a + b;
}
//Method 2: Using Function Expression
const add = function (a, b) {
  return a + b;
};
//Method 3: Using Arrow Function
const add = (a, b) => {
  return a + b;
};
// In Arrow Function, We can skip parenthesis for creating a one line function
// return is obvious in this case so we don't have to write it explicitly.
const add = (a, b) => a + b;
//Same can be written as
const add = (a, b) => a + b; //
// This only works with (), we have to write the return keyword explicitly if we use curly braces {}. It works alot well while returning objects as we create objects using {}
const test = () => ({ username: "Arbab" });

// this Keyword
// This keyword is used to give the reference to the current object's property (current context). To access the properties in an object, we use this keyword to refer to the same object.

const user = {
  username: "Arbab",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to Website`);
  },
};
user.welcomeMessage; // Doesn't show anything
// since welcome message is a function, brackets are required.
user.welcomeMessage(); // Arbab, Welcome to Website
user.username = "John";
user.welcomeMessage(); // John, Welcome to Website

/*
What if we directly print THIS keyword?
1. In an Object:
Shows the entire object's context
2. In Node Environment:
`console.log(this)` -> Shows Empty Parenthesis{ } in Node Environment because the
3. In Browser Console:
`console.log(this)` -> Shows Window Object because the current context is window object in browser.
4. Inside a Function:
It shows a lot of things
*/
function chai() {
  let username = "Agha";
  console.log(this); // Shows a lot
  console.log(this.username); // undefined, it works in objects only, (not in functions).
}
chai();
