const express = require('express');
// const bodyParser = require('body-parser')
const userRouter = require('./router/user')
const articleRouter = require('./router/article');
const {resolve} = require('path')
const fs = require('fs');
require('./db/index')
const session = require('express-session')
const prodApp = express();
prodApp.use(express.static(resolve(__dirname)))
prodApp.use(express.static(resolve(__dirname,'../../dist')))
prodApp.use(session({ secret: 'keyboard cat', cookie: { maxAge: 600000 }}))
prodApp.use(userRouter);
prodApp.use(articleRouter);
prodApp.use((req,res)=>{
    let file = fs.readFileSync(resolve(__dirname,'../../dist/index.html'),{
        encoding: 'utf-8'
    });
    res.send(file).end()
})
prodApp.listen(80,'localhost',()=>{
    console.log('listen 80 port succeed...')
})