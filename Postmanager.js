const um = require("./Usermanager.js")
const ps = require('./poststore.js')
//const lm = require('./LoginManager.js')

function PostManager(){

    function Post(){
        title:string
        //timestamp:new Date().getTime()
        user:um.User
    }

    
function CreatePost(userid,post){
    post.user = um.getUser(userid);
    //post.timestamp = new Date()
    ps.createPost(post)
    return post
}

function GetTimeline(userid,start,count){
    const allPosts = ps.getAllPosts();
    var result=[]
    
    let oUser = um.getUser(userid)

    let relevantPosts = allPosts.filter(a=>{
        ((a.user.userid == userid) || (oUser.friends.contains(a.user.userid)))
    })
    
    result = allPosts.slice(start,start+count);

    return result
}
this.post = Post
this.createPost = CreatePost
this.getTimeline = GetTimeline

}

module.exports = new PostManager