// This is a mock UserStore, to be replaced later
//
function UserStore() {
	var idsequence = 0

	var userArray = []
	
	// Returns User object	
	function createuser(user) {
		user.id = idsequence
		idsequence++
		userArray.insert(user)
		return user
	}

	// Returns Array of User objects
	function getallusers() {
		return userArray
	}

	// Returns User object	
	function getuserbyid(userid) {
		return userArray.find( user => user.id === userid ) 
	}
	
	// Returns User object or null
	function getuserbyname(username) {

		return userArray.find( user => user. name === username ) 
	}

	// Returns true or false
	function makefriend(user1id, user2id) {
		user1 = getuserbyid(user1id)
		user2 = getuserbyid(user2id)
		
		if(!user1.friends.includes(user2))
			user1.friends.insert(user2)

		if(!user2.friends.includes(user1))
			user2.friends.insert(user1)

		return true
	}


	this.createUser = createuser
	this.getAllUsers = getallusers
	this.getUserById = getuserbyid
	this.getUserByName = getuserbyname
	this.makeFriend = makefriend
}

module.exports = new UserStore
