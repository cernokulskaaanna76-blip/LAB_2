const shifts = [
    { id: 1, userId: 1, date: '2026-03-19', type: 'morning' },
    { id: 2, userId: 2, date: '2026-03-19', type: 'evening' }
];
//відсутність асінхронності, базових методів findById, delete, update
class ShiftRepository {
    findAll() { return shifts; } // краще зробити return [...shifts];
// для сутності user була зроблена DTO, чому для shift тоді передається сюди сирий реквест. Так само треба зробити DTO та мапити дані
    create(data) {
        const newShift = { id: shifts.length + 1, ...data }; // краще зробити через const newId = shifts.length > 0 ? Math.max(...shifts.map(s => s.id)) + 1: 1; бо можуть бути колізії при видаленні записів
        shifts.push(newShift);
        return newShift;
    }
}
//сінглтон
module.exports = new ShiftRepository();
