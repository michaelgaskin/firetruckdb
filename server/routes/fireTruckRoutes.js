const express = require('express');
const router = express.Router();
const fireTruckController = require('../controllers/fireTruckController');

// Get all fire trucks
router.get('/', fireTruckController.getAllFireTrucks);

// Get a single fire truck by ID
router.get('/:id', fireTruckController.getFireTruckById);

// Create a new fire truck
router.post('/', fireTruckController.createFireTruck);

// Update a fire truck by ID
router.put('/:id', fireTruckController.updateFireTruck);

// Delete a fire truck by ID
router.delete('/:id', fireTruckController.deleteFireTruck);

module.exports = router;