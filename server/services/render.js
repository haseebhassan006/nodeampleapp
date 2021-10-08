const axios = require('axios')

exports.HomeRoute = (req, res) => {

    axios.get('http://127.0.0.1:3000/')
        .then(function(response) {
            console.log(response)
            res.render('home')
        }).catch(err => {
            res.send(err)
        })

}
exports.addUser = (req, res) => {
    res.redirect('/add-user')
}