const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
    brandName: {
        type: String,
    },
    fuelType: {
        type: String,
    },
    carNo: {
        type: String,
    },
    content: {
        description: {
            type: String,
        },
        features: {
            type: [String],
        },
        specifications: {
            engine: {
                type: String,
            },
            transmission: {
                type: String,
            },
            seatingCapacity: {
                type: Number,
            },
        },
        rentalInfo: {
            baggage: {
                type: Number,
            },
            dailyRate: {
                type: String,
            },
            monthly: {
                type: String,
            },
            availability: {
                type: String,
            },
        },
    },
    working : {
        type: Boolean,
        default: true
    }
});
const carModel = mongoose.model("car", carSchema);
module.exports = carModel;
