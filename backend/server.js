// import mysql from 'mysql2';
// import cors from 'cors';
import express from 'express';
// import bodyParser from 'body-parser';

// // -->MySQL Connection and queries
// var con = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'root',
//     database:'crud'
// });

// const addProduct=(res,product)=>{
//     var insert =`INSERT INTO products (title, description, price, rating, image) VALUE ("${product?.title}","${product?.description}","${product?.price}","${product?.rating}","${product?.image}")`;
//     if(JSON.stringify(product) === "{}") {
//         console.log("emptyy")
//         res.send("Empty JSON");
//     }else {
//         con.query(insert,(err,result)=>{
//             if(err) throw err;
//             res.json({
//                 status: 200,
//                 message:"Product added successfully",
//                 data:product,
//                 statusText: "OK"
//             });
//         });
//     }
// }
// const displayProducts=(res,displayQuery)=>{
//     con.query(displayQuery,(err,result)=>{
//         if(err) throw err;
//         res.json(result);
//     });
// }
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
// // http.createServer((req,res)=>{
// //     cors()(req,res,()=>{
// //         con.connect((err)=>{
// //             if(err) throw err;
// //             displayTable(res);
// //         });
// //     })
// // }).listen(8080);

// var app=express(); //instance
// app.use(cors())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// const select = `SELECT * FROM products`;
// // Defining route
// app.get('/product',(req,res)=>{
//     con.connect((err)=>{
//                     if(err) throw err;
//                     displayProducts(res,select);
//                 });
// });
// app.get('/product/:id',(req,res)=>{
//     con.connect((err)=>{
//         if(err) throw err;
//         displayProducts(res,select+` WHERE id = ${req?.params?.id}`)
//     })
// })
// app.post('/product',(req,res)=>{
//     con.connect((err)=>{
//         if(err) throw err;
//         addProduct(res,req?.body)
//     })
// })
// app.put('/product/:id',(req,res)=>{
//     con.connect((err)=>{
//         if(err) throw err;
//         updateProduct(res,req?.params?.id,req?.body)
//     })
// })
// app.delete('/product/:id',(req,res)=>{
//     con.connect((err)=>{
//         if(err) throw err;
//         deleteProduct(res,req?.params?.id)
//     })
// })
// // Start server
// var server = app.listen(5000,()=>{
//     console.log('server is running on localhost 5000');
// });



import axios from 'axios';

const app = express();
const API_KEY = '5686e724-4f83-478f-a9a9-948f7be294ec';
const BASE_URL = 'https://stationapi.veriff.com/v1/sessions';

app.use(express.json());

app.post('/api/create-veriff-session', async (req, res) => {
  try {
    const response = await axios.post(BASE_URL, { // After verification is done
    }, {
      headers: {
        'X-AUTH-CLIENT': API_KEY,
        'Content-Type': 'application/json',
      },
    });

    const sessionUrl = response.data.url; // Session URL for the Veriff client SDK
    console.log(response)
    console.log(response.data)
    res.json({ session_url: sessionUrl });
  } catch (error) {
    console.error('Error creating Veriff session:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to create verification session' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
