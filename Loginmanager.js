const UM = require('./Usermanager.js')

function LoginManager() {
	// Returns User object
	function getcurrentuser() {

	}

	// Return User object
	function signup(user) {
		return UM.createUser(user)
	}

	// Return User object or null
	function signin(username) {

	}

	this.getCurrentUser = getcurrentuser
	this.signUp = signup
	this.signIn = signin
}
//exports method  test1
module.exports = new LoginManager