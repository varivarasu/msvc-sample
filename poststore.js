function PostStore() {
	var idseq = 0
	var postArray = []

	function createpost (post) {
		post.id = idseq
		idseq++
		post.timestamp = new Date()
		postArray.push(post)
		return post
	}

	function getallposts() {
		return postArray
	}	

	this.createPost = createpost
	this.getAllPosts = getallposts
}

module.exports = new PostStore
