const mongoose = require("mongoose");

const cycleSchema = new mongoose.Schema({
  brand: { type: String },
  model: { type: String },
  type: { type: String }, // E.g., Mountain, Road, Hybrid
  imgUrl: { type: String },
  availability: { type: String, default: "Available" }, // Available/Booked
});

module.exports = mongoose.model("Cycle", cycleSchema);
