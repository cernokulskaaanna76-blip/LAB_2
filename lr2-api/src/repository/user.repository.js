const users = [
    { id: 1, name: 'Іван', role: 'student' },
    { id: 2, name: 'Марія', role: 'admin' }
];

class UserRepository {
    findAll() { return users; }
    create(data) {
        const newUser = { id: users.length + 1, ...data };
        users.push(newUser);
        return newUser;
    }
}
module.exports = new UserRepository(); // ПЕРЕВІР ЦЕЙ РЯДОК