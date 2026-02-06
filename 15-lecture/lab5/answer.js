(function (dbwebb) {
"use strict";

var ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 5 - objects
 *
 * Practice basics on objects.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Create object
 *
 * Start by creating an empty object called `person` by using the object
 * literal.
 *
 */



/**
 * Exercise 1.1 (1 points)
 */




ANSWER = 

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 */



ANSWER = 

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 */

const person = {}
   
person.firstName = "Isaac";
person.lastName = "Newton";
person.nationality = "England";
person.born = new Date("1643-01-04");

person.print3 = function (){
    return ("My name is " + 
    this.firstName + 
    " " + 
    this.lastName +
    " " + 
    "from " +
    this.nationality + 
    "." + 
    " I was born " + 
    this.born.getFullYear() +
    ".");
   };

   const result = person.print3();

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 */

const person2 = Object.create(person);

person.firstName = "Henri";
person.lastName = "Becquerel";
person.nationality = "France";
person.born = new Date("1852-12-15");

const result1 = person2.print3();

ANSWER = result1;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 */

person.init = function (firstName, lastName, nationality, born){
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.born = new Date(born);
    return this;
};

const person3 = Object.create(person);
person3.init("Albert", "Einstein", "Germany", "1879-03-14");

const result2 = person3.print3();


ANSWER = result2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
