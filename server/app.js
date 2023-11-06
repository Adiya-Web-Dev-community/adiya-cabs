const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// customer routes
app.use(require("./route/customer/account"));
// customer routes
app.use(require("./route/customer/booking"));
// driver routes
app.use(require("./route/driver/account"));
// Admin routes

app.use(require("./route/admin/account"));

// get country state city data
const data = require("country-state-city").Country;
console.log(data.getAllCountries());

app.get("/", async (req, resp) => {
  resp.send("Welcome to MERU CABS");
});

module.exports = app;
