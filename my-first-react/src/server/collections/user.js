const mongoose = require('mongoose')
const schemaRule = require('../schemas/user')
const schema = new mongoose.Schema(schemaRule);
module.exports = mongoose.model('user',schema);
