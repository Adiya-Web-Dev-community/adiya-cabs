const express = require("express");
const router = express.Router();
const City = require("../../model/customer/cities");
router.post("/cities", async (req, resp) => {
    try {
        const city = new City({
            ...req.body,
        });
        await city.save();
        resp.json({
            success: true,
            msg: "City Data",
            data: city,
        });
    } catch (err) {
        resp.json({
            success: false,
            msg: err.message,
        });
    }
});

//todo : change req body to req params to get city name
router.get("/cities/:cityName", async (req, resp) => {
    try {
        const {cityName} = req.params.cityName;
        const city = await City.find({
            cityName: cityName,
        });
        resp.json({
            success: true,
            msg: "City Data",
            data: city,
        });
    } catch (err) {
        resp.json({
            success: false,
            msg: err.message,
        });
    }
});

module.exports = router;
