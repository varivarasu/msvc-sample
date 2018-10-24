const um = require("./usermanagerproxy.js")
const ps = require('./poststore.js')

function PostManager() {

    function Post() {
        title: string
        //timestamp:new Date().getTime()
        user: um.User
    }

    function createpost(userid, post) {
        return new Promise(function createpostPromise(resolve, reject) {
            um.getUser(userid).then(user => {
                post.user = user;
                ps.createPost(post)
                resolve(post)
            }).catch(err => {
                reject(err)
            })
        })
    }

    function gettimeline(userid, start, count) {
        return new Promise(function gettimelinePromise(resolve, reject) {
            um.getUser(userid).then(user => {
                try {
                    // Get the ids of the friends of the current user
                    var timelineids = user.friends.map(friend => friend.id)
                    // Add id of current user
                    timelineids.push(user.id)

                    var allPosts = ps.getAllPosts();
                    var filteredposts = allPosts.filter(post => timelineids.contains(post.user.id))
                    var sortedposts = filteredposts.sort((first, second) => {
                        return new Date(second.timestamp) - new Date(first.timestamp)
                    })
                    var result = sortedposts.slice(start, start + count)
                    resolve(result)
                } catch(err) {
                    reject({ status: 'GetTimeLineError-PostGetUser', details: err })
                }
                
            }).catch(err => {
                    reject({ status: 'GetTimeLineError-PreGetUser', details: err })
                })
        })
    }

    this.post = Post
    this.createPost = createpost
    this.getTimeline = gettimeline

}

module.exports = new PostManager