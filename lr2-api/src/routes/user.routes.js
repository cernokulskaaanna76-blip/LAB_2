const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAll);


router.post('/', userController.create);

module.exports = router;
router.put('/:id', (req, res) => {
    const updated = require('../services/user.service').updateUser(req.params.id, req.body);
    res.json(updated);
});
router.delete('/:id', (req, res) => {
    require('../services/user.service').deleteUser(req.params.id);
    res.status(204).send();
});