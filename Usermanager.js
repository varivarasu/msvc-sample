const userstore = require('./Userstore.js')

function UserManager() {
	// User Object looks like this
	// { id: '1234', name: 'Some Name', createdAt: '12-Oct-2018 11:00:00 AM', friends: [ {User}, {User}... ]
	// returns User object

	function user(){
		id:String
		name:String
        createdAt:new Date().getTime()
        friends: new Array()
	}
	
	function getuser(userid) {	
			return  userstore.getUserById(userid)
	}
	
	// return [] User objects
	function getallusers() {
				return  userstore.getAllUsers()				
	}

	// returns User object
	function createuser(user) {
		return userstore.createUser(user)
	}

	// return User object or null
	function getuserbyname(username) {		
		return  userstore.getUserByName(username)
	}
	
	// returns User object 
	function addfriends(userid, users) {
		// if(users.friends.length>0)
		// {
			users.map(function (friend){
				return userstore.makeFriend(userid,friend.id)
			})
		// }
		return userstore.getUserById(userid);
	}

	this.getUser = getuser
	this.getAllUsers = getallusers
	this.createUser = createuser
	this.getUserByName = getuserbyname
	this.addFriends = addfriends
	this.User = user
}

module.exports = new UserManager







