/* 
YOUR TASK: 
Create a program that determines the birthstone for a month inputted by the user. 
Your app should read birthstone data from the data.json file.

REQUIREMENTS:
- Your program should accept 1 user input: a year (such as "January")
- Your program should output a console.log() message that says the month's birthstone, such as...
    - "The birthstone for January is Garnet."
    - "The birthstone for July is Ruby." 
*/

const fs = require("fs");
let month = process.argv[2];
let birthstone;
const data = fs.readFileSync("./data.json", "utf-8");
const birthstones = JSON.parse(data);
function getBirthstone() {
  birthstone = birthstones[month];
}

getBirthstone();

console.log(`the birthstone for ${month} is ${birthstone}`);
