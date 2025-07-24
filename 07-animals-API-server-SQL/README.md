# Animals API with Express & SQL

## Introduction

In this project, you'll create an Animals API!

You'll use Express to build a web server that exposes API endpoints for storing and retrieving animal data in a PostgreSQL database.

The instructor will provide:

1. The PostgreSQL database (with database schema + seed data) that is hosted on Neon
1. API documentation

---

## Your Task

As the backend developer, your task is to build the Express API server that handles HTTP `GET` and `POST` requests to the following endpoints:

<<<<<<< HEAD
1. GET `/get-all-animals`
2. GET `/get-one-animal/:name`
3. GET `/delete-one-animal/:name`
4. POST `/add-one-animal`
5. POST `/update-one-animal`

**Stretch Goals (optional):**

- 🏆 Add error handling to each endpoint
- 🏆 Add an endpoint for filtering animals (e.g., by category or habitat)
- 🏆 Add a `/search-animals/:term` endpoint that retrieves all animals whose names contain the search term
- 🏆 Add a `/get-animals-by-category/:category` endpoint that retrieves all animals that belong to a specific category (e.g., mammal or bird).
- 🏆 Add a `/get-animals-by-habitat/:habitat` endpoint that retrieves all animals that live in a particular habitat (land, water, or air).
=======
1. `/get-all-animals`
2. `/get-one-animal/:name`
3. `/delete-one-animal/:name`
4. `/add-one-animal`
5. `/update-one-animal`

**Stretch Goals (optional):**

- 🏆 Add error handling
- 🏆 Add an endpoint for filtering animals (e.g., by category or habitat)
- 🏆 Add a `/search-animals/:term` endpoint that retrieves all animals whose names contain the search term
>>>>>>> temp

---

### Getting Started

To get started, you will need to do the following:

<<<<<<< HEAD
1. In the Terminal, open up the `07-animals-API-server-SQL` project folder. You should see there's two folders here:
   - `client` which holds the completed frontend code
   - `server` which will hold your server/API code
1. `cd` into the `server` folder
1. In the Terminal, in the `server` folder, run `npm init -y` to initialize your `package.json` file.
1. In the Terminal, in the `server` folder, run `npm install express` and `npm install pg`. This will install 2 packages, `express` and `pg`, which you should then see listed in your `package.json` file as dependencies.
1. In the `package.json` file in the `server` folder, add the key/value pair `"type": "module"` in order to use the modern ES Module syntax.
1. In the your server's `src` folder, create a `config.js` file. This file will contain the password and access credentials to the database. Your instructor will provide this to you during lecture.
=======
1. In the Terminal, in your `07-animals-API-server-SQL` project folder, run `npm init -y` to initialize your `package.json` file.
1. In the Terminal, in your `07-animals-API-server-SQL` project folder, run `npm install express` and `npm install pg`. This will install 2 packages, `express` and `pg`, which you should then see listed in your `package.json` file as dependencies.
1. In the `package.json` file, add the key/value pair `"type": "module"` in order to use the modern ES Module syntax.
1. In the `src` folder, create a `config.js` file. This file will contain the password and access credentials to the database. Your instructor will provide this to you during lecture.
>>>>>>> temp
1. Write your server code in the `index.js` file:

   - Set up your Express server using the boilerplate code
   - Define your API endpoints using `app.get()` and `app.post()`
   - Create helper functions to handle storing and retrieving data from the database

---

### How to run your server

1. In the terminal, navigate into your `src` directory
2. Start the server by running:

   `node index.js`

3. To automatically restart the server when you make changes, use the --watch flag:

   `node --watch index.js`

---

### How to Know It’s Working

You’ll know your server is running successfully when:

- You see your custom "Server is listening..." message in the terminal

- You can visit your API routes in the browser and then receive the expected responses from your endpoints while the server is running

---

### Database Schema

```sql
CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL
    CHECK (category IN ('mammal', 'bird', 'fish', 'reptile', 'amphibian', 'insect', 'other')),
  can_fly BOOLEAN NOT NULL,
  lives_in TEXT NOT NULL
    CHECK (lives_in IN ('land', 'water', 'air'))
);
```

### Sample Data

```sql
INSERT INTO animals (name, category, can_fly, lives_in) VALUES
('Lion', 'mammal', false, 'land'),
('Eagle', 'bird', true, 'air'),
('Dolphin', 'mammal', false, 'water'),
('Bat', 'mammal', true, 'air'),
('Frog', 'amphibian', false, 'land'),
('Shark', 'fish', false, 'water'),
('Elephant', 'mammal', false, 'land'),
('Butterfly', 'insect', true, 'air'),
('Penguin', 'bird', false, 'land'),
('Crocodile', 'reptile', false, 'water');
```

---

## 📘 API Endpoint Overview

Base URL: `https://localhost:3000`

| Resource  | Method | Endpoint                 | Description                      |
| --------- | ------ | ------------------------ | -------------------------------- |
| `animals` | GET    | /get-all-animals         | Retrieves all animals            |
| `animals` | GET    | /get-one-animal/:name    | Retrieves one animal by its name |
| `animals` | GET    | /delete-one-animal/:name | Deletes an animal by its name    |
| `animals` | POST   | /add-one-animal          | Add an animal to the database    |
| `animals` | POST   | /update-one-animal       | Updates an animal's data         |

---

## API Endpoints

---

### 🔷 GET `/get-all-animals`

Retrieves all animals in the database.

#### Example Request

`http://localhost:3000/get-all-animals`

#### Example Response

```json
[
  {
    "id": 1,
    "name": "Lion",
    "category": "mammal",
    "can_fly": false,
    "lives_in": "land"
  },
  {
    "id": 2,
    "name": "Eagle",
    "category": "bird",
    "can_fly": true,
    "lives_in": "air"
  }
]
```

---

### 🔷 GET `/get-one-animal/:name`

Retrieves one animal that matches the given name.

#### Example Request

`http://localhost:3000/get-one-animal/Frog`

#### Example Response

```json
{
  "id": 5,
  "name": "Frog",
  "category": "amphibian",
  "can_fly": false,
  "lives_in": "land"
}
```

---

### 🔷 GET `/delete-one-animal/:name`

#### Example Request

`http://localhost:3000/delete-one-animal/Frog`

#### Example Response

```
The animal was successfully deleted!
```

---

### 🔷 POST `/add-one-animal`

Adds a new animal to the database.
The request body must include `name`, `category`, `can_fly`, and `lives_in`.

#### Example Request Body

```
{
  "name": "Koala",
  "category": "mammal",
  "can_fly": false,
  "lives_in": "land"
}
```

#### Example Response

```
The animal was successfully added!
```

---

### 🔷 POST `/update-one-animal`

Updates the data for an existing animal.
The request body must include the `name` of the animal to update, along with the new values for `category`, `can_fly`, and `lives_in`.

#### Example Request

```
{
"name": "Penguin",
"category": "bird",
"can_fly": false,
"lives_in": "water"
}
```

#### Example Response

```
The animal was successfully updated!
```
