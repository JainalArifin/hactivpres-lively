const User = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
  register: (req, res) => {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(req.body.password, salt)
    let user = new User({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role
    })
    user.save((err, dataUser) => {
      if (err) {
        // console.error(err)
        res.send(err)
      } else {
        res.send(dataUser)
      }
    })
  },
  login: (req, res) => {
    User.findOne({
      username: req.body.username
    }, (err, dataUser) => {
      if (err) {
        res.send(err)
      } else {
        console.log('data user mau masuk', dataUser)
        if (dataUser === null) {
          res.send('akun anda belum terdaftar')
        } else {
          var token = jwt.sign({
            id: dataUser._id,
            username: dataUser.username,
            role: dataUser.role
          }, process.env.DB_PASS)
          res.send(token)
        }
      }
    })
  }
}
