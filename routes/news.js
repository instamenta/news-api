const Router = require('@koa/router')
const { getAllNews, getNewsById, createNews, updateNews, deleteNews } = require('../controllers/news')

const router = new Router()

router.get('/news', getAllNews)
router.get('/news/:id', getNewsById)
router.post('/news', createNews)
router.put('/news/:id', updateNews)
router.delete('/news/:id', deleteNews)

module.exports = router