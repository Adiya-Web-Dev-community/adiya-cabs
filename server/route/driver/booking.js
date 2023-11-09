const router = require("express").Router();
const CityData = require("../../model/data");
const Booking = require("../../model/customer/booking");
const accountMiddleware = require("../../middleware/account");
const Rider = require("../../model/rider/account");
// Get current active booking request
// we can make a algorithm for nearest rides, currenltly i am using city range here
router.get("/current-bookings", accountMiddleware, async (req, resp) => {
    try {
        const city = req.body.city;
        const bookingData = await Booking.find({
            bookingStatus: "waiting for pickup",
            city: city,
        });
        resp.json({
            success: true,
            msg: "Current open Bookings",
            bookingData,
        });
    } catch (err) {
        resp.json({
            success: false,
            msg: err.message,
        });
    }
});

// accept current booking
router.put("/accept-booking", accountMiddleware, async (req, resp) => {
    try {
        const bookingId = req.body.bookingId;
        const booking = await Booking.findOneAndUpdate(
            {
                _id: bookingId,
                bookingStatus: "waiting for pickup",
            },

            {
                bookingStatus: "in transit",
                riderId : req.accountId
            },
            {
                new: true,
            }
        ).populate("riderId", "name contact vehicleRegistrationNo");
        if(!booking) {
            resp.json({
                success: false,
                msg: "Booking not found",
            });
        }
        resp.json({
            success: true,
            msg: "Booking confirmed",
            booking,
        });
    } catch (err) {
        resp.json({
            success: false,
            msg: err.message,
        });
    }
});


// Cancel cuurent booking
router.put("/cancel-booking", accountMiddleware, async (req, resp) => {
    try {
        const riderId = req.accountId;
        const bookingId = req.body.bookingId;
        const booking = Booking.findOne({
            _id: bookingId,
            riderId: riderId,
        });
        if (!booking) {
            resp.json({
                success: false,
                msg: "Booking not found",
            });
        }
        if (booking.status === "canceled") {
            resp.json({
                success: false,
                msg: "Booking already canceled",
            });
        }
        booking.status = "cancel";
        await booking.save();
        resp.json({
            success: true,
            msg: "Booking canceled",
        });
    } catch (err) {
        resp.json({
            success: false,
            msg: err.message,
        });
    }
});

module.exports = router;
