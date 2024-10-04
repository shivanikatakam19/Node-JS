// Variables in JS

// declaring the variables automatically
num1 = 4;
num2 = 2;
num3 = num1 / num2

console.log('variable declaring automatically' + num3)

// declaring the variables using const keyword 
const const1 = 4;
const const2 = 2;
const const3 = const1 / const2

console.log('variable declaring using const' + const3)

// declaring the variables using let keyword

let a = 4;
let b = 2;
const c = a / b

console.log('variable declaring using let' + c)

// declaring the constiables using var keyword

const var1 = 4;
const var2 = 2;
const var3 = var2 / var1

console.log('variable declaring using var' + var3)

// Datatypes in JS

// Numbers:
let x1 = 34.00; // With decimals
let x2 = 34; // Without decimals

// Strings:
let color = "Yellow";
let lastName = "Johnson"

// Single quotes inside double quotes:
let str1 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let str2 = 'He is called "Johnny"';

//BigInt:
let bigInt = BigInt("123456789012345678901234567890");

// Booleans:
let bool1 = 5;
let bool2 = 5;
let bool3 = 6;
console.log('booleans' + (bool1 == bool2))      // Returns true
console.log('booleans' + (bool1 == bool3));// Returns false

// undefined
let car;    // Value is undefined, type is undefined

// Null
let val1 = null; // now val1 stores null value

// Object:
const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


// Operators in JS:

// Arithmetic Operator

let arth1 = 3;
let arth2 = (100 + 50) * a;

console.log('aritmetic operator' + arth2)

// Assignment Operator

// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;
console.log('assignment operator' + z)

// Comparision Operator

let comp1 = 4;
let comp2 = 5;

// Equality
console.log('Equality' + comp1 == comp2) //returns false
// Inequality
console.log('Inequality' + comp1 != comp2) //returns true
// Strict Equality
console.log("Inequality" + comp1 === "4") //returns false because it also checks the type of variables
// Strict Inequality
console.log("Strict Inequality" + comp1 !== comp2) //returns false
// Greater than
console.log("Greater than" + comp1 < comp2) //returns true
// greater than or equal
console.log("greater than or equal" + comp1 >= comp2) //returns false
// Less than
console.log("less than" + comp1 > comp2) //returns false
// Less than or equal
console.log("less than or equal" + comp1 <= comp2) //returns true

//Logical Operator

let op1 = 20;
let op2 = 33;
let op3 = 10

// logical AND
console.log("logical AND" + (op1 == op2) && (op2 == op3)) // returns false
// logical OR
console.log("logical OR" + (op1 == 20 || op2 == op3)) // returns true
// logical NOT
console.log("logical NOT" + !(op1 == op2)) // returns true

// Special Operators

// Terenary Operator
let result = (10 > 0) ? true : false
console.log("terenary operator" + result) // result will be true

// typeof operator

// Use typeof operator to determine the data type
console.log('typeof operator')
console.log(typeof (10));   // Output: "number"
console.log(typeof "hello");   // Output: "string"
console.log(typeof true);  // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null);   // Output: "object" (typeof null is an oddity,
// it returns "object")
console.log(typeof Symbol("symbol"));   // Output: "symbol"
console.log(typeof 900719925470991n);// Output: "bigint"

// Control Flow 
// Statements

// if statement
let i = 10;
if (i < 15) console.log('i is less than 15')
console.log("I'm not in if")

// if-else statement
if (i < 15) console.log('i is less than 15')
else console.log('i is greater than 15')

// nested if statement
if (i == 10) {  // First if statement
    if (i < 15) {
        console.log("i is smaller than 15");
        // Nested - if statement Will only be executed if statement above it is true
        if (i < 12)
            console.log("i is smaller than 12 too");
        else
            console.log("i is greater than 15");
    }
}

// if else-if ladder
if (i == 10)
    console.log("i is 10");
else if (i == 15)
    console.log("i is 15");
else if (i == 20)
    console.log("i is 20");
else
    console.log("i is not present");

// switch with break statement
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log("switch with break" + dayName); // Output: Wednesday

// switch without break statement
switch (day) {
    case 1:
        dayName = "Monday";
    case 2:
        dayName = "Tuesday";
    case 3:
        dayName = "Wednesday";
    case 4:
        dayName = "Thursday";
    case 5:
        dayName = "Friday";
    case 6:
        dayName = "Saturday";
    case 7:
        dayName = "Sunday";
    default:
        dayName = "Invalid day";
}
console.log("switch without break" + dayName); // Output: Invalid day

// Loops

// for
const cars1 = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars1.length; i++) {
    text += cars1[i] + "<br>";
}
console.log('for loop ' + text)
// output:
// BMW
// Volvo
// Saab
// Ford
// Fiat
// Audi

//while
let i1 = 0;
while (i1 < 3) {
    console.log('while loop' + i1)
    i1++;
}

// do-while
i2 = 0;
do {
    console.log('do-while loop' + i2)
    i2++;
} while (i2 < 10);

// output:
// do-while loop 0
// do-while loop 1
// do-while loop 2
// do-while loop 3
// do-while loop 4
// do-while loop 5
// do-while loop 6
// do-while loop 7
// do-while loop 8
// do-while loop 9

// Control Flow Modifiers

