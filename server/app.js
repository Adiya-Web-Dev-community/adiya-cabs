const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use(require("./route/user"));
app.use(require("./route/booking"));

app.get("/", async (req, resp) => {
  resp.send("Welcome to Stake");
});

module.exports = app;
