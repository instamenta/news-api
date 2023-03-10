const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const Joi = require('joi');

const app = new Koa();
const router = new Router();

// Use the bodyParser middleware to parse the request body
app.use(bodyParser())

// Set up a connection to MongoDB using Mongoose
require('./db')

// Define a schema for the data that you expect to receive in the request:
const schema = Joi.object(
    {
        date: Joi.date().required(),
        title: Joi.string().required(),
        shortDescription: Joi.string().required(),
        text: Joi.string().required(),
    }
)

// Define a route handler that uses the schema to validate the request data:
router.post('/news', async (ctx) => {
    const { body } = ctx.request
    try {
        // Validate the request data against the schema
        await schema.validateAsync(body)

        // Save the news to the database
        const News = require('./models/news')
        const news = new News(body)

        await news.save()
        ctx.status = 201
        ctx.body = news
    } catch (err) {
        ctx.status = 400
        ctx.body = { message: err.message }
    }
})
router.get('/', async (ctx) => {
    try {
      const News = require('./models/news')
      const news = await News.find()
      ctx.body = news
    } catch (err) {
      ctx.status = 500
      ctx.body = { message: err.message }
    }
  })

app.use(router.routes())

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})