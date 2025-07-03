/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this folder.

Run this file with the node command:
node dogAgeCalculator.js

Year 1 of a dog's life is 15 dog years
- Year 2 is the equivalent of another 9 years.
- Every year after that is the equivalent of another 5 years.
*/
let dogName = process.argv[2];

let dogAge = Number(process.argv[3]);

function calculateDogAge(dogAge) {
  if (dogAge < 0 || isNaN(dogAge)) {
    return `Please enter a positive number.`;
  } else if (dogAge <= 1) {
    return dogAge * 15;
  } else if (dogAge <= 2) {
    return 15 + (dogAge - 1) * 9;
  } else return 15 + 9 + (dogAge - 2) * 5;
}

let ageInDogYears = calculateDogAge(dogAge);

if (isNaN(ageInDogYears)) {
  console.log(ageInDogYears);
} else {
  console.log(
    `Your dog ${dogName} is ${dogAge} in human years and ${ageInDogYears} in dog years`
  );
}
