const express = require("express");

const pokemonRouter = require("./router/pokemon.router.js");
const app = express();
app.use(express.json());

//initialize DB connection
const db = require("./db/models/index.js");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/pokemon", pokemonRouter);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).send(err.message);
});

module.exports = app;
