const mongoose = require('mongoose')

const mongoose_schema = new mongoose.Schema({
    // rideCategory: { type: String },//rental
    pickupCity: { type: String },
    pickupLocation: { type: String },
    pickupDate: { type: String },
    endDate: { type: String },
    totalDays: { type: Number },
    payableAmount: { type: Number },
    passengerId: { type: mongoose.Schema.Types.ObjectId },
    carId: { type: mongoose.Schema.Types.ObjectId },
    bookingDate: { type: String }
})


module.exports = mongoose.model('renatl-bookings', mongoose_schema)