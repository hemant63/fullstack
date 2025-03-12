import mysql from 'mysql2';

// -->MySQL Connection and queries
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'urbancraft',
    database:'urbancraft'
});

export default con;