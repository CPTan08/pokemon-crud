// crud/create.js
const db = require("../db/models/index.js");

const createPikachu = async (pokemon) => {
  const created = await db.SimplePokemon.create(pokemon);

  console.log("Pikachu was saved to the database!");
  // console.log(created); // Not recommended, since Sequelize instances have a lot of things attached. This might produce a lot of clutter.
  console.log(created.toJSON()); // The recommended way to log an instance, but do note that this might still log sensitive data stored in database. Need processing.
  return created;
};

module.exports = createPikachu;
