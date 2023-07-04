const express = require('express')
const router = express.Router()
const AnimeItemController = require('../controllers/animeItemController')
router.post('/',AnimeItemController.AddAnimeItem)
router.put('/:id',AnimeItemController.updateAnimeItem)
router.delete('/:id',AnimeItemController.deleteAnimeItem)
router.get('/details/:id/:episode',AnimeItemController.getAnimeItemByEpisodeAnime)
router.get('/:id',AnimeItemController.getAllAnimeItemByIDAnime)
module.exports = router