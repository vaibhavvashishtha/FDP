var fs = require('fs');

//byte array from file
var buf = fs.readFileSync('json.json');

//byte array to string
var data = buf.toString();

//format string to JSON
var dataJSON = JSON.parse(data);

//log in console
if (dataJSON.firstname != '') {
    console.log(dataJSON.firstname);
}

//Update json and write it back
if (dataJSON.age > 30) {
    dataJSON.age = 18;
    var buf1 = JSON.stringify(dataJSON);
    fs.writeFileSync('json.json', buf1);
    console.log('no still 18 :) ' + dataJSON.age);
}
