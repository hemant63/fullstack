import { ProductModel } from '../models/productModel.js';

export const productService ={
    addProduct:(product, callback)=>{
        console.log("inside product service");
        console.log(product);
        // productModel.addProduct(product, callback);
    }
}