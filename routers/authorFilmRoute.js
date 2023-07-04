const express = require('express')
const router = express.Router()
const AuthorFilmController = require('../controllers/authorFilmController')
router.post('/',AuthorFilmController.AddAuthors)
router.put('/:id',AuthorFilmController.updateAuthors)
router.delete('/:id',AuthorFilmController.deleteAuthors)
router.get('/:id',AuthorFilmController.getAuthorByID)
router.get('/',AuthorFilmController.getAllAuthors)
module.exports = router