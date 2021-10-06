const express = require("express");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const DATA = fs.readFileSync(path.join(__dirname, "./data.json"), "utf-8");

const App = express();

App.use(express.json());

App.use(helmet());

App.use(cors());

App.get("/", (req, res, next) => {
  const quotes = JSON.parse(DATA);
  return res.status(200).json(quotes);
});

App.listen(3000);
