var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM student";
  con.query(sql, function (err, result,fields) {
    if (err) throw err;
    console.log(result);
  });
});
