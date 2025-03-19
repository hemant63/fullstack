import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from './userModel.js';
import dotenv from 'dotenv';

dotenv.config();

export const AuthModel = {
    login: (email,phoneNo, password, callback) => {
        User.getUserByEmail(email,phoneNo , async(err, user) => {
            if (err) return callback('User not found');
            if (!user) return callback('User not found');
            bcrypt.compare(password, user[0]?.Password, (err, isMatch) => {
                if (err) return callback(err);
                if (!isMatch) return callback('Invalid password');
                const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                callback(null, token);
            });
        });
    },

    register: (email,phoneNo, password, callback) => {
        bcrypt.hash(password, 8, (err, hashedPassword) => {
            if (err) return callback(err);

            const user = { email,phoneNo, password: hashedPassword };
            User.createUser(user, (err, newUser) => {
                if (err) return callback(err);
                callback(null, newUser);
            });
        });
    }
};
