const express = require('express');
const router = express.Router();
const { confirmBooking } = require('../controller/bookingController');
const accountMiddleware = require('../middleware/account');

// Confirm Booking API
router.post('/confirm', accountMiddleware, confirmBooking);

module.exports = router;
