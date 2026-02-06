(function (dbwebb) {
"use strict";

let ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 2 - functions
 *
 * Practice to write functions.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Basic functions
 *
 * Practice on basic functions.
 *
 */



/**
 * Exercise 1.1 (1 points)
 */


let total = 0;

function sumRangeNumbers(lowest, highest) {
    for(let i = lowest; i <= highest; i++){
        total += i;
    }
        return total;
}

let answer = sumRangeNumbers(22,91);

console.log(answer);


ANSWER = answer;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 */

let color;

function fruitColor(fruit){
    if(fruit === "banana"){
        color = "yellow";
    } else if (fruit === "apple" || fruit === "kiwi"){
        color = "green";
    }else if (fruit === "plum"){
        color = "red";
    }
    
    return color;
}
let answer1 = fruitColor("plum");

console.log(answer1);

ANSWER = answer1;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 */


function printRange(rangeStart, rangeStop){
    let sum = "";
    for(let i = rangeStart; i <= rangeStop; i++){
        if(i === rangeStart){
            sum += i;
        }else{
            sum += "," + i;
        }
    }
    return sum;
}
let answer2 = printRange(25,46);
console.log(answer2)

ANSWER = answer2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 */


function printRangeReversed(rangeStart, rangeStop){
    let num = "";
    for(let i = rangeStop; i >= rangeStart; i--){       //Starta på i=stop. i--  Minus 1 varv, backar ett varv per loop
        if(i === rangeStop){                            
            num += i;
        }else{
            num += "," + i;
        }
    }
    return num;
}
let answer3 = printRangeReversed(25,46);

console.log(answer3);

ANSWER = answer3;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 */


function printAnyRange(start, stop){
    if(start < stop){
        return printRange(start, stop);
    }else {
      return printRangeReversed(start, stop);
    }
}

let answer4 = printAnyRange(25,46); 
let answer5 = printAnyRange(46,25);

console.log(answer4);
console.log(answer5);

ANSWER = answer4;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6 (1 points)
 */

function stringRepeat(text, amount){
    let result = "";
    for(let i = 0; i < amount; i++){
        result += text;
    }
        return result;
}
let answer6 = stringRepeat("grey", 12);

console.log(stringRepeat("grey", 12));

ANSWER = answer6;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/**
 * Exercise 1.7 (1 points)
 */

function inRange(rangeStart, rangeStop, value){
    if(value > rangeStart && value < rangeStop){
        return true;
    } else{
        return false;
    }
}
let answer7 = inRange(131, 547, 434);

console.log(inRange(131, 547, 434));

ANSWER = answer7;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8 (1 points)
 */

function inRange(rangeStart, rangeStop, value){
    if(value > rangeStart && value < rangeStop){
        return true;
    } else{
        return false;
    }
}
let answer8 = inRange(131, 547, 636);

console.log(inRange(131, 547, 636));

ANSWER = answer8;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/**
 * Exercise 1.9 (1 points)
 */

function degreesToRadians(degreeValue){
    let radians = degreeValue * Math.PI / 180;
    let rounded = Number(radians.toFixed(4));
        return rounded;
}
let answer9 = degreesToRadians(32);

console.log(answer9);


ANSWER = answer9;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.9", ANSWER, false);

/**
 * Exercise 1.10 (1 points)
 */

function fizzBuzz(start1, stop1){ 
    let result = "";
    for(i = start1; i <= stop1; i++){
    
    let text = "";
    if(i % 3 === 0 && i % 5 === 0){
        text = "FizzBuzz";
    }else if (i % 3 === 0) {
        text = "Fizz";
    }else if (i % 5 === 0){
        text = "Buzz";
    }else {
        text = i;
    }   if (i === start) {
            result += text;
        } else {
            result += "," + text;
        }

    return result;
}      

console.log(FizzBuzz(1, 30));
let answer11 = fizzBuzz(1, 30);

ANSWER = answer11;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.10", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Extra assignments
 *
 * These questions are worth 3 points each. Solve them for extra points. In
 * this section, you could re-use your code from lab 1 in exercise 2.1 and
 * 2.2.
 *
 */



/**
 * Exercise 2.1 (3 points)
 */



ANSWER = "Replace this text with the variable holding the answer.";

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (3 points)
 */



ANSWER = "Replace this text with the variable holding the answer.";

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (3 points)
 */



ANSWER = "Replace this text with the variable holding the answer.";

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
