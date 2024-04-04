const mongoose = require('mongoose');

const fireTruckSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  pumpSize: {
    type: Number
  },
  tankSize: {
    type: Number
  },
  foamCapacity: {
    type: String
  },
  aerialHeight: {
    type: String
  }
});

const FireTruck = mongoose.model('FireTruck', fireTruckSchema);

module.exports = FireTruck;