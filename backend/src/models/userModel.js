import { db } from '../config/db.config.js';

export const User = {
    getUserByEmail: (email, phoneNo, callback) => {
        db.query('SELECT * FROM register WHERE email = ? OR phoneNo = ?', [email, phoneNo], callback);
    },
    createUser: (user, callback) => {
        db.query('INSERT INTO register SET ?', user, callback);
    },
    getUserById: (id, callback) => {
        db.query('SELECT * FROM register WHERE id = ?', [id], callback);
    },
    updateUser: (id, updatedData, callback) => {
        db.query('UPDATE register SET ? WHERE id = ?', [updatedData, id], callback);
    }
};
