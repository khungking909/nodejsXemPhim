const express = require('express')
const router = express.Router()
const commentFilmController = require('../controllers/commentFilmController')
router.post('/:id/addComments/:filmid',commentFilmController.AddComments)
router.put('/:id',commentFilmController.updateComments)
router.delete('/:id',commentFilmController.deleteComments)
router.get('/:id',commentFilmController.getAllCommentFilmByIDFilm)
module.exports = router