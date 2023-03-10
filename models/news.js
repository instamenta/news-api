const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    title: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
    },
    text: {
        type: String,
    },
})

const News = mongoose.model('News', newsSchema)

module.exports = News