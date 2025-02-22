
require('dotenv').config()
const helmet = require("helmet")
const express = require("express")
const cors  = require("cors")
const morgan = require("morgan")
const authRoute = require('./routes/auth-route')


const app = express()

// Middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())



// Routhing
app.use('/api/auth', authRoute)
app.use('/api/user', ()=>{})

// Middlewares Error
app.use((err, req, res, next) => {
  console.log(err)
  res.status(err.statusCode || 500).json({message: err.message || 'Inernal server Error'})
})

// Start Server
const port = process.env.PORT || 8000
app.listen(port, ()=> console.log("Server is running on", port))