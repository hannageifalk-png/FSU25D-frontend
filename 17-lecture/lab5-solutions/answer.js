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

let person = {
    firstName: "Isaac",

    print1: function () {
        return `My name is ${this.firstName}.`
    }
}
 
 
ANSWER = person.print1();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 */


person.lastName = "Newton"
person.nationality = "England"

person.print2 = function () {
    return `My name is ` + this.firstName + ' ' + this.lastName + ' from ' + this.nationality + '.'
}

ANSWER = person.print2();
 
 
// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 */


person.born = new Date("1643-01-04"); // new object from a class
console.log("person.born: ", person.born);
person.print3 = function() {
    return `${this.print2()} I was born ${this.born.getFullYear()}.`;
};
 
ANSWER = person.print3();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 */


// Solution 1
// let person2 = Object.create(person);
// person2.firstName = "Henri"
// person2.lastName = "Becquerel"
// person2.nationality = "France"
// person2.born = new Date("1852-12-15");
 
// ANSWER = person2.print3();


// Solution 2 - uses .assign as init()
let person2 = Object.create(person);
 
Object.assign(person2, {
    firstName: "Henri",
    lastName: "Becquerel",
    nationality: "France",
    born: new Date("1852-12-15")
});
 
ANSWER = person2.print3();
 


// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 */

let person3 = Object.create(person);
 
person3.init = function (firstName, lastName, nationality, born) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.born = born = new Date(born);
}
person3.init("Albert", "Einstein", "Germany", "1879-03-14")

ANSWER = person3.print3();
 

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
