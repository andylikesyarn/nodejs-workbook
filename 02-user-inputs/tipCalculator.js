// Let's make a tip calculator with Node.js!

// Run this file with the node command:
// node tipCalculator.js
//const myName = process.argv[2]

let bill = Number(process.argv[2]);
let tipPercentage = parseFloat(process.argv[3]);
let numGuests = parseFloat(process.argv[4]);

let tipAmount = bill * tipPercentage;
console.log(`tip amount = ${tipAmount}`);

let totalBill = bill + tipAmount;
console.log(`total bill amount = ${totalBill}`);

amountOwedPerGuest = totalBill / numGuests;
console.log(`amount owed per guest= ${amountOwedPerGuest}`);
