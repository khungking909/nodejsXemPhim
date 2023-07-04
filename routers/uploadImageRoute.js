const upload = require('../controllers/uploadController')
const express = require('express')
const router = express.Router()
router.post('/',upload.uploadImage)
module.exports = router