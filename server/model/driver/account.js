const mongoose = require("mongoose");
const riderSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    conatct: { type: Number },
    password: { type: String },
    locality: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    profileImgUrl: {
        type: String,
        default:
            "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
    },
});

const riderModel = mongoose.model("rider", riderSchema);
module.exports = riderModel;
