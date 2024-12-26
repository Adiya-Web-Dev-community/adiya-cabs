const mongoose = require("mongoose");
const AirportBooking = require("../model/bookings/airport");
const RiderBooking = require("../model/bookings/bikeRider");
const CityBooking = require("../model/bookings/city");
const OutStationBooking = require("../model/bookings/outStation");
const RentalBooking = require("../model/bookings/rental");
const Car = require("../model/cars/car");
const Bike = require("../model/Bike/Bike");
const Taxi = require("../model/Taxi/Taxi");
const Cycle = require("../model/Cycle/Cycle");

exports.confirmBooking = async (req, res) => {
  try {
    const {
      currentLocation,
      destination,
      rideType, // car, bike, cycle, taxi
      vehicleId,
      bookingDate,
      bookingTime,
      promoCode,
      duration,
      distance,
    } = req.body;

    const userId = req.accountId; // Authenticated user ID from token

    // Validate ride type and fetch vehicle details
    let vehicleDetails;
    switch (rideType) {
      case "car":
        vehicleDetails = await Car.findById(vehicleId);
        break;
      case "bike":
        vehicleDetails = await Bike.findById(vehicleId);
        break;
      case "cycle":
        vehicleDetails = await Cycle.findById(vehicleId);
        break;
      case "taxi":
        vehicleDetails = await Taxi.findById(vehicleId);
        break;
      default:
        return res.status(400).json({ error: "Invalid ride type provided." });
    }

    if (!vehicleDetails) {
      return res.status(404).json({ error: "Vehicle not found." });
    }

    // Calculate charges (example: per km or per hour logic)
    const charges = (distance * vehicleDetails.dailyRate) / 100; // Example logic
    const payableAmount = promoCode ? charges * 0.9 : charges; // 10% discount for promo code

    // Create a booking record
    const bookingData = {
      rideCategory: rideType,
      pickupLocation: currentLocation,
      destinationLocation: destination,
      distance,
      duration,
      bookingDate,
      bookingTime,
      passengerId: userId,
      bookingStatus: "waiting for pickup",
      carId: vehicleId,
      payableAmount,
    };

    let bookingModel;
    if (rideType === "car" || rideType === "taxi") {
      bookingModel = await CityBooking.create(bookingData);
    } else if (rideType === "bike") {
      bookingModel = await RiderBooking.create(bookingData);
    } else if (rideType === "cycle") {
      bookingModel = await RentalBooking.create(bookingData);
    }

    // Update vehicle availability to "Booked"
    vehicleDetails.availability = "Booked";
    await vehicleDetails.save();

    res.status(201).json({
      message: "Booking confirmed successfully.",
      bookingDetails: bookingModel,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong while booking the ride." });
  }
};
