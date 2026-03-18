const userRepository = require('../repository/user.repository');

class UserService {
    
    getAllUsers() {
        return userRepository.findAll();
    }

    
    registerUser(userData) {
        if (!userData.name) {
            throw new Error("Ім'я користувача обов'язкове!");
        }
        return userRepository.create(userData);
    }
}

module.exports = new UserService();