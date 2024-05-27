import express from "express";
import dotenv from "dotenv";
import axios from 'axios';
import "./database/connection.js"
import router from "./router/indexRoute.js";

const app = express()
const port = 3000


app.use("/", router);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})