//Немає JSDoc та типізації

const shiftRepository = require('../repository/shift.repository');

class ShiftService {
//Не вистачає асінхронності
    getAllShifts() { return shiftRepository.findAll(); }
//Не вистачає асінхронності. Неймінг методу не зовсім по REST? краще createShift
    addShift(data) {
//Відсутня валідація data якщо воно null
        if (!data.date) throw new Error("Дата обов'язкова");
//Відсутність try-catch
        return shiftRepository.create(data);
    }
}
//створюється сінглотон, краще module.exports = ShiftService; і створювати інстанс у DI або контролері
module.exports = new ShiftService();
