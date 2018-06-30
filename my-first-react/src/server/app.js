const express = require('express');
// const bodyParser = require('body-parser')
const userRouter = require('./router/user')
const articleRouter = require('./router/article')
const {resolve} = require('path')
require('./db/index')
const session = require('express-session')
const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(resolve(__dirname)))
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 600000 }}))
app.use(userRouter);
app.use(articleRouter)
app.listen(80,'localhost',()=>{
    console.log('listen 80 port succeed...')
})