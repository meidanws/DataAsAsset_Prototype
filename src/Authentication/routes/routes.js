const { response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModles')
const bcrypt = require('bcrypt')

// Register
router.post('/signup',(request,response) => {
   const signUpUser = new signUpTemplateCopy({
       fullName:request.body.fullName,
       userName:request.body.userName,
       email:request.body.email,
       password:request.body.password
   })
   signUpUser.save()
   .then(data =>{
       response.json(data)
   })
   .catch(error =>{
    response.json(error)
   })
})

// Login
router.get('/login',async (req,res) => {
    try{
        const posts = await signUpTemplateCopy.find();
        if (!posts) throw Error('Somthing went wrong')
        res.status(200).json(posts)
    }
    catch(err){
        res.status(400).json({ msg: err})
    } 
 });



module.exports = router