const { toUserResponse, toUsersResponse } = require("../dto/user.dto");
const ApiError = require("../utils/ApiError");
const { validateCreateUser } = require("../validators/user.validator");
const userService = require('../services/user.service');

class UserController {

    
    getAll(req, res) {
        const users = userService.getAllUsers();
        res.status(200).json(toUsersResponse(users));
    }

   
    create(req, res, next) {
        try {
            
            const errors = validateCreateUser(req.body);

            if (errors.length > 0) {
                throw new ApiError(400, "VALIDATION_ERROR", "Invalid request data", errors);
            }

            const newUser = userService.registerUser(req.body);

            res.status(201).json(toUserResponse(newUser));

        } catch (error) {
            next(error); 
        }
    }
}

module.exports = new UserController();і