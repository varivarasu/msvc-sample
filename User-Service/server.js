const Express = require('express')
const bodyparser = require('body-parser')

const app = new Express()
app.use(bodyparser.json())

const UM = require('./usermanager.js')

// for test
UM.createUser({name:'Shiv'})
UM.createUser({name:'Sudip'})
UM.createUser({name:'Upendra'})

function getallusersHandler(req, res, next) {
    res.json(UM.getAllUsers())
} 

function getuserHandler(req, res, next) {
    var userid = parseInt(req.params.userid)
    res.json(UM.getUser(userid))
}

function getuserByNameHandler(req, res, next) {
    var uname = req.params.username
    res.json(UM.getUserByName(uname))    
}

function postuserHandler(req, res, next) {
    var uname = req.body.username
    var newuser = UM.createUser({ name: uname })
    res.json(newuser)
}

app.get('/api/user', getallusersHandler)
app.get('/api/user/:userid', getuserHandler)

app.get('/api/user/byname/:username', getuserByNameHandler)

app.post('/api/user', postuserHandler)

//app.post('/api/user/:userid/friends', postuserFriendsHandler)


app.listen(4000, function(req, res){
    console.log('User-Service Server started.')
})