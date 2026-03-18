const shifts = [
    { id: 1, userId: 1, date: '2026-03-19', type: 'morning' },
    { id: 2, userId: 2, date: '2026-03-19', type: 'evening' }
];

class ShiftRepository {
    findAll() { return shifts; }
    create(data) {
        const newShift = { id: shifts.length + 1, ...data };
        shifts.push(newShift);
        return newShift;
    }
}
module.exports = new ShiftRepository();