var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  var myobj = { rollno: "101", name: "Rohit Kumar" };
  dbo.collection("student").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 student document inserted");
    db.close();
  });
});
