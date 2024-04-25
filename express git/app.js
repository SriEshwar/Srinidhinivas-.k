

const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop');
const path = require('path');


app.use(shoproutes)
app.use(adminroutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.use(bodyparser.urlencoded())

app.listen(3000);