// "use strict";

// THis is a comment in JavaScript

/*
This is a multi-line comment
It can span multiple lines
*/

// JS Data Types
// Primitive values: String, Number, Boolean, Null, Undefined
console.log("################ JS Data Types ################");
console.log(typeof(42))         // number
console.log(typeof(4.2))        // number
console.log(typeof(0))          // number

console.log(typeof("Hello"))    // string
console.log(typeof('Hello'))    // string
console.log(typeof('42'))       // string
console.log(typeof(''))         // string

console.log(typeof(true))       // boolean
console.log(typeof(false))      // boolean

console.log(typeof(null))       // object (this is a known quirk in JavaScript)
console.log(typeof(undefined))  // undefined

// Non-primitive values: Objects, Arrays, Functions
console.log("################ Non-Primitive Values ################");
console.log(typeof([1, 2, 3, 'string', true, null, [1,2,3]]));  // Array object
console.log(typeof({name: 'Alice', age: 30, isStudent: false})); // Object



/**
 * What is a variable?
 * It's a container that holds a value
 * 
 * Can be declared with the keywords 'var', 'let' and 'const'
 * The difference between the variable declarations will be explained further later in the course
*/
console.log("################ Variables ################");

// 'var' allows re-declaration and re-assignment
var number1 = 1;
var number1 = 2;    
number1 = 1;
console.log(number1);


// 'let' allows re-assignment does NOT allow re-declaration 
let number2 = 3;
number2 = 2;
// let number2 = 4; 
console.log(number2);


// 'const' does NOT allow re-declaration  NOR re-assignment
const number3 = 5;
// number3 = 5;


console.log("################ Logical operators ################");
let addition = number1 + number2;       // 3
let subtraction = number1 - number2;    // -1
let multiplication = number1 * number2; // 2
let division = number1 / number2;       // 0.5

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);

// '=' assignment operator
// '==' comparison operator (loose equality, checks value only)
// '===' stricter comparison operator (strict equality, checks value and type)


// += add on current value
// -= subtract on current value
// /= divide on current value
// *= multiply on current value
console.log("############ Logical operators with assignment '=' ##########");

let x = 5;
console.log(x); // 5
x += 6          // x = 5 + 6
console.log(x); // 11
x -= 1          // x = 11 - 1
console.log(x); // 10
x *= 2          // x = 10 * 2
console.log(x); // 20
x /= 10         // x = 20 / 10
console.log(x); // 2



console.log("############ Concatenate strings with '+' ##########");
let string = "Hello " + "World " + "Wide " + "Web";
console.log(string); // Hello World!


console.log("############ Concatenate strings with '+=' ##########");
console.log(string);       // Hello World Wide Web
string = "Hello";          // Re-assign to "Hello"
console.log(string);       // Hello
string += " World";
console.log(string);       // Hello World
string += " Wide";
console.log(string);       // Hello World Wide
string += " Web";
console.log(string);       // Hello World Wide Web


console.log("############ Concatenate with string literals ##########");
let word1 = "Hello";
let word2 = "World";
let word3 = "Wide";
let word4 = "Web";


let sentence = word1 + " " + word2 + " " + word3 + " " + word4;
console.log(sentence);

let sentenceLiteral = `${word1} ${word2} ${word3} ${word4}`
console.log(sentenceLiteral);

console.log("########## Concatenate strings and numbers with '+' ###########");
console.log(3 + 2);             // 5     
console.log('3' + '2');         // 32     
console.log('3' + 2);           // 32
console.log(5 + 1 + '1' + 1 + 1) // 611



console.log("######## alert(), prompt(), and if-statement");


// Built-in JS functions
// prompt() is a popup that asks the end-user for data/information
// alert() is a popup that displays information for the end-user


let username = prompt("Enter your name: ");
console.log(username)


if (username == 'John') {
    alert(`Welcome back, ${username}`);
}