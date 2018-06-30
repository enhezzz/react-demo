const express = require('express');
const formidable = require('formidable');
const router = express.Router();
const userModel = require('../collections/user');
const articleModel = require('../collections/article');
const {resolve} = require('path')
const config = require('../../../config/index')
const DEDAULT_AVATAR = config.DEFAULT_AVATAR;
router.post('/register', (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, async function (err, fields, files) {
        let username = fields.username;
        let user = await (new Promise((resolve, reject) => {
            userModel.find({username}).exec((err, user) => {
                if (err) throw err;
                if (user[0]) {
                    reject(null)
                } else {
                    resolve(fields)
                }
            })
        }).catch(err => {
            return err;
        }))
        if (user) {
            userModel.create(user, (err, user) => {
                if (err) throw err;
                res.json({
                    result: true
                }).end()
            });

        } else {
            res.json({
                result: false,
                errorCode: 1
            }).end()
        }

    });
})
router.post('/login', (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, async function (err, fields, files) {
        userModel.findOne(fields).exec((err, user) => {
            if (err) {
                res.status(500).end();
                throw err;
            }
            if (user) {
                req.session._id = user._id;
                req.session.username = user.username;
                let avatarPath = user.avatarPath?user.avatarPath: DEDAULT_AVATAR
                res.json({
                    result: true,
                    username: user.username,
                    avatarPath
                }).end()
            } else {
                res.json({
                    result: false
                }).end()
            }
        })
    })
})
router.put('/logout', (req, res) => {
    req.session.destroy(function (err) {
        console.log('client退出当前会话');
        res.json({
            res: true
        }).end()
    })

})
router.get('/sessionInfo', (req, res) => {
    let _id = req.session._id;

    function _res(json) {
        (async function () {
            let articles = await (new Promise((resolve, reject) => {
                articleModel.find().exec((err, articles) => {
                    if (err) throw err;
                    articles = articles.map(article => {
                        return {
                            username: article.username,
                            id: article._id,
                            article: article.article
                        }
                    }).reverse();
                    resolve(articles)
                })
            }))
            res.json({
                ...json,
                articles
            }).end()
        })();


    }

    if (_id) {
        (async function () {
            let userInfo = await (new Promise((resolve, reject) => {
                userModel.findOne({_id}).exec((err, user) => {
                    if (err) throw err;
                    let avatarPath = user.avatarPath?user.avatarPath: DEDAULT_AVATAR
                    resolve({
                        me: '/me',
                        user: {
                            name: user.username,
                            avatarPath
                        }
                    })
                })
            }));
            _res(userInfo)
        })()


    } else {
        _res({
            me: '/login',
            user: {
                avatarPath: DEDAULT_AVATAR
            }
        })
    }
})
router.put('/avatar', (req, res) => {
    if (req.session._id) {
        var form = new formidable.IncomingForm();
        form.keepExtensions = true;
        form.uploadDir = resolve(__dirname, '../avatar');
        form.parse(req, function (err, fields, files) {
            let avatarPath = files.avatar.path.match(/\\avatar[\s\S/]*/)[0].replace(/\\/g,'/');
            userModel.findByIdAndUpdate(req.session._id,{$set: {avatarPath: avatarPath}}).exec((err,user)=>{
                console.log('更新头像成功')
                res.json({
                    avatarPath
                }).end()
            })
        })
    }else{
        res.status(500).end()
    }
})
module.exports = router
