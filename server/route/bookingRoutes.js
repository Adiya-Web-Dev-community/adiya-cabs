const express = require('express');
const router = express.Router();
const { confirmBooking, getBookings } = require('../controller/bookingController');
const accountMiddleware = require('../middleware/account');

// Confirm Booking API
router.post('/confirm', accountMiddleware, confirmBooking);

// Get Bookings API
router.get('/', accountMiddleware, getBookings);

module.exports = router;
