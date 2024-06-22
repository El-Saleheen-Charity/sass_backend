import express, { Express } from "express";
import auth from "../routes/auth";

module.exports = function (app: Express) {
  app.use(express.json());
  app.use("/api/auth", auth);
  //   app.use(error);
};
