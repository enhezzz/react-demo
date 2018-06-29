const rule = require('../schemas/article')
const mongoose = require('mongoose');
const schema = new mongoose.Schema(rule);
module.exports = mongoose.model('article',schema)