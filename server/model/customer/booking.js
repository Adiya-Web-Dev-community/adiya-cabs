const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  // user details
  name: { type: String },
  email: { type: String },
  address: { type: String },
  //   booking details
  pickupCity: { type: String },
  pickupArea: { type: String },
  destinationCity: { type: String },
  destinationArea: { type: String },
  rideCategory: { type: String },
  bookingDate: { type: String },
  bookingTime: { type: String },

  accountId: mongoose.Schema.Types.ObjectId,
});

const bookingModel = mongoose.model("booking", bookingSchema);
module.exports = bookingModel;