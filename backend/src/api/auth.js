// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
// import { selectQuery, insertQuery } from '../db/function.js';
// dotenv.config();
// export const registerUser=async(payload)=>{
//     if(!payload?.password){
//         return ({
//             status:400,
//             message:"Invalid password"
//         });
//     };
//     const existingArr = await selectQuery('register', `${payload?.email ? `email = '${payload.email}'` : `phoneNo = '${payload.phoneNo}'`}`);
//     if(existingArr?.length > 0){
//         return({
//             status:409,
//             message:`${payload?.email ? 'This email is already registered.':'This phone number is already registered.'}`
//         });
//     };
//     const hashedPassword = await bcrypt.hash(payload.password, 8);
//     if(!hashedPassword){
//         return ({
//             status:500,
//             message:"Internal server error"
//         });
//     };
//     payload.password = hashedPassword;
//     const result = await insertQuery('register',payload);
//     if(result){
//         return({
//             status:200,
//             message:"User Registered Successfully"
//         });
//     };
// };

// export const authenticate = async(credential)=>{
//     const data = await selectQuery('register',`${credential?.email ? `email = '${credential.email}'` : `phoneNo = '${credential.phoneNo}'`}`)
//     console.log("data:",data[0]?.Password)
//     if(data[0]?.Password){
//         const resp = await bcrypt.compare(credential.password,data[0]?.Password)
//         console.log("resp",resp)
//         if(resp){
//                 const secretKey = process.env.JWT_SECRET_KEY;
//                 const token = jwt.sign(credential, secretKey, {expiresIn: '1h'})
//                 console.log("tokenn:",token)
//                 return({
//                     status:200,
//                     message:"Login Successful",
//                     data:{
//                         access_token:token
//                     }
//                 });
            
//         } else{
//             return({
//                 status: 400,
//                 message: "Invalid password"
//             });
//         }
//     }else {
//         return({
//             status: 404,
//             message: "User not Found"
//         });
//     }
// }   