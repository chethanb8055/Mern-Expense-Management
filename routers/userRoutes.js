const express = require("express")
const { models } = require("mongoose")
const  {loginController,registerController} = require("../controllers/userControler")

const router =express.Router()



//router

//POST || Login

router.post('/login',loginController)

//POST || REGISTER USER
router.post("/register",registerController)


module.exports =router