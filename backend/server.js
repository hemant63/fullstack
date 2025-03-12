import mysql from 'mysql2';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';

import con from './src/db/connection.js';
import { selectQuery } from './src/db/function.js';
import { registerUser, authenticate } from './src/api/auth.js'
// -->MySQL Connection and queries
// var con = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'urbancraft',
//     database:'urbancraft'
// });


// const authenticate = (res, credential)=>{
//     // bcrypt.compare(credential.password, )
//     const query = `SELECT password FROM register WHERE ${credential.email? `email =  "${credential.email}"` : `phoneNo = "${credential.phoneNo}"`}`;
//     console.log(query);
//     con.query(query,async(err,result)=>{
//         if(err){
//             // Handle database query error
//             console.error("Database query error:", err);
//             return res.status(500).json({
//                 status: 500,
//                 message: "Internal server error, please try again later."
//             });
//         }
//         console.log(result[0]?.password);
//         if(result[0]?.password){
//             // const password = res.json(result)
//             const resp = await bcrypt.compare(credential.password,result[0]?.password)
//             console.log("password resp", resp)
//             if(resp){
//                 import('dotenv').then((dotenv) => {
//                     dotenv.config();
//                     const secretKey = process.env.JWT_SECRET_KEY;
//                     console.log(secretKey)
//                     // const payload={
//                     //     email:  
//                     // }
//                     const token = jwt.sign(credential, secretKey, {expiresIn: '1h'})
//                     res.json({
//                         status:200,
//                         message:"Login Successful",
//                         data:{
//                             access_token:token
//                         }
//                     });
//                 });
//             } else{
//                 res.status(400).json({
//                     status: 400,
//                     message: "Invalid username or password"
//                   });
//             }
//         } else {
//             res.status(400).json({
//                 status: 400,
//                 message: "User not Found"
//               });
//         }
//     })
// }   
// const users=(res,displayQuery)=>{
//     con.query(displayQuery,(err,result)=>{
//         if(err) throw err;
//         res.json(result);
//     });
// }
const deleteProduct=(res,id)=>{
    con.query(`DELETE FROM products WHERE id = ${id}`,(err,result)=>{
        if(err) throw err;
        res.send("Product deleted successfully!")
    })
}
const updateProduct=(res,id,product)=>{
    const update = `
        UPDATE products
        SET 
            ${product?.title ?`title = "${product?.title},"` : ''}
            ${product?.description ? ` description = "${product?.description}",` : ''}
            ${product?.price ? ` price = "${product?.price},"` : ''}
            ${product?.rating ? ` rating = "${product?.rating},"` : ''}
            ${product?.image ? ` image = "${product?.image}"` : ''}
        WHERE id = ${id}`.replace(/,$/, '');
    con.query(update,(err,result)=>{
        if(err) throw err;
        res.send("Product updated successfully!")
    })
}
const addColumn=()=>{
    con.query('ALTER TABLE products ADD COLUMN image VARCHAR(255)',(err,result)=>{
        if(err) throw err;
        console.log("New column added!");
    })
}
// http.createServer((req,res)=>{
//     cors()(req,res,()=>{
//         con.connect((err)=>{
//             if(err) throw err;
//             displayTable(res);
//         });
//     })
// }).listen(8080);

var app=express(); //instance
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const select = `SELECT * FROM register`;
// Defining route
app.get('/allUser',(req,res)=>{
    con.connect(async(err)=>{
                    if(err) throw err;
                    // users(res,select);
                    const result = await selectQuery('register');
                    res.json(result);
                });
});
app.get('/user/:id',(req,res)=>{
    con.connect(async(err)=>{
        if(err) throw err;
        // users(res,select+` WHERE id = ${req?.params?.id}`)
        const result = await selectQuery('register',`id = ${req?.params?.id}`);
        res.json(result);
    })
})
app.post('/register',(req,res)=>{
    con.connect(async(err)=>{
        if(err) throw err;
        const result = await registerUser(req?.body)
        console.log(result)
        res.status(result.status).json(result);
    })
})
app.post('/login',(req,res)=>{
    con.connect(async(err)=>{
        if(err) throw err;
        const result = await authenticate(req?.body)
        res.status(result.status).json(result);
    })
})
app.put('/register/:id',(req,res)=>{
    con.connect((err)=>{
        if(err) throw err;
        updateProduct(res,req?.params?.id,req?.body)
    })
})
app.delete('/register/:id',(req,res)=>{
    con.connect((err)=>{
        if(err) throw err;
        deleteProduct(res,req?.params?.id)
    })
})
// Start server
var server = app.listen(5000,()=>{
    console.log('server is running on localhost 5000');
});



// import axios from 'axios';

// const app = express();
// const API_KEY = '5686e724-4f83-478f-a9a9-948f7be294ec';
// const BASE_URL = 'https://stationapi.veriff.com/v1/sessions';

// app.use(express.json());

// app.post('/api/create-veriff-session', async (req, res) => {
//   try {
//     const response = await axios.post(BASE_URL, { // After verification is done
//     }, {
//       headers: {
//         'X-AUTH-CLIENT': API_KEY,
//         'Content-Type': 'application/json',
//       },
//     });

//     const sessionUrl = response.data.url; // Session URL for the Veriff client SDK
//     console.log(response)
//     console.log(response.data)
//     res.json({ session_url: sessionUrl });
//   } catch (error) {
//     console.error('Error creating Veriff session:', error.response?.data || error.message);
//     res.status(500).json({ error: 'Failed to create verification session' });
//   }
// });

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });
