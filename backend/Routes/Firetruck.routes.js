const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Firetruck = require('../models/Firetruck');

// Create a new firetruck
router.post('/', async (req, res) => {
  const firetruck = new Firetruck(req.body);
  try {
    await firetruck.save();
    res.status(201).send(firetruck);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all firetrucks
router.get('/', async (req, res) => {
  try {
    const firetrucks = await Firetruck.find({});
    res.send(firetrucks);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a single firetruck by id
router.get('/:id', async (req, res) => {
  try {
    const firetruck = await Firetruck.findById(req.params.id);
    if (!firetruck) {
      return res.status(404).send();
    }
    res.send(firetruck);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a firetruck by id
router.patch('/:id', async (req, res) => {
  try {
    const firetruck = await Firetruck.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!firetruck) {
      return res.status(404).send();
    }
    res.send(firetruck);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete a firetruck by id
router.delete('/:id', async (req, res) => {
  try {
    const firetruck = await Firetruck.findByIdAndDelete(req.params.id);
    if (!firetruck) {
      return res.status(404).send();
    }
    res.send(firetruck);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;