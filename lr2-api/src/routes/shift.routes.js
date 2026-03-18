const express = require('express');
const router = express.Router();
const shiftController = require('../controllers/shift.controller');

router.get('/', (req, res) => shiftController.getAll(req, res));
router.post('/', (req, res) => shiftController.create(req, res));

module.exports = router;