import path from "path";
import { readdirSync } from "fs";
import { pathToFileURL } from "url";
import mysql from "mysql2/promise";
import { Sequelize } from "sequelize";
import addInitialData from "./initial.data.js";

const dbConfig = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

const sequelize = new Sequelize(
  dbConfig.DB_NAME,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
    logging: true,
  }
);

async function loadModels() {
  const modelsDir = path.resolve(process.cwd(), "dbschema/models");
  for (const file of readdirSync(modelsDir)) {
    if (file.endsWith(".model.js")) {
      const filePath = path.join(modelsDir, file);
      await import(pathToFileURL(filePath).href);
    }
  }
}

export async function startSequelize() {
  console.log("Running DB schema setup...");
  async function ensureDatabase() {
    const con = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    });
    const qry = `CREATE DATABASE IF NOT EXISTS ?? CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;`;
    await con.query(qry, [process.env.DB_NAME]);
    await con.end();
  }

  try {
    await ensureDatabase();
    await sequelize.authenticate();
    await loadModels();
    await sequelize.sync({ alter: true });
    await sequelize.close();
    await addInitialData();
    process.exit(0);
  } catch (err) {
    console.error("Unable to sync the database:", err);
    process.exit(1);
  }
}

/** 🟢 Close db connection on app shutdown */
async function closeDbConnection(signal) {
  try {
    console.log(`${signal} received, shutting down...`);
    await sequelize.close();
    process.exit(0);
  } catch (err) {
    process.exit(1);
  }
}

process.on("SIGINT", () => closeDbConnection("SIGINT"));
process.on("SIGTERM", () => closeDbConnection("SIGTERM"));

export default sequelize;
