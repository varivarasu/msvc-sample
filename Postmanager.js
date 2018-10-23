var um = require("./Usermanager.js")


function PostManager(){

    function Post(){
        title:string
        timestamp:timestamp
        user:um
    }

    
function CreatePost(userid,post){
    post.user = user
    post.timestamp = new Date()
    return post
}

function GetTimeline(user,start,count){
    var ap = new Array[Post]
    //call um.getFriendsList
    return ap 
}

this.createPost = CreatePost
this.getTimeline = GetTimeline

}

module.exports = new PostManager