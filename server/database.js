const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "quintero_vf",
});

db.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("DB is connected");
  }
});

module.exports = db;
