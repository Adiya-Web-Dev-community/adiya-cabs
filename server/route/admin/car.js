const router = require("express").Router();
const Admin = require("../../model/admin/account");
const Car = require("../../model/cars/car");

// Get All Cars 
router.get("/admin/cars", async (req, resp) => {
    try {
        const cars = await Car.find({
          working: true,
        });
        resp.json({
            success: true,
            message: "Working Car List ",
            Cars : cars,
        })
      } catch (err) {
        resp.status(500).json({ message: err.message });
      }
})

// Add new car 
router.post("/admin/cars", async (req, resp) => {
    try {
        const newCar = new Car({
            ...req.body,
        });
        await newCar.save();
        resp.json({
            success: true,
            message: "Car added successfully",
            car: newCar,
        })
    } catch (error) {
        resp.json({
            success: false,
            message: error.message,
        })
    }
})

// update working status of car 
router.put("/admin/cars", async (req, resp) => {
    try {
        const car = await Car.findById(req.body._id);
        car.working = req.body.working;
        await car.save();
        resp.json({
            success: true,
            message: "Car status updated successfully",
            car: car,
        })
    } catch (error) {
        resp.json({
            success: false,
            message: error.message,
        })
    }
})
 module.exports = router