// 🧠 Your Task:
// 1. Write JavaScript code below that reverses the `inputString` using a for loop.
// 2. Store the reversed string in the variable called `reversedString`.
// 3. Use `console.log()` to print the value of `reversedString`.
// 4. Run this file in your terminal using: `node reverseString.js`

// ✅ If your code works, you should see the reversed string printed in the terminal.
// For example, reversing "Javascript Rocks!" should print:
// "!skcoR tpircSavaJ"

// -------------------------------------
let inputString = "";
if (typeof process.argv[2] === "undefined") {
   inputString = "Javascript Rocks!";
} else {
   inputString = process.argv[2];
}

let reversedString = "";

// Your code here

function reverseString(inputString) {
  var splitString = inputString.split("");
  //split string between each letter

  var reversedArray = splitString.reverse();
  //reverse string

  reversedString = reversedArray.join("");
  //re-join reversed array to string
}

reverseString(inputString);

console.log(reversedString);
