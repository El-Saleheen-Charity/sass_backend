import express from "express";
import Logger from "./startup/logging";
const app = express();

process.on("uncaughtException", (err) => {
  Logger.error(`Uncaught Exception: ${err.message}`);
});

require("./startup/config")();
require("./startup/db").connect();
require("./startup/routes")(app);

const port = 8000;
const server = app.listen(port, () => Logger.info(`Listening on port ${port}...`));

module.exports = server;
