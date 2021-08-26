// index.js
const db = require("./db/models/index.js"); // --> REPLACE THIS

// [1] Just test connection, we don't neeed this in actual. --> REMOVE THIS SECTION
// [2] For dev exploration convenience, we forced synchronisation.
db.sequelize.sync({ force: true }); // --> REPLACE THIS
// db.sequelize.sync(); // --> REPLACE THIS

// [3] Use this syntax to refer to the model in the app/router code later --> ADDED THIS SECTION
// const SimplePokemon = await db.SimplePokemon.create();
