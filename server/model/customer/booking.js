const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  // user details
  name: { type: String },
  email: { type: String },
  address: { type: String },
  //   booking details
  pickupLocation: { type: String },
  destination: { type: String },
  rideCategory: { type: String },
  bookingDate: { type: String },
  bookingTime: { type: String },

  accountId: mongoose.Schema.Types.ObjectId,
});

const bookingModel = mongoose.model("booking", bookingSchema);
module.exports = bookingModel;
