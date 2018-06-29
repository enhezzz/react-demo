const express = require('express');
const formidable = require('formidable');
const router = express.Router();
const userModel = require('../collections/user');
const articleModel = require('../collections/article')
router.post('/register',(req,res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req, async function(err, fields, files) {
        let username = fields.username;
        let user = await (new Promise((resolve,reject)=>{
            userModel.find({username}).exec((err,user)=>{
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
        if(user){
            userModel.create(user,(err,user)=>{
                if(err) throw err;
                res.json({
                    result: true
                }).end()
            });

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
        userModel.findOne(fields).exec((err,user)=>{
            if(err){
                res.status(500).end();
                throw err;
            }
            if(user){
                req.session._id = user._id;
                req.session.username = user.username;
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
    function _res(json){
        (async function(){
           let articles =  await (new Promise((resolve,reject)=>{
                articleModel.find().exec((err,articles)=>{
                    if(err) throw err;
                    articles = articles.map(article=>{
                        return {
                            username: article.username,
                            id: article._id,
                            article: article.article
                        }
                    })
                    resolve(articles)
                })
            }))
            res.json({
                ...json,
                articles
            }).end()
        })();


    }

    if(_id){
        (async function(){
            let userInfo = await (new Promise((resolve,reject)=>{
                userModel.findOne({_id}).exec((err,user)=>{
                    if(err) throw err;
                    resolve({
                        me: '/me',
                        user: {
                            name: user.username
                        }
                    })
                })
            }));
         _res(userInfo)
        })()


    }else{
        _res({
            me: '/login',
            user: {}
        })
    }
})
module.exports = router
