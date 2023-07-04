const express = require('express')
const router = express.Router()
const FilmItemController = require('../controllers/filmItemController')
router.post('/',FilmItemController.AddFilmItem)
router.put('/:id',FilmItemController.updateFilmItem)
router.delete('/:id',FilmItemController.deleteFilmItem)
router.get('/details/:id/:episode',FilmItemController.getFilmItemByEpisodeFilm)
router.get('/:id',FilmItemController.getAllFilmItemByIDFilm)
module.exports = router