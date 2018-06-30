const express = require('express');
// const bodyParser = require('body-parser')
const userRouter = require('./router/user')
const articleRouter = require('./router/article')
const {resolve} = require('path')
require('./db/index')
const session = require('express-session')
const devApp = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
devApp.use(express.static(resolve(__dirname)))
devApp.use(session({ secret: 'keyboard cat', cookie: { maxAge: 600000 }}))
devApp.use(userRouter);
devApp.use(articleRouter)
devApp.listen(80,'localhost',()=>{
    console.log('listen 80 port succeed...')
})