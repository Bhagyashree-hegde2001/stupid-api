const express = require("express");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const DATA = fs.readFileSync(
  path.join(process.cwd(), "/src/data.json"),
  "utf-8"
);

const App = express();

App.use(express.json());

App.use(helmet());

App.use(cors());

App.use(morgan("dev"));

App.get("/", (req, res, next) => {
  const quotes = JSON.parse(DATA);

  return res.status(200).json(quotes);
});

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => console.log("server started at " + PORT));
