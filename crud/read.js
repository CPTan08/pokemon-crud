// crud/read.js
const db = require("../db/models/index.js");

const { Op } = require("sequelize");

//SELECT * FROM "SimplePokemons"
// where "baseHP" >34
const findPokemonsWithBaseHPGreaterThan = async (baseHP) => {
  const foundPokemons = await db.SimplePokemon.findAll({
    where: {
      baseHP: {
        [Op.gt]: baseHP,
      },
    },
    // raw: true,
  });
  console.log(
    `RESULT FOR findPokemonsWithBaseHPGreaterThan: ${foundPokemons.length}`
  );
  console.log(foundPokemons[0].toJSON());
  console.log(foundPokemons[0].nameWithJapanese); //specifically for virtual field
  return foundPokemons;
};

const findPokemonWithNameOrBaseHP = async (name, baseHP) => {
  const foundPokemons = await db.SimplePokemon.findAll({
    where: {
      [Op.or]: [{ name: name }, { baseHP: baseHP }],
    },
  });
  console.log(
    `RESULT FOR findPokemonWithNameOrBaseHP: ${foundPokemons.length}`
  );
  console.log(foundPokemons);
  return foundPokemons;
};

module.exports = {
  findPokemonsWithBaseHPGreaterThan,
  findPokemonWithNameOrBaseHP,
};
