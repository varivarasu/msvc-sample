const axios = require('axios')
const SERVICEURL = 'http://userservice:4000/api/user/'

function umproxy() {

    function getuser(id) {
        return new Promise(function getuserpromise(resolve, reject) {
            axios.get(SERVICEURL + id).then(response => {
                resolve(response.data)
            }).catch(err => {
                reject({ status: 'GetUserError', details: err })
            })
        })
    }

    function getallusers() {
        return new Promise(function getuserpromise(resolve, reject) {
            axios.get(SERVICEURL).then(response => {
                resolve(response.data)
            }).catch(err => {
                reject({ status: 'GetAllUsersError', details: err })
            })
        })
    }

    function postuser(newusername) {
        return new Promise(function getuserpromise(resolve, reject) {
            axios.post(SERVICEURL, { username: newusername}).then(response => {
                resolve(response.data)
            }).catch(err => {
                reject({ status: 'PostUserError', details: err })
            })
        })
    }

    this.getUser = getuser
    this.getAllUsers = getallusers
    this.postUser = postuser
}

module.exports = new umproxy