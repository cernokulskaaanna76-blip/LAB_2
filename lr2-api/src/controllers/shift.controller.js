//По стандартам REST API не вистачає методів для оновлення, видалення по id та отримання детальної інформації по id сутності.
const shiftService = require('../services/shift.service');

class ShiftController {
//Не вистачає асінхронності, обробки помилок
    getAll(req, res) {
        const shifts = shiftService.getAllShifts();
        res.json(shifts);
    }
//Не вистачає асінхронності
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
