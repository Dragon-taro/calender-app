import express from "express";

const app = express();
const port = 8080;

app.get("/api/hc", (req, res) => res.send("ok!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
