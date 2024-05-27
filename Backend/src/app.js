import express from "express";
import dotenv from "dotenv";
import axios from 'axios';
import "./database/connection.js"
import { initModels } from "./models/index.js";
import router from "./router/indexRoute.js";

const app = express()
const port = 3000


app.use("/", router);


initModels()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to initialize models:", error);
  });