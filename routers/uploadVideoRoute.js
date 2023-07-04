const upload = require('../controllers/uploadController')
const express = require('express')
const router = express.Router()
router.post('/',upload.uploadVideo)
module.exports = router