const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  content: String,
  category: String,
  imgUrl: String,
  author: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }]
})

const article = mongoose.model('article', articleSchema)

module.exports = article
