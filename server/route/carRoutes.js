const express = require("express");
const router = express.Router();
const carController = require("../controller/CarControllers");

router.get("/", carController.getAllCars);
router.post("/", carController.addCar);
router.put("/:id", carController.updateCar);
router.delete("/:id", carController.deleteCar);

module.exports = router;
