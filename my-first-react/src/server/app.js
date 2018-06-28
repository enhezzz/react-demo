const express = require('express');
// const bodyParser = require('body-parser')
const userRouter = require('./router/user')
require('./db/index')
const session = require('express-session')
const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 600000 }}))
app.use(userRouter)
app.listen(80,'localhost',()=>{
    console.log('listen 80 port succeed...')
})