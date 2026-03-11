const express = require('express')
const userModel = require('./models/userInfo.model')
const cors = require('cors')
const App = express()
App.use(cors())
App.use(express.json())

App.post('user',async(req,res)=>{
    const {Name,email,message} = req.body
    const data = await userModel.create({
        Name,
        email,
        message
    })
    res.status(200).json({
        message:"success!",
        data
    })
})

module.exports= App