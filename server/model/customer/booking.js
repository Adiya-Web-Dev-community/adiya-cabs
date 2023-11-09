const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  rideCategory: { type: String },
  //   booking details
  pickupLocation: { type: String },
  destinationLocation: { type: String },
  distance: { type: String },
  duration: { type: String },
  bookingDate: { type: String },
  bookingTime: { type: String },

  // bookingStatus
  bookingStatus: { type: String, default: "waiting for pickup" },
  //waiting for pickup->req sent from passenger and looking for cab rider
  //in transit-> cab rider has accepted booking
  //cancel-> passenger or cab rider cancelled the booking

  //passsenger and rider ids
  passengerId: { type: mongoose.Schema.Types.ObjectId, ref: "passenger" },
  riderId: { type: mongoose.Schema.Types.ObjectId, ref: "rider" },
});

const bookingModel = mongoose.model("booking", bookingSchema);
module.exports = bookingModel;