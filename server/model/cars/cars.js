const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
    brand: {
        type: String,
    },
    model: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    description : {
        type: String,
    },
    transmissionType :{
        type: String,
    },
    fuleType :{
        type : String,
    },
    seater :{
        type : Number,
    },
    baggage : {
        type : Number,
    },
    whyText :{
        type : String,
    }
    
});
const carModel = mongoose.model("car", carSchema);
module.exports = carModel;
