import { productService } from '../services/productService.js';

export const addProduct = (req,res) =>{
    console.log(req.body);
    res.status(200).json({data: req.body})
    // productService.addProduct(req.body, ()=>{
    //     if(err){
    //         return res.status(400).json({message:err});
    //     }
    //     return res.status(200).json({message: "Product added successfully", data: res.body})
    // })
}

export const getProducts = (req,res) =>{
    console.log("in get product function");
}