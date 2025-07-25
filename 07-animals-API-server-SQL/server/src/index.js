// Animals API
// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------
// Importing our Node modules
import express from "express"; // The framework that lets us easily build a web server
import pg from "pg"; // pg stands for PostgreSQL, for talking to the database
import config from "./config.js"; // we need access to our database connection credentials
// connect to our PostgreSQL database, or db for short
const db = new pg.Pool({
  connectionString: config.databaseUrl, // credentials to access the database — keep this private!
  ssl: true, // we will use SSL encryption when connecting to the database
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
  const result = await db.query("SELECT * FROM animals");
  console.log(result);
  return result.rows;
}
//
// Helper function for /get-one-animal/:name
async function getOneAnimal(animalName) {
  const result = await db.query("SELECT * FROM animals WHERE name = $1", [
    animalName,
  ]);
  return result.rows[0];
}
// Helper function for /delete-one-animal/:name
async function deleteOneAnimal(name) {
  //sets fields we're inputting / changing
  const animalName = name;
  await db.query("DELETE FROM animals WHERE name = $1", [animalName]);
}

// Helper function for /add-one-animal
async function addOneAnimal(animal) {
  //await result of database query
  await db.query(
    //sql query inserting vals into animal
    "INSERT INTO animals (name, category, can_fly, lives_in) VALUES ($1, $2, $3, $4)",
    //
    [animal.name, animal.category, animal.can_fly, animal.lives_in]
  );
}
// Helper function for /update-one-animal
async function updateOneAnimal(name, updatedFields) {
  //sets fields we're inputting / changing
  const { category, can_fly, lives_in } = updatedFields;
  await db.query(
    //update animal categories in the following order where name is as specificed
    //sql
    "UPDATE animals SET category = $1, can_fly = $2, lives_in = $3 WHERE name = $4",
    //array needed to insert into sql categories
    [category, can_fly, lives_in, name]
  );
}

// ---------------------------------
// API Endpoints
// ---------------------------------
// GET /get-all-animals
app.get("/get-all-animals", async (req, res) => {
  const allAnimals = await getAllAnimals();
  // res.send(JSON.stringify(allAnimals));
  res.json(allAnimals);
});
// both functions res.send() and res.json() send a response
// res.send() sends a response as a String
// res.json() sends a response as a JSON object
// GET /get-one-animal/:name
app.get("/get-one-animal/:name", async (req, res) => {
  //animalName = the name pulled from the url param
  const animalName = req.params.name;
  //set animal = to the result of the function getOneAnimal
  const animal = await getOneAnimal(animalName);
  //display result of getOneAnimal, wich should be an object with all its attributes
  res.json(animal);
});

// GET /delete-one-animal/:name
app.delete("/delete-one-animal/:name", async (req, res) => {
  //deleteAnimal = the name pulled from the url param
  const deleteAnimal = req.params.name;
  //run function to delete animal asynchronously
  await deleteOneAnimal(deleteAnimal);
  //then return AnimalName was deleted
  res.json(`${deleteAnimal} was deleted`);

  /*try {
    await deleteOneAnimal(deleteAnimal);
    res.json({ success: true, message: "Animal deleted." });
  } catch (err) {
    //if it does not work, send error message.
    res.status(400).json({ success: false, error: err.message });
  }*/
});

// POST /add-one-animal
app.post("/add-one-animal", async (req, res) => {
  //animal is pulled from request body and saved here
  const newAnimal = req.body;
  //try running addOneAnimal
  try {
    await addOneAnimal(newAnimal);
    //if it works, display Animal Added
    res.json({ success: true, message: "Animal added." });
  } catch (err) {
    //if it does not work, send error message.
    res.status(400).json({ success: false, error: err.message });
  }
});

// POST /update-one-animal
//defining a post request at the endpoint update-one-animal
app.post("/update-one-animal", async (req, res) => {
  //animal categories are pulled from request body and saved here
  const { name, category, can_fly, lives_in } = req.body;
  //run helper function, setting aboce var = to the second argument
  try {
    await updateOneAnimal(name, { category, can_fly, lives_in });
    //if it works, give animal updated
    res.json({ success: true, message: "Animal updated." });
  } catch (err) {
    //if it does not work, send error message.
    res.status(400).json({ success: false, error: err.message });
  }
});
