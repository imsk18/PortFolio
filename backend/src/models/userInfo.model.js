const mongoose = require('mongoose')
const userInfoSchema = new mongoose.Schema({
    Name:String,
    email:String,
    message:String,
})
const userModel = mongoose.model("UserInfo",userInfoSchema)
module.exports = userModel