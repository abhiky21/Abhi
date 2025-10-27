import "dotenv/config";
process.env.TZ = "Asia/Kolkata";
process.on("uncaughtException", (err) => {
  console.log(err);
});
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled rejection at:", promise, "reason:", reason);
});

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";
import path from "path";
import db from "./utils/db.js";

