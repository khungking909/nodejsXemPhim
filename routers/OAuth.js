const authorization = require('../controllers/authorizationController')
const authToken = require('../middlewares/authToken')
const express = require('express')
const router = express.Router()
router.get('/',authToken,authorization.getData)
module.exports = router