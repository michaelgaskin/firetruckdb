const FireTruck = require('../models/fireTruck');

// Get all fire trucks
exports.getAllFireTrucks = async (req, res) => {
  try {
    const fireTrucks = await FireTruck.find();
    res.json(fireTrucks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single fire truck by ID
exports.getFireTruckById = async (req, res) => {
  try {
    const fireTruck = await FireTruck.findById(req.params.id);
    if (!fireTruck) {
      return res.status(404).json({ message: 'Fire truck not found' });
    }
    res.json(fireTruck);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new fire truck
exports.createFireTruck = async (req, res) => {
  const fireTruck = new FireTruck({
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    pumpSize: req.body.pumpSize,
    tankSize: req.body.tankSize,
    foamCapacity: req.body.foamCapacity,
    aerialHeight: req.body.aerialHeight
  });

  try {
    const newFireTruck = await fireTruck.save();
    res.status(201).json(newFireTruck);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a fire truck by ID
exports.updateFireTruck = async (req, res) => {
  try {
    const fireTruck = await FireTruck.findById(req.params.id);
    if (!fireTruck) {
      return res.status(404).json({ message: 'Fire truck not found' });
    }

    fireTruck.year = req.body.year || fireTruck.year;
    fireTruck.make = req.body.make || fireTruck.make;
    fireTruck.model = req.body.model || fireTruck.model;
    fireTruck.pumpSize = req.body.pumpSize || fireTruck.pumpSize;
    fireTruck.tankSize = req.body.tankSize || fireTruck.tankSize;
    fireTruck.foamCapacity = req.body.foamCapacity || fireTruck.foamCapacity;
    fireTruck.aerialHeight = req.body.aerialHeight || fireTruck.aerialHeight;

    const updatedFireTruck = await fireTruck.save();
    res.json(updatedFireTruck);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a fire truck by ID
exports.deleteFireTruck = async (req, res) => {
  try {
    const fireTruck = await FireTruck.findById(req.params.id);
    if (!fireTruck) {
      return res.status(404).json({ message: 'Fire truck not found' });
    }

    await fireTruck.remove();
    res.json({ message: 'Fire truck removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};