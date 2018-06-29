const express =  require('express');
const formidable = require('formidable');
const model = require('../collections/article')
const router = express.Router();
router.post('/article',(req,res)=>{
    if(req.session._id){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            console.log(fields);
            let content = fields.content;
            model.create({
                userId: req.session._id,
                username: req.session.username,
                article: {
                    content: content,
                    date: Date.now()
                }
            },(err,article)=>{
                if(err){
                    res.json({
                        result: false
                    }).end()
                    throw err;
                }
                console.log('发布article成功');
                console.log(article)
                res.json({
                    result: true,
                    username: article.username,
                    article: article.article,
                    id: article._id
                }).end()
            })
        })
    }else{
        res.status(500).end()
    }
});
module.exports = router;