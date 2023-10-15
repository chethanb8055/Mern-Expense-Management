const mongoose = require("mongoose")

//schema design

const useSchema = new mongoose.Schema({
    name:{
        type:String,
        required :[true,"name is required"]

    },
    email:{
        type:String,
        require:[true,"email is required and should br unique"]
        ,unique:true
    },
    password:{
            type:String,
            required:[true,"password is required"]
    },


},{timestamps:true})


const useModel = mongoose.model("user",useSchema)

module.exports = useModel