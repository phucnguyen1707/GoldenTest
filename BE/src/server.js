const express = require("express");
const morgan = require("morgan");
const route = require("./routes");
const cors = require("cors");
const db = require("./config/db");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json()); // for application/json

//routes
route(app);

db.connect();

app.use(morgan("dev"));

app.listen(port, () => {
  console.log("App get started at http://localhost:${port}");
});
