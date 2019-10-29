import express from "express";
import scheduleRouter from "./src/infrastructure/routers/schedule";
import DB from "./src/infrastructure/db/handler";

const app = express();
const port = 8080;

const db = new DB();

// health check
app.get("/api/hc", (_req, res) => res.send("ok!"));

// routing
app.use("/api/schedules", scheduleRouter(db));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
