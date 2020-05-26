//CRUD application Update 
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;

var url = "mongodb://localhost:27017/";
var dbs = "firstdb";

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    var dbo = db.db(dbs);
    var query = { name: "Gagan" };
    var newvalues = { $set: { name: "Suruchi", hobby: "coding", age: 30 } };
    //var jsonobj = [{name:"Gagan",hobby:"chess",age:24},{name:"Shubham",hobby:"chess",age:24},{name:"Anupam",hobby:"chess",age:24}]; 
    dbo.collection("people").updateOne(query, newvalues, (err, res) => {
        if (err) throw err;
        console.log("1 document updates");
        db.close();
    })
})