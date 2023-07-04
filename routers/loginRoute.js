require('../middlewares/auth-local')
require('dotenv').config()
const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
//Local
router.post('/local',(req,res) =>{
    passport.authenticate('local', {session:false},(err,user,info)=>
    {
       
        if(user!=undefined) 
        {
            let token = {
                id : user.id,
                username: user.username,
                role:user.role,
                name: user.name,
                gender:user.gender,
                age:user.age,
                image:user.image,
                VIP:user.VIP,
                phonenumber:user.phonenumber,
                address:user.address
            }
            let accessToken = jwt.sign(token,process.env.SECRET_KEY)
            res.status(200).json({
                errCode:1,
                accessToken
            })
        }
        else res.status(404).json({errCode:0})
    })(req, res)
})
module.exports = router