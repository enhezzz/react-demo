const express = require('express');
const formidable = require('formidable');
const router = express.Router();
const model = require('../collections/user')
const session = require('express-session')
// const userModel = this.model('user');
router.post('/register',(req,res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req, async function(err, fields, files) {
        // let user = userModel(fields)
        let username = fields.username;
        let user = await (new Promise((resolve,reject)=>{
            model.find({username}).exec((err,user)=>{

                if(err) throw err;
                if(user[0]){
                    reject(null)
                }else{
                    resolve(fields)
                }
            })
        }).catch(err=>{
            return err;
        }))
        // console.log(user)
        if(user){
            model.create(user,()=>{
                console.log('register succeed...');
                res.json({
                    result: true
                }).end()
            })
        }else{
            res.json({
                result: false,
                errorCode: 1
            }).end()
        }

    });
})
router.post('/login',(req,res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req, async function(err, fields, files) {
        model.findOne(fields).exec((err,user)=>{
            if(err){
                res.status(500).end();
                throw err;
            }
            if(user){
                req.session._id = user._id;
                res.json({
                    result: true,
                    username: user.username
                }).end()
            }else{
                res.json({
                    result: false
                }).end()
            }
        })
    })
})
router.put('/logout',(req,res)=>{
    req.session.destroy(function(err) {
        console.log('client退出当前会话');
        res.json({
            res: true
        }).end()
    })

})
router.get('/sessionInfo',(req,res)=>{
    let _id = req.session._id;
    if(_id){
        model.findOne({_id}).exec((err,user)=>{
            console.log(user)
            if(err) throw err;
            res.json({
                me: '/me',
                user: {
                    name: user.username
                }
            }).end()
        })
    }else{
       res.json({
           me: '/login',
           user: {}
       }).end()
    }
})
module.exports = router
