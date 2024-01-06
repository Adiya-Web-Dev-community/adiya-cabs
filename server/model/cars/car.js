const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
  },
  model: {
    type: String,
  },
  fuelType: {
    type: String,
  },
  transmissionType: {
    type: String,
  },
  carNo: {
    type: String,
  },
  description: {
    type: String,
  },
  // features: {
  //   type: [String],
  // },
  // engine: {
  //   type: String,
  // },
  imgUrl: { type: String },
  seatingCapacity: {
    type: Number,
  },
  luggageCapacity: {
    type: Number,
  },
  dailyRate: {
    type: Number,
  },
  monthlyRate: {
    type: Number,
  },
  //working:{type:String},
  availability: {
    type: String, //available/ booked
    deafult: "Available",
  },
});
const carModel = mongoose.model("car", carSchema);
module.exports = carModel;
