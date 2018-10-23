const UM = require('./Usermanager.js')

if (typeof localStorage === "undefined" || localStorage === null) {
	var LocalStorage = require('node-localstorage').LocalStorage;
	localStorage = new LocalStorage('./scratch');
  }
   
  
  

function LoginManager() {
	// Returns User object
	
	function getcurrentuser() {
		return localStorage.getItem('userObj');
	}

	// Return User object
	function signup(user) {
		var userObj = UM.createUser(user);
		//var userObj = user;
		localStorage.setItem('userObj',userObj);
		return userObj;
		
	}

	// Return User object or null
	function signin(username) {

		var userObj = UM.getuserbyname(username);
		//var userObj = {name:username};
		localStorage.setItem('userObj',userObj);
		return userObj;
	}

	this.getCurrentUser = getcurrentuser
	this.signUp = signup
	this.signIn = signin
}
//exports method  test1
module.exports = new LoginManager
