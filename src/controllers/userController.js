import userServices from "../service/userService.js";
import { CatchError } from "../utils/catchError.js";

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await userServices.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            return CatchError(error, res);
        }
    }

    async getUserById(req, res) {
        try {
            const { userId } = req.params;
            const user = await userServices.getUserById(userId);
            res.status(200).json(user);
        } catch (error) {
            return CatchError(error, res);
        }
    }

    async createUser(req, res) {
        try {
            const userData = req.body;
            const newUser = await userServices.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            return CatchError(error, res);
        }
    }

    async updateUser(req, res) {
        try {
            const { userId } = req.params;
            const userData = req.body;
            const updatedUser = await userServices.updateUser(userId, userData);
            res.status(200).json(updatedUser);
        } catch (error) {
            return CatchError(error, res);
        }
    }

    async deleteUser(req, res) {
        try {
            const { userId } = req.params;
            await userServices.deleteUser(userId);
            res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
            return CatchError(error, res);
        }
    }
}

export default new UserController();
