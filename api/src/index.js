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
import routes from "./routes/routes.js";

let server;
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Sessionid", "Utcoffset"],
  })
);

app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
app.use(bodyParser.json({ extended: true, limit: "100mb" }));
app.set("trust proxy", true);

app.use(`/assets`, express.static("files/assets/"));
app.use(`/${process.env.UP_ROUTE}`, express.static(process.env.UP_PATH));
app.use(process.env.API_ENDPOINT_PREFIX || "/", routes);

function startUI() {
  const uidir = process.env.UI_DIR;
  if (!uidir) return;

  const root = process.cwd();
  app.use(express.static(path.resolve(root, uidir)));
  /*app.get("*", (req, res) => {
    res.sendFile(path.resolve(root, uidir, "index.html"));
  });*/
  app.use((req, res) => {
    res.sendFile(path.resolve(root, uidir, "index.html"));
  });
}

async function startApp() {
  startUI();
  server = app.listen(process.env.APP_PORT || 8000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`app listening at https://${host}:${port}`);
  });
}

startApp();

/** 🟢 Graceful shutdown */
async function shutdown(signal) {
  try {
    console.log(`${signal} received, shutting down...`);
    server.close(async () => {
      await db.destroy();
      console.log("HTTP server and DB connections closed. Bye");
      process.exit(0);
    });
  } catch (err) {
    console.error("Error during shutdown:", err);
    process.exit(1);
  }
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
