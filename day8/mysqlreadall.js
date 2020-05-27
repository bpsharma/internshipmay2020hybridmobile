var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

con.connect(err=> {
  if (err) throw err;
  var sql = "SELECT * FROM student";
  con.query(sql, (err, result,fields) =>{
    if (err) throw err;
    result.forEach(s => {
        console.log(s.rollno+" : "+s.name);
    });
  });
});
