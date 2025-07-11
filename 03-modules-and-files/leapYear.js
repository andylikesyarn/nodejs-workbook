/*
-----------------------------------------------------
-----------------------------------------------------
 _           _                   _   _                 
(_)_ __  ___| |_ _ __ _   _  ___| |_(_) ___  _ __  ___ 
| | '_ \/ __| __| '__| | | |/ __| __| |/ _ \| '_ \/ __|
| | | | \__ \ |_| |  | |_| | (__| |_| | (_) | | | \__ \
|_|_| |_|___/\__|_|   \__,_|\___|\__|_|\___/|_| |_|___/

-----------------------------------------------------
-----------------------------------------------------*/

/* 
YOUR TASK: 
Create a program that checks to see if the current year is a leap year.
Use the Moment module: https://www.npmjs.com/package/moment and read its documentation to find out how to determine whether a year is a leap year.

REQUIREMENTS:
- Your program should accept 1 user input: a year (such as "January")
- Your program should output a console.log() message that says whether the inputted year is a leap year, such as...
    - "2024 is a leap year!"
    - "1979 is not a leap year!"
*/

////////////////
//imports
////////////////
import moment from "moment";


////////////////
//declaring variables
////////////////
//year = third arg entered by user
let year = process.argv[2];

//here, i set the date == to the first day of the given year
    //honestly i could've set it equal to anything and it would work the same, arbitrary choice
let date = `${year}-01-01`;
//statement to print if leap yr
let yes = "is a leap year!";

//statement to print if not leap yr. 
let no = "is not a leap year :(";


////////////////
//statement to generate output
////////////////
//if/else that determines which thing prints when the user runs
if (isNaN(year) || year < 0) {
  console.log("please enter a valid year")
}
else if (moment(date).isLeapYear()) {
  console.log(year + " " + yes);
} 
else {
  console.log(year + " " + no);
}


////////////////
//commands i ran in the terminal
////////////////

// node leapYear.js
// this correctly returned a prompt to enter a valid year in order to determine whether it's a leap year.

//// node leapYear.js -200
// this correctly returned a prompt to enter a valid year in order to determine whether it's a leap year.

// node leapYear.js 2014
//correctly returned the "no" var string

// node leapYear.js 2016
//correctly returned the "yes" var string