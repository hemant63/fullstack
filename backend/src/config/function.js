import { db } from './db.config.js';

// export const DbFunction = {
//     getUserByEmail: (email, phoneNo, callback) => {
//         db.query('SELECT * FROM register WHERE email = ? OR phoneNo = ?', [email, phoneNo], callback);
//     },
//     createUser: (user, callback) => {
//         db.query('INSERT INTO register SET ?', user, callback);
//     },
//     getUserById: (id, callback) => {
//         db.query('SELECT * FROM register WHERE id = ?', [id], callback);
//     },
//     updateUser: (id, updatedData, callback) => {
//         db.query('UPDATE register SET ? WHERE id = ?', [updatedData, id], callback);
//     }
// };

export const Product = {
    getProductByName: (email, phoneNo, callback) => {
        db.query('SELECT * FROM product WHERE productName = ?', [productName], callback);
    },
    createProduct: (product, callback) => {
        db.query('INSERT INTO product SET ?', product, callback);
    },
    getProductById: (id, callback) => {
        db.query('SELECT * FROM product WHERE id = ?', [id], callback);
    },
    updateProduct: (id, updatedData, callback) => {
        db.query('UPDATE product SET ? WHERE id = ?', [updatedData, id], callback);
    }
};