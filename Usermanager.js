const userstore = require('./Userstore.js')

function UserManager() {
	// User Object looks like this
	// { id: '1234', name: 'Some Name', createdAt: '12-Oct-2018 11:00:00 AM', friends: [ {User}, {User}... ]
	// returns User object
	function getuser(userid) {

	}
	
	// return [] User objects
	function getallusers() {

	}

	// returns User object
	function createuser(user) {
		var newUser = userstore.createUser(user)
		if(user.friends.length>0)
		{
			for (var i=0; i<user.friends.length; i++) {
				var newFriend = user.friends[i];
				userstore.makeFriend(newUser.id,newFriend.id)
			}
		}
		return newUser;
	}

	// return User object or null
	function getuserbyname(username) {

	}
	
	// returns User object 
	function addfriends(userid, users) {
		if(users.friends.length>0)
		{
			for (var i=0; i<users.friends.length; i++) {
				var newFriend = users.friends[i];
				userstore.makeFriend(userid,newFriend.id)
			}
		}
		return userstore.getUser(userid);
	}

	this.getUser = getuser
	this.getAllUsers = getallusers
	this.createUser = createuser
	this.getUserByName = getuserbyname
	this.addFriends = addfriends	
}

module.exports = new UserManager







