//CRUD application Find 
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;

var url = "mongodb://localhost:27017/";
var dbs = "firstdb";

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    var dbo = db.db(dbs);
    var query = { age: 24 };
    //var jsonobj = [{name:"Gagan",hobby:"chess",age:24},{name:"Shubham",hobby:"chess",age:24},{name:"Anupam",hobby:"chess",age:24}]; 
    dbo.collection("people").find(query).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    })
})