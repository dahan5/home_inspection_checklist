const express = require('express');
const router = express.Router();

// @route   GET api/checklist
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Checklist route'));

module.exports = router;
