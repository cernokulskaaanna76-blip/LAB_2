const express = require('express');
const router = express.Router();
const swapRepo = require('../repository/swap.repository');


router.get('/', (req, res) => {
    res.json(swapRepo.findAll());
});


router.post('/', (req, res) => {
    const newSwap = swapRepo.create(req.body);
    res.status(201).json(newSwap);
});

module.exports = router;