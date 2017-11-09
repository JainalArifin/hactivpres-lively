const express = require('express')
const router = express.Router()
const article = require('../controllers/articles')
const auth = require('../helper/aut')

router.post('/', auth.login, article.create)
router.get('/', article.all)
router.get('/:id', article.findById)
router.put('/:id', auth.login, article.update)
router.delete('/:id', auth.login, article.remove)

module.exports = router
