const express = require('express')
const router = express.Router()
const AuthorComicController = require('../controllers/authorComicController')
router.post('/',AuthorComicController.AddAuthors)
router.put('/:id',AuthorComicController.updateAuthors)
router.delete('/:id',AuthorComicController.deleteAuthors)
router.get('/:id',AuthorComicController.getAuthorByID)
router.get('/',AuthorComicController.getAllAuthors)
module.exports = router