const Express = require('express')
const bodyparser = require('body-parser')
const UM = require('./usermanagerproxy.js')

const app = new Express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get("/users", function getUsers(req, res, next) {
    var vm = { users: [] }

    UM.getAllUsers().then(users => {
        vm.users = users
        res.render('users', vm)
    }).catch(err => {
        res.render('error', { error: err })
    })
})

app.post("/users", function postUsers(req, res, next) {
    var newusername = req.body.newusername

    var vm = { users: [] }

    UM.postUser(newusername).then(newuser => {
        console.log('New user:') + newusername + " added. Details:"
        console.dir(newuser)
        UM.getAllUsers().then(users => {
            vm.users = users
            res.render('users', vm)
        })
    }).catch(err => {
        res.render('error', { error: err })
    })
})

app.get("/", function getIndex(req, res, next){
    var vm = []
    res.render('index', vm)
})

app.listen(8080, function () {
    console.log('Front-End Server started.')
})