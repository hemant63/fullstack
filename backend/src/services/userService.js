import { User } from '../models/userModel.js';

export const userService = {
    getProfile: (userId, callback) => {
        User.getUserById(userId, callback);
    },

    updateProfile: (userId, updatedData, callback) => {
        User.updateUser(userId, updatedData, callback);
    }
};
