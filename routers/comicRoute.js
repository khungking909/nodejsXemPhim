const express = require('express')
const router = express.Router()
const comicController = require('../controllers/comicController')

router.put('/:id',comicController.updateComics)
router.delete('/:id',comicController.deleteComics)
router.get('/:id',comicController.getComicByID)
router.post('/',comicController.AddComics)
router.get('/',comicController.getAllComics)
module.exports = router