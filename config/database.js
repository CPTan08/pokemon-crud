module.exports = {
  development: {
    username: "devtraining",
    password: null,
    database: "devtraining",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "devtraining",
    password: null,
    database: "devtraining",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: "postgres",
  },
};
