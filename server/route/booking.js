const router = require("express").Router();
const Airport = require("../model/booking.js/airport");
const CityRide = require("../model/booking.js/airport");
const outstation = require("../model/booking.js/airport");
const rental = require("../model/booking.js/airport");
const accountMiddleware = require("../middleware/account");
const CityData = require("../model/data");

// get data
router.get("/data", async (req, resp) => {
  resp.send(CityData);
});

// search city and find its data
router.post("/search-data", async (req, resp) => {
  console.log(req.query);
  try {
    const citydata = await CityData.findOne({ city: req.query.city });
    resp.send(citydata);
  } catch (err) {
    resp.send(err.message);
  }
});

// booking data
router.post("/booking", async (req, resp) => {
  try {
  } catch (err) {
    resp.send(err.message);
  }
});

module.exports = router;
