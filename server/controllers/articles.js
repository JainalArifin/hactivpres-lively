const Article = require('../models/articles')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const ObjectId = require('mongodb').ObjectId

module.exports = {
  create: (req, res) => {
    let user = jwt.verify(req.headers.token, process.env.DB_PASS, (err, user) => {
      let article = new Article({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        imgUrl: req.body.imgUrl,
        author: user.id
      })
      article.save((err, dataArticle) => {
        if (err) {
          res.send(err)
        } else {
          res.send(dataArticle)
        }
      })
    })
  },
  all: (req, res) => {
    Article.find((err, dataArticle) => {
      if (err) {
        res.send(err)
      } else {
        res.send(dataArticle)
      }
    }).populate('author')
  },
  findById: (req, res) => {
    Article.findById({
      _id: req.params.id
    }, (err, dataArticle) => {
      if (err) {
        res.send(err)
      } else {
        res.send(dataArticle)
      }
    })
  },
  update: (req, res) => {
    Article.findOneAndUpdate({
      _id: ObjectId(req.params.id)
    }, {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      imgUrl: req.body.imgUrl
    }, (err, dataArticle) => {
      if (err) {
        res.send(err)
      } else {
        res.send(dataArticle)
      }
    })
  },
  remove: (req, res) => {
    Article.remove({
      _id: req.params.id
    }, (err, dataArticle) => {
      if (err) {
        res.send(err)
      } else {
        res.send(dataArticle)
      }
    })
  }
}
