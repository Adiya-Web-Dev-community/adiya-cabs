const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  manufacturer: { type: String },
  model: { type: String },
  fuelType: { type: String },
  bikeNo: { type: String },
  imgUrl: { type: String },
  availability: { type: String, default: "Available" }, // Available/Booked
});

module.exports = mongoose.model("Bike", bikeSchema);
