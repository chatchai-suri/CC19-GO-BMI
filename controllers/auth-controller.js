exports.register = (req, res, next) => {
  try {
    res.json({message: 'Hello, register'})
  } catch (error) {
    res.status(500).json({message: 'Server Error!'})
    next(error)
  }
}

exports.login = (req, res, next) => {
  try {
    res.json({message: 'Hello, login'})
  } catch (error) {
    res.status(500).json({message: 'Server Error!'})
    next(error)
  }
}