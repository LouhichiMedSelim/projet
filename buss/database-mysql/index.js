
const mysql = require('mysql');

const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

getallpost=(callback =>{
  let query=`SELECT * FROM postbuss`
  connection.query(query,(err,results)=>{
    err ? callback(err,null) : callback(null,results)
  })
})
getallacc=(callback =>{
  let query=`SELECT * FROM signup`
  connection.query(query,(err,results)=>{
    err ? callback(err,null) : callback(null,results)
  })
})
postall=(parapms,callback)=>{
      const query=`INSERT INTO signup (username,email,password,phoneNumber) VALUES (?,?,?,?)`
      connection.query(query,parapms,(err,result)=>{
        if(err){
          console.log(err)
        }
        callback(err,result)
      })
}
module.exports = {
  getallpost,
  getallacc,
  postall
}; 