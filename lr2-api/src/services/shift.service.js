const shiftRepository = require('../repository/shift.repository');

class ShiftService {
    getAllShifts() { return shiftRepository.findAll(); }
    addShift(data) {
        if (!data.date) throw new Error("Дата обов'язкова");
        return shiftRepository.create(data);
    }
}
module.exports = new ShiftService();