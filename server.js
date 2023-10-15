const express = require("express")
const cors =require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const colors = require("colors")
const connectDb = require("./config/connectDb")
require('dotenv').config()

// rest object 
const app = express()

// const useRegister = require("./routers/userRoutes")

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
// app.use("/",useRegister)


//datacase call 
connectDb()

//user routes
app.use('/api/v1/users',require('./routers/userRoutes'))
//transection routes
app.use('/api/v1/transections',require("./routers/transectionRoutes"))

const PORT = 8080 || process.env.PORT
//listen server
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})

//yTOJi74l8c5QqUIA