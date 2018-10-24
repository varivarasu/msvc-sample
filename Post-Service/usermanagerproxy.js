const axios = require('axios')
const SERVICEURL = 'http://localhost:4000/api/user/'

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

    this.getUser = getuser
}

module.exports = new umproxy