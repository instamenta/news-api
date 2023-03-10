const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const News = mongoose.model('News', newsSchema);

module.exports = News;