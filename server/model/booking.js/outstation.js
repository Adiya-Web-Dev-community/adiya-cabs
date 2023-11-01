const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, default: "XYZ" },
});

const bookingModel = mongoose.model("booking", bookingSchema);
module.exports = bookingModel;
