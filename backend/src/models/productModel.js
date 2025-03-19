import { db } from '../config/db.config.js';

export const ProductModel = {
    getProductByName: (productName, callback) => {
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