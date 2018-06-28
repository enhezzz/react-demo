const express = require('express');
// const bodyParser = require('body-parser')
const userRouter = require('./router/user')
require('./db/index')
const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(userRouter)
app.listen(80,'localhost',()=>{
    console.log('listen 80 port succeed...')
})