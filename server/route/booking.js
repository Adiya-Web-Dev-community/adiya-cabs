const router = require("express").Router();
const Booking = require("../model/booking");
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
router.post("/booking", accountMiddleware, async (req, resp) => {
  try {
    const data = await Booking.create({
      ...req.body,
      accountId: req.accountId,
    });
    resp.json({ success: true, msg: "Booking confirmed", data });
  } catch (err) {
    resp.send(err.message);
  }
});

module.exports = router;
