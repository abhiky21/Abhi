import "dotenv/config";
process.env.TZ = "Asia/Kolkata";
process.on("uncaughtException", (err) => {
  console.error(err);
});

import { startSequelize } from "./sequelize.js";
await startSequelize();
