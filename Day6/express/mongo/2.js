//CRUD application 
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;

var url = "mongodb://localhost:27017/";
var dbs = "firstdb";

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    var dbo = db.db(dbs);
    var jsonobj = { name: "Suruchi", hobby: "chess", age: 24 };
    dbo.collection("people").insertOne(jsonobj, (err, res) => {
        if (err) throw err;
        console.log("1 Document inserted");
        db.close();
    })
})