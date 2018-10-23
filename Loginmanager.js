const UM = require('./Usermanager.js')

if (typeof localStorage === "undefined" || localStorage === null) {
	var LocalStorage = require('node-localstorage').LocalStorage;
	localStorage = new LocalStorage('./scratch');
//	localStorage.clear;
  }
   
  
  

function LoginManager() {
	// Returns User object
	
	function getcurrentuser() {
		return localStorage.getItem('userObj');
	}

	// Return User object
	function signup(user) {
		var uo = UM.createUser(user);
		//var uo = user;
		localStorage.setItem('userObj',uo);
		return uo;
		
	}

	// Return User object or null
	function signin(username) {

		var uo = UM.getuserbyname(username);
		//var uo = {name:username};
		localStorage.setItem('userObj',uo);
		return uo;
	}

	this.getCurrentUser = getcurrentuser
	this.signUp = signup
	this.signIn = signin
}
//exports method  test1
module.exports = new LoginManager
