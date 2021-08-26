const updatePokemonHPByCategory = require("../update.js");

const db = require("../../db/models/index");
const PokemonModel = db.SimplePokemon;

jest.setTimeout(3000);

const pikachu = {
  name: "Pikachu",
  japaneseName: "ピカチュウ",
  baseHP: 35,
  category: "Mouse Pokemon",
};
const pokemons = [
  {
    name: "Squirtle",
    japaneseName: "ゼニガメ",
    baseHP: 44,
    category: "Tiny Turtle Pokemon",
  },
  {
    name: "Wartortle",
    japaneseName: "カメール",
    baseHP: 59,
    category: "Turtle Pokémon",
  },
  {
    name: "Meowth",
    japaneseName: "ニャース",
    baseHP: 40,
    category: "Scratch Cat Pokémon",
  },
];

//cannot in parallel with other test file
describe("retrieve/read/find", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await PokemonModel.bulkCreate(pokemons);
  });

  afterAll(async () => {
    await PokemonModel.truncate();
    await db.sequelize.close();

    it("UPDATE / return 2 when updating HP to 100 for category Turtle"),
      async () => {
        const updated = await updatePokemonHPByCategory(100, "Turtle");
        expect(updated).toEqual(2);
      };
  });
});
