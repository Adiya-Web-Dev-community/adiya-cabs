const router = require("express").Router();
const CityData = require("../../model/data");
const Booking = require("../../model/customer/booking");
const accountMiddleware = require("../../middleware/account");

// get data
router.get("/city-data", async (req, resp) => {
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
      passengerId: req.accountId,
    });
    resp.json({ success: true, msg: "Booking confirmed", data });
  } catch (err) {
    resp.send(err.message);
  }
});

// get all bookings
router.get("/get-bookings-data", async (req, resp) => {
  try {
    const results = await Booking.find({})
      .populate("passengerId")
      .populate("riderId");
    console.log(results);
    resp.send(results);
  } catch (err) {
    resp.send(err.message);
  }
});

module.exports = router;
