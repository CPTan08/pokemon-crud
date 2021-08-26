const db = require("../db/models/index.js");

const { Op } = require("sequelize");

const updatePikachu = async () => {
  const [numberOfAffectedRecords, updatedPokemons] =
    await db.SimplePokemon.update(
      { baseHP: 50 },
      {
        where: {
          category: {
            [Op.like]: "%Turtle%",
          },
        },
        returning: true,
      }
    );
};

module.exports = updatePikachu;
