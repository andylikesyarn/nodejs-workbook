// Animals API

// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

// Importing our Node modules
import express from "express"; // The framework that lets us easily build a web server

import pg from "pg";

import config from "./config";

const db = new pg.Pool({
  connectionString: config.databaseUrl,
  ssl: true,
});

const app = express(); // Creating an instance of the express module

app.use(express.json()); // This server will receive and respond in JSON format

const port = 3000; // Declaring which port to listen to to receive requests

// Turning on our server to listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// ---------------------------------
// Helper Functions
// ---------------------------------

// Helper function for /get-all-animals
async function getAllAnimals() {
  const animals = await db.query(“SELECT * FROM animals”)
  return JSON.parse(data);
};

// Helper function for /get-one-animal/:name
async function getOneAnimal(animalName) {
  const data = await fs.readFile("./data.json", "utf8");
  const parsedData = JSON.parse(data);
  const parsedAnimal = parsedData[animalsIndex];
  return parsedAnimal;
}
// Helper function for /delete-one-animal/:name

// Helper function for /add-one-animal

// Helper function for /update-one-animal

// ---------------------------------
// API Endpoints
// ---------------------------------

// GET /get-all-animals

// GET /get-one-animal/:name

// GET /delete-one-animal/:name

// POST /add-one-animal

// POST /update-one-animal

// -------------------------
// HELPER FUNCTIONS
// -------------------------
//this needs to be able to access the recipes




// -------------------------
// API ENDPOINTS
// -------------------------

//handle GET requests for getting all the recipes from data.json
app.get("/get-all-animals", async (req, res) => {
  const recipes = await getAllAnimals();

  // send the recipes data as JSON in the response
  res.send(JSON.stringify(animals));
});

// TODO: API Endpoint for handling GET requests to /get-one-recipe/:index
app.get("/get-one-animal/:name", async (req, res) => {
  const animalName = req.params.name;

  

  // send the books data as JSON in the response
  res.send(JSON.stringify(animal));
});
