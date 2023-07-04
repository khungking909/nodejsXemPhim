const express = require('express')
const router = express.Router()
const AuthorAnimeController = require('../controllers/authorAnimeController')
router.post('/',AuthorAnimeController.AddAuthors)
router.put('/:id',AuthorAnimeController.updateAuthors)
router.delete('/:id',AuthorAnimeController.deleteAuthors)
router.get('/:id',AuthorAnimeController.getAuthorByID)
router.get('/',AuthorAnimeController.getAllAuthors)
module.exports = router