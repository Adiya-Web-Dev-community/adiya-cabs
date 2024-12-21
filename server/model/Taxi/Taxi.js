const mongoose = require("mongoose");

const taxiSchema = new mongoose.Schema({
  manufacturer: { type: String },
  model: { type: String },
  fuelType: { type: String },
  transmissionType: { type: String },
  seatingCapacity: { type: Number },
  carNo: { type: String },
  imgUrl: { type: String },
  availability: { type: String, default: "Available" }, // Available/Booked
});

module.exports = mongoose.model("Taxi", taxiSchema);
