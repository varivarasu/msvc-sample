const userstore = require('./Userstore.js')

function UserManager() {
	// User Object looks like this
	// { id: '1234', name: 'Some Name', createdAt: '12-Oct-2018 11:00:00 AM', friends: [ {User}, {User}... ]
	// returns User object

	function user(){
		id:string
		name:string
        createdAt:new Date().getTime()
        friends: new Array()
	}
	
	function getuser(userid) {
		const user=null;
		if(!userid) {
			user =  userstore.getUserById(userid)
		}		
		return user;
	}
	
	// return [] User objects
	function getallusers() {
				return  userstore.getAllUsers()				
	}

	// returns User object
	function createuser(user) {
		var newUser = userstore.createUser(user)
		if(user.friends.length>0)
		{

			user.friends.map(function (friend){
				return userstore.makeFriend(newUser.id,friend.id)
			})

			// for (var i=0; i<user.friends.length; i++) {
			// 	var newFriend = user.friends[i];
			// 	userstore.makeFriend(newUser.id,newFriend.id)
			// }
		}
		return newUser;
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
		if(users.friends.length>0)
		{
			user.friends.map(function (friend){
				return userstore.makeFriend(newUser.id,friend.id)
			})
		}
		return userstore.getUser(userid);
	}

	this.getUser = getuser
	this.getAllUsers = getallusers
	this.createUser = createuser
	this.getUserByName = getuserbyname
	this.addFriends = addfriends
	this.User = user
}

module.exports = new UserManager







