const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Checklist = require('../../models/Checklist');

// @route   GET api/checklist
// @desc    Get all checklist
// @access  Public
router.get('/', async (req, res) => {
  try {
    const checklists = await Checklist.find();

    res.json(checklists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/checklist
// @desc    Create checklist
// @access  Public
router.post(
  '/',
  [
    check('address', 'Address is required')
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      address,
      back_doors,
      deck,
      doorbell,
      driveway,
      front_doors,
      garage_doors,
      garbage_receptacle,
      house_number,
      mailbox,
      outdoor_lights,
      paint_and_trim,
      parking,
      recycling_receptacle,
      sidewalks,
      siding,
      traffic_noise,
      exterior_windows,
      exterior_notes,
      drainage,
      fences,
      retaining_wall,
      shed,
      sprinklers,
      swimming_pool,
      yard_notes,
      chimney,
      gutters,
      soffits,
      roof_notes,
      ceiling,
      doors,
      floors,
      lights,
      storage,
      walls,
      garage_windows,
      garage_notes,
      blockages,
      carbon,
      mantle,
      soot,
      tiles,
      fireplace_notes,
    } = req.body;

    const checklistFields = {};

    checklistFields.address = address;

    // Exterior
    checklistFields.exterior = {};
    checklistFields.exterior.back_doors = back_doors;
    checklistFields.exterior.deck = deck;
    checklistFields.exterior.doorbell = doorbell;
    checklistFields.exterior.driveway = driveway;
    checklistFields.exterior.front_doors = front_doors;
    checklistFields.exterior.garage_doors = garage_doors;
    checklistFields.exterior.garbage_receptacle = garbage_receptacle;
    checklistFields.exterior.house_number = house_number;
    checklistFields.exterior.mailbox = mailbox;
    checklistFields.exterior.outdoor_lights = outdoor_lights;
    checklistFields.exterior.paint_and_trim = paint_and_trim;
    checklistFields.exterior.parking = parking;
    checklistFields.exterior.recycling_receptacle = recycling_receptacle;
    checklistFields.exterior.sidewalks = sidewalks;
    checklistFields.exterior.siding = siding;
    checklistFields.exterior.traffic_noise = traffic_noise;
    checklistFields.exterior.windows = exterior_windows;
    checklistFields.exterior.notes = exterior_notes;

    // Yard
    checklistFields.yard = {};
    checklistFields.yard.drainage = drainage;
    checklistFields.yard.fences = fences;
    checklistFields.yard.retaining_wall = retaining_wall;
    checklistFields.yard.shed = shed;
    checklistFields.yard.sprinklers = sprinklers;
    checklistFields.yard.swimming_pool = swimming_pool;
    checklistFields.yard.notes = yard_notes;

    // Roof
    checklistFields.roof = {};
    checklistFields.roof.chimney = chimney;
    checklistFields.roof.gutters = gutters;
    checklistFields.roof.soffits = soffits;
    checklistFields.roof.notes = roof_notes;

    // Garage
    checklistFields.garage = {};
    checklistFields.garage.ceiling = ceiling;
    checklistFields.garage.doors = doors;
    checklistFields.garage.floors = floors;
    checklistFields.garage.lights = lights;
    checklistFields.garage.storage = storage;
    checklistFields.garage.walls = walls;
    checklistFields.garage.windows = garage_windows;
    checklistFields.garage.notes = garage_notes;

    // Fireplace
    checklistFields.fireplace = {};
    checklistFields.fireplace.blockages = blockages;
    checklistFields.fireplace.carbon = carbon;
    checklistFields.fireplace.mantle = mantle;
    checklistFields.fireplace.soot = soot;
    checklistFields.fireplace.tiles = tiles;
    checklistFields.fireplace.notes = fireplace_notes;

    try {
      // Create Checklife
      checklist = new Checklist(checklistFields);
      await checklist.save();

      res.json(checklist);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

module.exports = router;
