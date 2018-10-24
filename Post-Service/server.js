const Express = require('express')
const bodyparser= require('body-parser')
const PM = require('./postmanager.js')

const app = new Express()
app.use(bodyparser.json())

function createPostHandler(req, res) {
    var userid = parseInt(req.params.userid)
    var post = { title: req.body.title }

    PM.createPost(userid, post).then(post =>{
        res.json(post)
    }).catch(err => {
        res.json({status:'Error', details: err })
    })
}

function getTimelineHandler(req, res) {
    var userid = parseInt(req.params.userid)
    var start = 0
    var count = 10

    PM.getTimeline(userid, start, count).then(posts => {
        res.json(posts)
    }).catch(err => {
        res.json({status:'Error', details: err })
    })
}

app.post('/api/posts/:userid', createPostHandler)

app.get('/api/posts/:userid', getTimelineHandler)


app.listen(4001, function(req, response){
    console.log('Server started.')
})