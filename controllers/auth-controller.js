
const createError = require('../utils/createError')

exports.register = (req, res, next) => {

  function checkEmailOrMobile(identity) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10,15}$/
  
    let identityKey = ''
    if (emailRegex.test(identity)) {
      identityKey = 'email'
    }
    if (mobileRegex.test(identity)) {
      identityKey = 'mobile'
    }
    if (!identityKey) {
      createError(400, 'only Email or Mobile phone')
    }
    return identityKey
  }

  try {
    // code
    // step 1 req.body
    const {identity, name, password, confirmPassword} = req.body

    // step 2 Vaidate
    if(!(identity.trim() && name.trim() && password.trim() && confirmPassword.trim())) {
      createError(400, 'Please fill in all data')
    }

    if(password !== confirmPassword) {
      createError(400, 'Please check Confirm-password')
    }

    // identity is email or phone number
    const identitykey =  checkEmailOrMobile(identity)
    console.log(identitykey)




    // step 3 Check already
    // step 4 Encrypt by bcrypt
    // step 5 insert to DB
    // step 6 response

    res.json({message: 'Hello, register'})
  } catch (error) {
    console.log('step 2 catch')
    next(error)
  }
}

exports.login = (req, res, next) => {
  try {
    res.json({message: 'Hello, login'})
  } catch (error) {
    console.log('step 2 catch')
    next(error)
  }
}