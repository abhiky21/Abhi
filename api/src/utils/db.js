import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const knexConfig = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  pool: {
    min: 0,
    max: 50,
    afterCreate: (conn, done) => {
      conn.query('SET sql_mode="";', (err) => {
        if (err) return done(err, conn);
        conn.query("SET NAMES utf8mb4;", (err) => done(err, conn));
      });
    },
  },
  acquireConnectionTimeout: 60 * 60 * 1000, // 1 hour
};

const db = knex(knexConfig);

export default db;
