import { AuthModel } from '../models/authModel.js';

export const authService = {
    login: (email, phoneNo, password, callback) => {
        AuthModel.login(email,phoneNo, password, callback);
    },

    register: (email,phoneNo, password, callback) => {
        AuthModel.register(email,phoneNo, password, callback);
    }
};
