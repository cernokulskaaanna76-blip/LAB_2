const userRepository = require('../repository/user.repository');
//Та сама проблема відсутність асинхронності та обробки помилок
class UserService {
    
    getAllUsers() {
        return userRepository.findAll();
    }

    
    registerUser(userData) {
        //Не вистачає валідації самого userData якщо це буде пуста строка то далі перевірка викличе помилку
        if (!userData.name) {
            throw new Error("Ім'я користувача обов'язкове!");
        }
        return userRepository.create(userData);
    }
}
//Проблема з сінглтоном
module.exports = new UserService();
