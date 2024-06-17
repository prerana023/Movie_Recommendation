import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import "./database/connection.js"
import { initModels } from "./models/index.js";
import router from "./router/IndexRoute.js";

const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.json());

initModels();

app.use("/", router);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

