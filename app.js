const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const mongoose = require('mongoose')
const router = require('./routes/news')
const config = require('./config')

// Create Koa
const app = new Koa()

// Set up middleware
app.use(cors())
app.use(bodyParser())

// Set up database connection
mongoose.connect(config.dbConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
  
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err))

// Set up routes
app.use(router.routes())
app.use(router.allowedMethods())

// Start server
app.listen(config.port, "0.0.0.0", () => {
  console.log(`Server running on port ${config.port}`)
})