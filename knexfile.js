// Update with your config settings.

module.exports = {
  client: "pg",
  connection: {
    hostname: "localhost",
    port: 5432,
    database: "SistemaFabrica",
    user: "apiSistemaFabrica",
    password: "123456",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/db/migrations",
  },
};
