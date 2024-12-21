const Taxi = require("../model/Taxi/Taxi");

// Get all taxis
exports.getAllTaxis = async (req, res) => {
  try {
    const taxis = await Taxi.find();
    res.status(200).json({ success: true, data: taxis });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a taxi by ID
exports.getTaxiById = async (req, res) => {
  try {
    const taxi = await Taxi.findById(req.params.id);
    if (!taxi) {
      return res.status(404).json({ success: false, message: "Taxi not found" });
    }
    res.status(200).json({ success: true, data: taxi });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add a taxi
exports.addTaxi = async (req, res) => {
  try {
    const taxi = new Taxi(req.body);
    await taxi.save();
    res.status(201).json({ success: true, data: taxi });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a taxi
exports.updateTaxi = async (req, res) => {
  try {
    const taxi = await Taxi.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!taxi) {
      return res.status(404).json({ success: false, message: "Taxi not found" });
    }
    res.status(200).json({ success: true, data: taxi });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a taxi
exports.deleteTaxi = async (req, res) => {
  try {
    const taxi = await Taxi.findByIdAndDelete(req.params.id);
    if (!taxi) {
      return res.status(404).json({ success: false, message: "Taxi not found" });
    }
    res.status(200).json({ success: true, message: "Taxi deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
