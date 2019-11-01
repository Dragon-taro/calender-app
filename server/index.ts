import express from "express";
import scheduleRouter from "./src/infrastructure/routers/schedule";
import DB from "./src/infrastructure/db/handler";

// 環境変数のセット（ほんとはdotenvに書きたい）
process.env.DB_USER = "user";
process.env.DB_NAME = "calender";
process.env.DB_PASS = "pass";

const app = express();
const port = 8000;

app.use(express.json());

const db = DB.new();

db.connect().then(() => {
  // health check
  app.get("/api/hc", (_req, res) => res.send("ok!"));

  // routing
  app.use("/api/schedules", scheduleRouter(db));

  // 起動
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
