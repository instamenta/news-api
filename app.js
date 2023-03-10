const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const router = require('./routes/news')
const config = require('./config')

const app = new Koa()

// Set up middleware
app.use(bodyParser())

// Set up database connection
mongoose.connect(config.dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err))

// Set up routes
app.use(router.routes())
app.use(router.allowedMethods())

// Start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})