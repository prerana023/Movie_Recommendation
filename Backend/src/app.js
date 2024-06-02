import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "./database/connection.js"
import { initModels } from "./models/index.js";
import router from "./router/IndexRoute.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json"}

export const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.json());

initModels();

app.use("/", router);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
