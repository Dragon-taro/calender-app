import express from "express";
import dotenv from "dotenv";

import scheduleRouter from "./src/infrastructure/routers/schedule";
import DB from "./src/infrastructure/db/handler";

dotenv.config();

const app = express();
const port = 8000;

app.use(express.json());
app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const db = DB.instance;

db.connect().then(() => {
  // health check
  app.get("/api/hc", (_req, res) => res.send("ok!"));

  // routing
  app.use("/api/schedules", scheduleRouter(db));

  // 起動
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
