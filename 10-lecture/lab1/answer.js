(function (dbwebb) {
"use strict";

var ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 1 - statements
 *
 * Statements and expressions in JavaScript.
 *
 * Use MDN as your reference and base to solving the exercises.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . If, else if and else
 *
 */



/**
 * Exercise 1.1 (1 points)
 */


let card1 = 4;
let card2 = 2;
let card3 = 7;
let card4 = 1;
let card5 = 11;

let result = card1 + card2 + card3 + card4 + card5;
ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, true);

/**
 * Exercise 1.2 (1 points)
 */

// let result = card1 + card2 + card3 + card4 + card5;              // Redan deklarerad
let message = "";

if( result > 21){
    message = 'busted';
}else {
    message = 'safe'
}

console.log(message);

ANSWER = message;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 */
let sum = card1 + card2 + card3;
let text = "";

if(sum < 21){
    text = 'safe'
}else if(sum > 21){
    text = 'busted'
}else if(sum === 21){
    text = 'black jack'
}

console.log(text);

ANSWER = text;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (2 points)
 */

let dealer1 = 1
let dealer2 = 6;
let dealer3 = 7;

let text1 = "";
let sum1 = dealer1 + dealer2 + dealer3;

if(sum1 < 17){
    text1 = 'pick';
} else if(sum1 === 21){
    text1 = 'black jack'
} else if(sum1 >= 17 && sum < 21){
    text1 = 'stop';
} else{                                     // else får ej ha villkor
    text1 = 'busted'
}

console.log(sum1);
ANSWER = text1;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Switch, case
 *
 */




/**
 * Exercise 2.1 (1 points)
*/

let myFruit = "plum";
let result2;

switch(myFruit){
    case "banana":
        result2 = "The banana is yellow."
        break;
    case "apple":
        result2 = "The apple is green."
        break;
    case "kiwi":
        result2 = "The kiwi is green."
        break;
    case "plum":
        result2 = "The plum is purple."
        break;            
}
console.log(result2);

ANSWER = result2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points).
 */

switch(myFruit){
    default:
        result2 = "That is an unknown fruit."
}

ANSWER = result2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . For loops
 *
 */



/**
 * Exercise 3.1 (1 points)
 */

let value = 481;

for(let i = 0; i < 10; i++){      // 10 ggr körs koden
    value += 6;                    // ökar med 6 varje gång
}
console.log(value);

ANSWER = value;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2 (1 points)
 */

let value1 = 551;

for(let i = 0; i < 10; i++){      // 10 ggr körs koden
    value1 -= 8;                    // ökar med 6 varje gång
}
console.log(value1);

ANSWER = value1;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3 (3 points)
 */
let values = "";

for(let i = 22; i <= 45; i++){
    if (i % 2 === 0){               //"om talet går att dela med 2 utan rest = jämt"
        values += "," + i;
    }
}
values = values.slice(1)        // Tar bort/ slicear bort första kommatecknet
console.log(values);

ANSWER = values;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 4 . While loops
 *
 */



/**
 * Exercise 4.1 (1 points)
 */

let number = 10;
let steps = 0;

 while(number < 481){

     number += 6;
     steps = steps + 1;
    }

console.log(steps);

ANSWER = steps;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, false);

/**
 * Exercise 4.2 (1 points)
 */

let number1 = 551;
let step = 0;

 while(number1 > 0){
     number1 -= 8;
     step = step + 1;
    }

console.log(step);

ANSWER = step;


// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, false);

/**
 * Exercise 4.3 (3 points)
 */

let resultat = "";
let i = 28;

while(i <= 63){
    if( i % 5 === 0|| i % 7 === 0){
        if( resultat === ""){
            resultat += i;
        }else {
            resultat += "," + i;
        }
    }
    i++;
}
console.log(resultat);

ANSWER = resultat;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
