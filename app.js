const express = require("express");
const path = require("path");
const playerRouter = require("./routes/playerRoutes");
const viewRouter = require("./routes/viewRoutes");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));
app.use(express.json({ limit: "10kb" }));
app.use(express.static(path.join(`${__dirname}/public`)));

app.use("/", viewRouter);
app.use("/api/v1/players", playerRouter);

module.exports = app;
