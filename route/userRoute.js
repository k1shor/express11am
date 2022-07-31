const express = require('express')
const { addUser, userConfirmation, resendConfirmation, forgetpassword, resetPassword, signIn, signOut, updateUser, requireSignin, deleteUser, userList, userDetails } = require('../controller/userController')
const { userRules, validate } = require('../validation')
const router = express.Router()

router.post('/register', userRules, validate, addUser)
router.get('/verifyUser/:token', userConfirmation)
router.post('/resendconfirmation', resendConfirmation)
router.post('/forgetpassword', forgetpassword)
router.post('/resetpassword/:token', resetPassword)
router.post('/signin', signIn)
router.get('/signout', signOut)
router.put('/updateuser/:id', requireSignin, updateUser)
router.delete('/deleteuser/:id', deleteUser)
router.get('/userlist', userList)
router.get('/userdetails/:id', userDetails)

module.exports = router