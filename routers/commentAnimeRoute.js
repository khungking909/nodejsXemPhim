const express = require('express')
const router = express.Router()
const commentAnimeController = require('../controllers/commentAnimeController')
router.post('/:id/addComments/:animeid',commentAnimeController.AddComments)
router.put('/:id',commentAnimeController.updateComments)
router.delete('/:id',commentAnimeController.deleteComments)
router.get('/:id',commentAnimeController.getAllCommentAnimeByIDAnime)
module.exports = router