const shiftService = require('../services/shift.service');

class ShiftController {
    getAll(req, res) {
        const shifts = shiftService.getAllShifts();
        res.json(shifts);
    }
    create(req, res) {
        try {
            const newShift = shiftService.addShift(req.body);
            res.status(201).json(newShift);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
}
module.exports = new ShiftController();