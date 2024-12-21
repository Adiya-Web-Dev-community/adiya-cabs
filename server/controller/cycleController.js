const Cycle = require("../model/Cycle/Cycle");

// Get all cycles
exports.getAllCycles = async (req, res) => {
  try {
    const cycles = await Cycle.find();
    res.status(200).json({ success: true, data: cycles });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a cycle by ID
exports.getCycleById = async (req, res) => {
  try {
    const cycle = await Cycle.findById(req.params.id);
    if (!cycle) {
      return res.status(404).json({ success: false, message: "Cycle not found" });
    }
    res.status(200).json({ success: true, data: cycle });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add a cycle
exports.addCycle = async (req, res) => {
  try {
    const cycle = new Cycle(req.body);
    await cycle.save();
    res.status(201).json({ success: true, data: cycle });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a cycle
exports.updateCycle = async (req, res) => {
  try {
    const cycle = await Cycle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cycle) {
      return res.status(404).json({ success: false, message: "Cycle not found" });
    }
    res.status(200).json({ success: true, data: cycle });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a cycle
exports.deleteCycle = async (req, res) => {
  try {
    const cycle = await Cycle.findByIdAndDelete(req.params.id);
    if (!cycle) {
      return res.status(404).json({ success: false, message: "Cycle not found" });
    }
    res.status(200).json({ success: true, message: "Cycle deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
