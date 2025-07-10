/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this folder.

Run this file with the node command:
node dogAgeCalculator.js

Year 1 of a dog's life is 15 dog years
- Year 2 is the equivalent of another 9 years.
- Every year after that is the equivalent of another 5 years.
*/

//dog name param
let dogName = process.argv[2];

//dog age param
let dogAge = Number(process.argv[3]);

//function
function calculateDogAge(dogAge) {
   //error handling
  if (dogAge < 0 || isNaN(dogAge)) {
    return `Please enter a positive number.`;

  //dog under 1 yo (this function handles non-integers)
  } else if (dogAge <= 1) {
    return dogAge * 15;

  
  //dog 1-2 yo (this function handles non-integers)
  } else if (dogAge <= 2) {
    return 15 + (dogAge - 1) * 9;

    //dog age >2 yo
  } else return 15 + 9 + (dogAge - 2) * 5;
}

//set var == to result of function
let ageInDogYears = calculateDogAge(dogAge);

//returns 'plz insert a positive #' if dog age NaN
if (isNaN(ageInDogYears)) {
  console.log(ageInDogYears);
  
  //if dog has valid age, returns specified format for age statement
} else {
  console.log(
    `Your dog ${dogName} is ${dogAge} in human years and ${ageInDogYears} in dog years`
  );
}
