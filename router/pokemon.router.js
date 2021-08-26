const express = require("express");
const createPokemon = require("../crud/create.js");

const router = express.Router();
router.post("/create", async (req, res, next) => {
  const data = req.body;
  console.log("i am here", data);

  try {
    const result = await createPokemon(data);
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  const data = req.body;
  console.log("", data);

  try {
    const result = await findAllPokemon();
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
