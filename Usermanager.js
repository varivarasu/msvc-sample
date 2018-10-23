const userstore = require('./Userstore')

function UserManager() {
	// User Object looks like this
	// { id: '1234', name: 'Some Name', createdAt: '12-Oct-2018 11:00:00 AM', friends: [ {User}, {User}... ]
	// returns User object
	function getuser(userid) {
		const user=null;
		if(!userid) {
			user =  userstore.getUserById(userid)
		}		
		return user;
	}
	
	// return [] User objects
	function getallusers() {

	}

	// returns User object
	function createuser(user) {

	}

	// return User object or null
	function getuserbyname(username) {
		const user=null;
		if(!username) {
			user =  userstore.getUserByName(username)
		}		
		return user;
	}
	
	// returns User object 
	function addfriends(userid, users) {

	}

	this.getUser = getuser
	this.getAllUsers = getallusers
	this.createUser = createuser
	this.getUserByName = getuserbyname
	this.addFriends = addfriends	
}

module.exports = new UserManager







