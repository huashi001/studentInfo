const mysql = require('mysql');
const pool=mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'huashi123',
  database: 'huashi'
});
const query=function(sql,data){
  return new Promise((resolve,reject)=>{
    pool.getConnection(function(err,connection){
      if(err){
        reject(err);
      }else{
        connection.query(sql,data,function(err,data){
          if(err){
            reject(err);
          }else{
            resolve(data);
          }
          connection.release();
        })
      }
    })
  })
}
module.exports={
  query
}