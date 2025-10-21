import "dotenv/config";
process.env.TZ = "Asia/Kolkata";
process.on("uncaughtException", (err) => {
  console.log(err);
});

import { startSequelize } from "./sequelize.js";
await startSequelize();
