//Way to Declare a Symbol
const mySym = Symbol();

// objects are a core data structure used to store collections of data or more complex entities. They are key-value pairs, where each key is a string (or symbol) and each value can be of any data type (including other objects or functions).
//Creating an Object
const JsUser = {
    name: 'Arbab',
    "full name": 'Arbab Hussain',
    age: 19,
    email: 'itisitachi@gmail.com',
    location: 'Pakistan',
    isLoggedIn: false,
    workingDays: ['Mon', 'Tues', 'Wed'],
    [mySym]: 'Using Symbol Object As Key' // Symbols are always used in squared notation
};

//Accessing Object's Properties
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof mySym);
console.log(typeof JsUser[mySym]);
console.log(JsUser[mySym]);

//Printing a Whole Object
console.log(JsUser);

//Adding properties to an Object
JsUser.surname = "Qureshi";
console.log(JsUser);


// Creating an Object with a Constructor i.e. Singleton Object
let twitterUser = new Object();
let twitterUser2 = {

};
console.log(twitterUser);
console.log(twitterUser2);
//There is no any difference between the internal working of both methods. Both creates an empty object and are treated in the same way. Just keep in mind that objects that are created via constructor are called as Singleton Objects and those created via literals {} are known as non singleton objects.



// Using Functions as an Object Property

JsUser.greeting = function () {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function () {
    console.log(`Helo ${JsUser["full name"]}`);    
}
console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//This also returns undefined which will be learnt later on.

//Using Objects as an Object Property. It can be nested as well. We can create objects inside objects and so on.
const regularUser = {
    email: "someone@gmail.com",
    fullName: {
        userfullName: {
            firstName: "Agha",
            lastName: "Arbab"
        }
    }
};
console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userfullName);
console.log(regularUser.fullName.userfullName.firstName);

// Merging objects using assign method and spread operator.

const obj1 = {
    a: '1',
    b: '2'
};
const obj2 = {
    c: '3',
    d: '4'
};
const obj3 = {
    e: '5',
    f: '6'
};

// If we try the traditional way, it will create object of objects.
const obj4 = { obj1, obj2, obj3 };
console.log(obj4);
// So instead, we can use the assign method. Object.assign(target, source). The source object(s) is merged with the target object. For better coding practices, we keep the target as an empty object
const obj5 = Object.assign({}, obj1, obj2, obj3);
console.log(obj5); // { a: '1', b: '2', c: '3', d: '4', e: '5', f: '6' }

//Or we can just use the spread operator just like we merge arrays.

const obj6 = { ...obj1, ...obj2, ...obj3 };
console.log(obj6); // { a: '1', b: '2', c: '3', d: '4', e: '5', f: '6' }

// Some Important Methods.

// keys method -> Extracts the keys from an object and creates an array of those keys
console.log(Object.keys(JsUser));

// values method -> Extracts the values from an object and creates an array of those values
console.log(Object.values(JsUser));

// entries method -> Extracts both but creates an array of arrays. The internal arrays consist of individual key-value pairs
console.log(Object.entries(JsUser));

// hasOwnProperty method -> Check if an object has a specific property and returns a boolean
console.log(JsUser.hasOwnProperty('isLoggedIn'));

// Object Destructuring: It is a syntactical way which is actually recommended to access the values of objects.

const course = {
courseName: "JavaScript Mastery",
courseInstructor: "Arbab Hussain",
coursePrice: 2000
};

//One way to access is:
console.log(course.courseInstructor);
// But this way is a bit verbose so we can actually destructure it.

const {courseInstructor: instructor} = course;
// This simply means that extract the value of courseInstructor from the course object and change it's name to instructor, so we can just type instructor to access the value now.
console.log(instructor);





