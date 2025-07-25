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


// -------------------------
// HELPER FUNCTIONS
// -------------------------
//this needs to be able to access the recipes
async function getAllRecipes() {
  //this is going to read my data from the file specified
  const data = await fs.readFile("./data.json", "utf8");
  //this will give me a usable version of the data for the app
  const data = await fs.readFile("./data.json", "utf8");
  return JSON.parse(data);
}

async function getOneRecipe(recipesIndex) {
  //this is going to read my data from the file specified
  const data = await fs.readFile("./data.json", "utf8");
  //this will give me a usable version of the data for the app
  const parsedData = JSON.parse(data);
  //this pulls the specific recipe from the set of recipes
  const parsedRecipe = parsedData[recipesIndex];
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

  //set recipes == to result of running get all recipes

  const recipes = await getAllRecipes();

  // send the recipes data as JSON in the response
  res.send(JSON.stringify(recipes));
});

// TODO: API Endpoint for handling GET requests to /get-one-recipe/:index
app.get("/get-one-recipe/:index", async (req, res) => {

  //set recipeIndex == to the index at the wndpoint

  const recipeIndex = req.params.index;
  //set recipe == to result of running get one recipe

  const recipeIndex = req.params.index;

  const recipe = await getOneRecipe(recipeIndex);

  // send the books data as JSON in the response
  res.send(JSON.stringify(recipe));
});

