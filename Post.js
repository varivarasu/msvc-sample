var um = require("./User.js")


function PostManagement(){

    function Post(){
        title:string
        timestamp:timestamp
        user:um
    }

    
function CreatePost(user,post){
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

module.exports = new PostManagement