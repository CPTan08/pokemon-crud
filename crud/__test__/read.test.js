const {
  // findAllPokemons,
  // findPokemonByName,
  // findPokemonsWithBaseHpMoreThan,
  // findPokemonByNameOrBaseHP,
  findPokemonsWithBaseHPGreaterThan,
  findPokemonWithNameOrBaseHP,
} = require("../read.js");

const db = require("../../db/models/index");
const PokemonModel = db.SimplePokemon;

jest.setTimeout(3000);
// jest.mock("../../utils/logger.js");

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

//cannot in parallel with create test file
describe.skip("retrieve/read/find", () => {
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

  /* eslint-disable no-unused-vars, no-unused-expressions, jest/no-disabled-tests */

  // describe("findAllPokemons", () => {
  //   it("should return array with length 4", async () => {
  //     const retrieved = await findAllPokemons();
  //     expect(retrieved.length).toEqual(4);
  //   });
  // });

  describe("findPokemons", () => {
    //   describe("findPokemonsByName", () => {
    //     it("should return a Pokemon", async () => {
    //       const retrieved = await findPokemonByName("Pikachu");
    //       expect(retrieved).toMatchObject(pikachu);
    //     });

    //     it("should return empty when pokemon not found", async () => {
    //       const retrieved = await findPokemonByName("Giberrish");
    //       expect(retrieved).toMatchObject([]);
    //     });
    //   });

    describe("findPokemonsWithBaseHPGreaterThan", () => {
      it("should return array with baseHP more than", async () => {
        const retrieved = await findPokemonsWithBaseHPGreaterThan(40);

        expect(retrieved.length).toEqual(2);

        const retrievedNames = retrieved.map((pokemon) => pokemon.name);
        expect(retrievedNames).toMatchObject(["Squirtle", "Wartortle"]);
      });
    });

    describe("findPokemonWithNameOrBaseHP", () => {
      it("should return array of 2", async () => {
        const retrieved = await findPokemonWithNameOrBaseHP("Squirtle", 59);

        expect(retrieved.length).toEqual(2);

        const retrievedNames = retrieved.map((pokemon) => pokemon.name);
        expect(retrievedNames).toMatchObject(["Squirtle", "Wartortle"]);
      });
    });
  });
});
