var express = require('express')
var fs = require('fs')

var app = express()

//REST METHODS - GET / POST / PUT / DELETE

//GET ALL USERS
app.get('/listusers', (req, res) => {
    fs.readFile('users.json', (err, data) => {
        var dataJSON = data.toString()
        var dataToSend = JSON.parse(dataJSON)
        res.end(data)
    })
})

//GET USER
app.post('/finduser', (req, res) => {
    var userId = 'user' + req.param('userId', '')
    console.log(userId)
    fs.readFile('users.json', (err, data) => {
        var buf = data.toString()
        var users = JSON.parse(buf)
        console.log(users['user1'])
        
        if (filteredUsers.length > 0) {
            res.end('found one')
        } else {
            res.end()
            console.log('not found dude!')
        }
    })
})

var user = {
    "user": "user5",
    "firstname": "TestAdd",
    "lastname": "Adding",
    "hobby": "Testing"
}

//ADD A USER
app.post('/adduser', (req, res) => {
    fs.readFile('users.json', (err, data) => {
        var buf = data.toString()
        var users = JSON.parse(buf)
        users.push(user)
        console.log(users)
        res.end('added a user')
    })
})

//REMOVE A USER
app.post('/removeuser', (req, res) => {
    var userId = 'user' + req.param('userId', )
    fs.readFile('users.json', (err, data) => {
        var buf = data.toString()
        var users = JSON.parse(buf)
        console.log(userId)
        var filteredUsers =  users.filter((user) => {
            return user.user !== userId
        })
        console.log(filteredUsers)
        res.end('removed a user')
    })
})

app.get('/', (req, res) => {
    console.log('does not match any URL')
})

app.listen(3000, () => {
    console.log('server started')
});