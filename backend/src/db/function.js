import con from './connection.js';

export const selectQuery=(table, where)=>{
    return new Promise((resolve, reject)=>{
        const query = `SELECT * FROM ${table} ${where ? `WHERE ${where}`:''}`
        con.query(query,(err,result)=>{
            if(err) reject(err);
            resolve(result);
        });
    });
};

export const insertQuery=(table, payload)=>{
    return new Promise((resolve,reject)=>{
        if(!payload || Object.keys(payload).length ===0 ){
            return reject("Payload cannot be Empty");
        }
        const columns = Object.keys(payload).join(',');
        const values = Object.values(payload).map((value)=>(value === null ? NULL : `'${value}'`)).join(',');
        const query = `INSERT INTO ${table} (${columns}) VALUES (${values})`
        con.query(query,(err,result)=>{
            if(err) reject(err);
            resolve(result);
        });
    }) ;
};

export const getAllUsers = () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM register';
      con.query(query, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  };
  