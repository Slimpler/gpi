const mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "convenios",
  });
  
db.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('BD is connected');
    }
});  

module.exports = db;