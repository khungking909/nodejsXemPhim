const express = require('express')
const router = express.Router()
const filmController = require('../controllers/filmController')
router.get('/categories/:id',filmController.getFilmByCategories)
router.get('/:id/character',filmController.getCharacterFilmByIDFilm)
router.post('/:id/character',filmController.addCharacterFilmToFilmID)
router.put('/character/:id',filmController.updateCharacterFilmByID)
router.delete('/character/:id',filmController.deleteCharacterFilmByID)
router.put('/:id',filmController.updateFilms)
router.delete('/:id',filmController.deleteFilms)
router.get('/search/:search',filmController.getFilmByName)
router.get('/:id',filmController.getFilmByID)
router.post('/',filmController.AddFilms)
router.get('/',filmController.getAllFilms)
module.exports = router