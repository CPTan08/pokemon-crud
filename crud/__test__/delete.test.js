const { deletePokemon } = require("../delete.js");
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

//cannot in parallel with other test
describe.only("retrieve/read/find", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await PokemonModel.bulkCreate(pokemons);
  });

  afterAll(async () => {
    await PokemonModel.truncate();
    await db.sequelize.close();
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("DELETE/ return 2 when deleting a pokemon", async () => {
    const result = await deletePokemon(1);
    expect(result).toEqual(1);
  });
});
