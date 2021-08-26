const db = require("../db/models/index.js");
const { Op } = require("sequelize");

const updatePokemonHPByCategory = async (hp, category) => {
  const numberOfAffectedRecords = await SimplePokemon.update(
    { baseHP: hp },
    {
      where: {
        category: {
          [Op.like]: "%" + category + "%",
        },
      },
      returning: true,
    }
  );
  return numberOfAffectedRecords;
  console.log(updatedPokemons);
};

// const updatePikachu = async () => {
//   const [numberOfAffectedRecords, updatedPokemons] =
//     await db.SimplePokemon.update(
//       { baseHP: 50 },
//       {
//         where: {
//           category: {
//             [Op.like]: "%Turtle%",
//           },
//         },
//         returning: true,
//       }
//     );
// };

module.exports = updatePokemonHPByCategory;