for (let i = 0; i < 3; i++) {
    if (i == 2)
        break;
    console.log('control flow modifier break' + i)
}
//output: 0 1

for (let i = 0; i < 5; i++) {
    if (i == 2)
        continue;
    console.log('control flow modifier continue' + i)
}
//output: 0 1 2 3 4


// Functions in JS

// 1. Function Declaration
function greet() {
    console.log("function declaration" + "Hello, Alice");
}
greet(); // Output: Hello, Alice

// 2. Function Expression
const add = function (a, b) {
    return a + b;
};
console.log("function expression" + add(2, 3)); // Output: 5

// 3. Anonymous Function
setTimeout(function () {
    console.log("This runs after 2 seconds");
}, 2000);

// 4. Arrow Function(ES6)
const multiply = (a, b) => a * b;
console.log("arrow function" + multiply(4, 5)); // Output: 20

// 5. Parameters and Arguments
function subtract(a, b) {
    return a - b; // a and b are parameters
}
console.log("parameters and arguments" + subtract(10, 4)); // 10 and 4 are arguments. Output: 6 

// 6. Return Value
function square(x) {
    return x * x;
}
let res = square(5);
console.log("return value" + res); // Output: 25 // Without return, the function will return undefined.

// 7. Default Parameters (ES6)
function greet(name = "Guest") {
    console.log("default parameters: Hello, " + name);
}
greet(); // Output: Hello, Guest
greet("Alice"); // Output: Hello, Alice

// 8. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("I am an IIFE(Immediately Invoked Function Expression)!");
})(); // The function is defined and immediately executed without needing to call it separately.

// Scope in JS

// 1. Global Scope
let globalVar = "I am global!";

function printGlobal() {
    console.log('Global Scope' + globalVar); // Here globalVar is a global variable which can be accessed from any part of the file
}
printGlobal(); // Output: I am global
console.log(globalVar); // Output: I am global

// 2. Local/ Function Scope
function localScope() {
    let localVar = "I am local!";
    console.log('Local/Function Scope' + localVar); // Accessible inside the function but not outside the function
}

localScope(); // Output: I am local
console.log('Local/Function Scope' + localVar); // Error: localVar is not defined

// 3. Block Scope(ES6)
if (true) {
    let blockVar = "I am block scoped!";
    console.log('Block scope' + blockVar); // Output: I am block scoped. cannot access outside the block
}

console.log("Block Scope" + blockVar); // Error: blockVar is not defined

// 4. Lexical Scope (Static Scope)
// JavaScript uses lexical scoping, meaning that the scope of a variable is determined by its position in the source code.
// Inner functions have access to variables declared in their outer functions, even after the outer function has returned.

function outer() {
    let outerVar = "I'm outside!";

    function inner() {
        console.log(outerVar); // Can access outerVar due to lexical scope
    }

    return inner;
}

const innerFunc = outer();
innerFunc(); // Output: I'm outside!


// Arrays in JS

// Array literal
let fruits = ["apple", "banana", "mango"];

// Array constructor
let numbers = new Array(1, 2, 3, 4);

// Accessing Array Elements
console.log('Array' + fruits[0]); // Output: apple
console.log('Array:' + numbers[2]); // Output: 3

// Modifying Array Elements
fruits[1] = "orange"; // Changes "banana" to "orange"
fruits.push("grape"); // Adds "grape" to the end of the array
console.log('updated array:' + fruits); // Output: ["apple", "orange", "mango", "grape"]

// Common Array Methods
fruits.push("pear"); // Adds "pear"
console.log('added new element in array:' + fruits); // Output: ["apple", "orange", "mango", "grape", "pear"]

fruits.pop(); // Removes "pear"
console.log('removed element in array:' + fruits); // Output: ["apple", "orange", "mango", "grape"]

let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log('array element to uppercase' + upperFruits); // Output: ["APPLE", "ORANGE", "MANGO", "GRAPE"]

// Looping through Arrays

for (let i = 0; i < fruits.length; i++) {
    console.log('for loop' + fruits[i]); // Prints each fruit
}

// Using for...of
for (let fruit of fruits) {
    console.log('for of' + fruit); // Prints each fruit
}

// Using forEach
fruits.forEach(fruit => console.log('for each' + fruit)); // Prints each fruit


// Objects in JS

// Object literal
let person1 = {
    name: "John",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "sports"],
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

// Object constructor
let car1 = new Object();
car1.make = "Toyota";
car1.model = "Corolla";
car1.year = 2020;

// Accessing Object Properties
console.log('object' + person.name); // Output: John (dot notation)
console.log("object" + person["age"]); // Output: 30 (bracket notation)

// Modifying Object Properties
person.age = 31; // Modify the age property
person.city = "New York"; // Add a new property
console.log('modified object' + person);
// Output: {
// name: "John",
// age: 31,
// isEmployed: true,
// hobbies: ["reading", "sports"],
// greet: [Function], city: "New York"
// }

// Methods in Objects:
person.greet();

// Common Object Methods:
console.log('Object.keys' + Object.keys(person)); // Output: ["name", "age", "isEmployed", "hobbies", "greet", "city"]
console.log('Object.values' + Object.values(person)); // Output: ["John", 31, true, Array(2), Function, "New York"]

// Looping through Objects:
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 31
// isEmployed: true
// hobbies: reading,sports
// greet: function () {...}
// city: New York






