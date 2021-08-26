const db = require("../db/models/index.js");

const { Op } = require("sequelize");

const deletePikachu = async (id) => {
  await db.SimplePokemon.destroy({
    where: {
      id: 1,
    },
  });
};

// Truncate the table
// await db.SimplePokemon.destroy({
//   truncate: true,
// });

module.exports = deletePikachu;
