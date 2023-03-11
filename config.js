module.exports = {
    port: 3000,
    dbConnectionString: process.env.MONGODB_URL || 'mongodb://db:27017/news-app',
    // apiKey: process.env.API_KEY || 'my-api-key'
  }