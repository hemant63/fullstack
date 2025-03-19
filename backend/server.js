// import cors from 'cors';
// import express from 'express';
// import bodyParser from 'body-parser';
// import con from './src/db/connection.js';
// import { selectQuery } from './src/db/function.js';
// import { registerUser, authenticate } from './src/api/auth.js'
// const deleteProduct=(res,id)=>{
//     con.query(`DELETE FROM products WHERE id = ${id}`,(err,result)=>{
//         if(err) throw err;
//         res.send("Product deleted successfully!")
//     })
// }
// const updateProduct=(res,id,product)=>{
//     const update = `
//         UPDATE products
//         SET 
//             ${product?.title ?`title = "${product?.title},"` : ''}
//             ${product?.description ? ` description = "${product?.description}",` : ''}
//             ${product?.price ? ` price = "${product?.price},"` : ''}
//             ${product?.rating ? ` rating = "${product?.rating},"` : ''}
//             ${product?.image ? ` image = "${product?.image}"` : ''}
//         WHERE id = ${id}`.replace(/,$/, '');
//     con.query(update,(err,result)=>{
//         if(err) throw err;
//         res.send("Product updated successfully!")
//     })
// }
// const addColumn=()=>{
//     con.query('ALTER TABLE products ADD COLUMN image VARCHAR(255)',(err,result)=>{
//         if(err) throw err;
//         console.log("New column added!");
//     })
// }

// var app=express();
// app.use(cors())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// const select = `SELECT * FROM register`;
// app.get('/api/allUser',(req,res)=>{
//     con.connect(async(err)=>{
//                     if(err) throw err;
//                     const result = await selectQuery('register');
//                     res.json(result);
//                 });
// });
// app.get('/api/user/:id',(req,res)=>{
//     con.connect(async(err)=>{
//         if(err) throw err;
//         const result = await selectQuery('register',`id = ${req?.params?.id}`);
//         res.json(result);
//     })
// })
// app.post('/api/register',(req,res)=>{
//     con.connect(async(err)=>{
//         if(err) throw err;
//         const result = await registerUser(req?.body)
//         console.log(result)
//         res.status(result.status).json(result);
//     })
// })
// app.post('/api/login',(req,res)=>{
//     con.connect(async(err)=>{
//         if(err) throw err;
//         const result = await authenticate(req?.body)
//         res.status(result.status).json(result);
//     })
// })
// app.put('/api/register/:id',(req,res)=>{
//     con.connect((err)=>{
//         if(err) throw err;
//         updateProduct(res,req?.params?.id,req?.body)
//     })
// })
// app.delete('/api/register/:id',(req,res)=>{
//     con.connect((err)=>{
//         if(err) throw err;
//         deleteProduct(res,req?.params?.id)
//     })
// })
// // Start server
// var server = app.listen(5000,()=>{
//     console.log('server is running on localhost 5000');
// });



import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import errorMiddleware from './src/middleware/errorMiddleware.js';
import productRoutes from './src/routes/productRoutes.js';
dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', productRoutes)

// Global error handler
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})