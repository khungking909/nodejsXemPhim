const express = require('express')
const router = express.Router()
const accountController = require('../controllers/accountController')

router.get('/favoriteFilms/:id',accountController.getAllListFavoritesByID)
router.post('/favoriteFilms/:id',accountController.addFavoritesFilmByAccountID)
router.delete('/favoriteFilms/:idaccount/delete/:idfilm',accountController.deleteFavoritesFilmByIDFilmOfUser)

router.get('/favoriteAnimes/:id',accountController.getAllListFavoritesAnimeByID)
router.post('/favoriteAnimes/:id',accountController.addFavoritesAnimeByAccountID)
router.delete('/favoriteAnimes/:idaccount/delete/:idanime',accountController.deleteFavoritesAnimeByIDAnimeOfUser)

router.post('/',accountController.AddAccount)
router.put('/changepass/:id',accountController.HandleChangePassWord)
router.put('/:id',accountController.updateAccount)
router.delete('/:id',accountController.deleteAccount)
router.get('/user',accountController.getAllAccountByRoleUser)
router.get('/:id',accountController.getAccountByID)
router.get('/',accountController.getAllAccount)

module.exports = router