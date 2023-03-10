module.exports = {
    port: process.env.PORT || 3000,
    dbConnectionString: process.env.MONGODB_URI || 'mongodb://localhost:27017/news-website',
    apiKey: process.env.API_KEY || 'my-api-key'
  }