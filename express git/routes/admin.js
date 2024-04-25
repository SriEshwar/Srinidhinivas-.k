const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add-product.html'))
})

router.post('/add-product',(req,res,next)=>{
    console.log('second middleware')
    console.log("form data",req.body);
    res.send('<b>product submitted </b>')   
})

module.exports = router