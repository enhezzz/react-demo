const mongoose = require('mongoose');
module.exports = {
    userId: mongoose.Schema.Types.ObjectId,
    username: String,
    article: {
        content: String,
        date: Date
    }
}