const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth-controller')

// @ENDPOINT http://localhost:8899/api/auth/...
router.post('/register', authController.register)
router.post('/login', authController.login)


module.exports = router