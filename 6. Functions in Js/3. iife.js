/* Immediately Invoked Function Expression (IIFE)

IIFE is used when we want to execute a function immediately, for example, there is a function for connecting the database, and we want that whenever the application starts, it should run immediately. Also if we want that the global variables shouldn't effect a function, we can create it's separate scope immediately so that the global variables won't effect it. (Global Scope Pollution).

What a simple function looks like:
function database() {
  console.log("DATABASE CONNECTED");
}
database(); 

To immediately invoke it, we can type it like:
(function definition)(calls the function)
*/

// Named IIFE
(function database() {
  console.log("DATABASE CONNECTED");
})();
// Semicolon is mandatory in this case, as we have to end the line

// We can also make IIFE using an Arrow Function
// UnNamed IIFE
(() => {
  console.log("Database Connected");
})();

//Giving Parameters and Arguments
((name) => {
  console.log(`${name} Database Connected`);
})("SQL");
