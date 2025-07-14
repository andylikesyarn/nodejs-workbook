// Write your Recipe CRUD App code here!
/*
               _                           
 _ __ ___  ___(_)_ __   ___                
| '__/ _ \/ __| | '_ \ / _ \               
| | |  __/ (__| | |_) |  __/               
|_|  \___|\___|_| .__/ \___|               
  ___ _ __ _   _|_|_| |.      __ _ _ __  _ __  
 / __| '__| | | |/ _` |      / _` | '_ \| '_ \ 
| (__| |  | |_| | (_| |     | (_| | |_) | |_) |
 \___|_|   \__,_|\__,_|      \__,_| .__/| .__/ 
                                  |_|   |_|    
 */

// ----------------------
// BOILERPLATE CODE TO SET UP THE SERVER
// ----------------------

// importing our Node modules
import express from "express"; // the framework we use to build a web server
import fs from "fs/promises"; // the File System module that lets us read files

// Creating an instance of the express module so that we can use all of its superpowers, including its functions, properties, etc.

const app = express();

// Define which port our server should listen to receive requests
const port = 3000;

// say that we're using JSON data type
// Our server will receive data as JSON, and respond with JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// run the function that turns on the server to listen for requests on the port
app.listen(port, () => {
  console.log(`My server is listening on port ${port}!`);
});

// ----------------------
// Arianna's code
// ----------------------
/*
// --------------------------
// WRITING OUR FIRST GET REQUEST
// --------------------------
// Handle a GET request to the API endpoint "/" which is the default endpoint, kind of like the home page


// Handle a GET request to get the user's name
app.get("/get-user-name/:userName", (req, res) => {
  res.send(`Hello World, ${req.params.userName}!`);
});

// we will call the callback function to handle the incoming GET request

//app.get("/get-user", (req, res) => {
 // const myFormData = {
  //  name: "Andy",
 //   email: "text@gmail.com",
 // };
  // turn our Javascript data into JSON
  //const myFormDataJSON = JSON.stringify(myFormData);
  //   // send the JSON data back in the response
  res.send(myFormDataJSON);
});*/
/*
// -------------------------
// HELPER FUNCTIONS
// -------------------------

// When I declare a variable called books inside this function, it is scoped to that function, meaning I can only access it within that function

  // this syntax uses call back function
  // const booksData = fs.readFile("../data.json", "utf8", (err, data) => {
  //   return data;
  // });
  // return JSON.parse(booksData);

  // this syntax uses async /await — more modern approach
  const data = await fs.readFile("../data.json", "utf8");
  return JSON.parse(data);
}

async function getOneBook(bookIndex) {
  const data = await fs.readFile("../data.json", "utf8");
  const parsedData = JSON.parse(data);
  const parsedBook = parsedData[bookIndex];
  return parsedBook;
}

// -------------------------
// API ENDPOINTS
// -------------------------
// handle GET requests for getting all the books from data.json
app.get("/get-all-books", async (req, res) => {
  const books = await getAllBooks();

  // send the books data as JSON in the response
  res.send(JSON.stringify(books));
});

// getting one book by its index
app.get("/get-one-book/:index", async (req, res) => {
  // we got the user's info
  const bookIndex = req.params.index;

  // we need to get the book from the data.json
  const book = await getOneBook(bookIndex);

  // then send the book back in the response
  res.send(JSON.stringify(book));

  console.log(`The user is trying to get the book at index ${bookIndex}`);
});

*/

// -------------------------
// HELPER FUNCTIONS
// -------------------------
//this needs to be able to access the recipes
async function getAllRecipes() {
  const data = await fs.readFile("./data.json", "utf8");
  return JSON.parse(data);
}

async function getOneRecipe(recipesIndex) {
  const data = await fs.readFile("./data.json", "utf8");
  const parsedData = JSON.parse(data);
  const parsedRecipe = parsedData[recipesIndex];
  return parsedRecipe;
}

// -------------------------
// API ENDPOINTS
// -------------------------

//handle GET requests for getting all the recipes from data.json
app.get("/get-all-recipes", async (req, res) => {
  const recipes = await getAllRecipes();

  // send the recipes data as JSON in the response
  res.send(JSON.stringify(recipes));
});

// TODO: API Endpoint for handling GET requests to /get-one-recipe/:index
app.get("/get-one-recipe/:index", async (req, res) => {
  const recipeIndex = req.params.index;
  const recipe = await getOneRecipe(recipeIndex);

  // send the books data as JSON in the response
  res.send(JSON.stringify(recipe));
});

// TODO: API Endpoint for handling GET requests to /delete-one-recipe/:index
app.get("/get-one-recipe/:index", async (req, res) => {
  const recipeIndex = req.params.index;
  const recipe = await getOneRecipe(recipeIndex);

  // send the books data as JSON in the response
  res.send(JSON.stringify(recipe));
});


// TODO: API Endpoint for handling GET requests to /update-one-recipe-name/:index/:newName
