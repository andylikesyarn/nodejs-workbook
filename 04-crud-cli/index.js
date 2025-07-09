// Let's make a CRUD (Create, Read, Update, Delete) app that runs on the CLI (Command Line Interface)!
// We'll start with the "Read" part — reading the books data from the data.json file.

import { readFile } from "fs";

// Get all books and print them to the console
function getAllBooks() {
  //Read the file,
  readFile("./data.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    // parse the JSON,
    const books = JSON.parse(data);
    // log each book's title and text
    console.log(books);
  });
}

// Get one book by index and print it to the console
function getOneBook(index) {
  //Read the file,
  readFile("./data.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    // parse the JSON,
    const books = JSON.parse(data);
    // log each book's title and text
    console.log(books[index]);
  });
}


// Read user input from the command line
const action = process.argv[2]; // e.g. "getAllBooks"
const bookIndex = process.argv[3]; // e.g. "3"



// Run the correct function based on the user's input
if (action === "getAllBooks") {
  getAllBooks();
} else if (action === "getOneBook") {
  getOneBook(bookIndex);
} else {
  console.log("Invalid action. Try one of these:");
  console.log("  node index.js getAllBooks");
  console.log("  node index.js getOneBook <index>");
}