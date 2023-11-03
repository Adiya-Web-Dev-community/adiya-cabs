const mongoose = require("mongoose");
const riderSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  email: { type: String },
  contact: { type: String },
  password: { type: String },
  locality: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  pincode: { type: Number, default: "" },
  adminVerification : {type :Boolean, default: false},
  riderId: { type: String, unique: true },
  serialNo : { type: Number, unique: true},
  profileImgUrl: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
  },
});
const riderModel = mongoose.model("rider", riderSchema);
module.exports = riderModel;