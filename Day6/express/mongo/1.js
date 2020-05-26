//CRUD application, Create done 
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;

var url = "mongodb://localhost:27017/";
var dbs = "firstdb";

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    var dbo = db.db(dbs);
    var jsonobj = {
        name: "vaibhav",
    }
    dbo.createCollection("people", (err, res) => {
        if (err) throw err;
        console.log("Collection created");
        db.close();

    })

})