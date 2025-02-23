const express = require('express')
const router = express.Router()
const {authenticate} = require('../middlewares/authenticate')
const userController = require('../controllers/user-controller')
const upload = require('../middlewares/upload')

// @ENDPOINT http://localhost:8899/api/user/...
router.put('/profile', authenticate, upload.single('image'), userController.updateProfile)
router.post('/challenge', authenticate, ()=>{})
router.get('/challenge', authenticate, ()=>{})
router.get('/challenge/:id', authenticate, ()=>{})
router.delete('/challenge/:id', authenticate, ()=>{})
router.put('/challenge/:id', authenticate, ()=>{})
router.put('/challenge/:id', authenticate, ()=>{})


module.exports = router

