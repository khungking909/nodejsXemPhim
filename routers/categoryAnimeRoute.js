const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categoriesAnimeController')
router.get('/:id',categoriesController.getCategoriesByID)

router.post('/',categoriesController.AddCategories)
router.put('/:id',categoriesController.updateCategories)
router.delete('/:id',categoriesController.deleteCategories)
router.get('/',categoriesController.getAllCategories)
module.exports = router