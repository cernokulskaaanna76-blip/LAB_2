const swaps = [];

class SwapRepository {
    findAll() { return swaps; }
    create(data) {
        const newSwap = {
            id: swaps.length + 1,
            status: 'pending',
            createdAt: new Date(),
            ...data
        };
        swaps.push(newSwap);
        return newSwap;
    }
}

module.exports = new SwapRepository();