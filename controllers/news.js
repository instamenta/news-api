const News = require('../models/news')

exports.getAllNews = async (ctx, next) => {
    const { sortBy, sortOrder, keyword, page, pageSize } = ctx.query
    const skip = (page - 1) * pageSize
    const limit = parseInt(pageSize)

    let sortObj = {}

    if (sortBy && sortOrder) {
        sortObj[sortBy] = sortOrder === 'asc' ? 1 : -1
    }
    const query = keyword ? { $text: { $search: keyword } } : {}

    const [news, count] = await Promise.all([
        News.find(query).sort(sortObj).skip(skip).limit(limit),
        News.countDocuments(query)
    ])
    ctx.body = { news, count }
}

exports.getNewsById = async (ctx, next) => {
    const { id } = ctx.params;
    const news = await News.findById(id)
    if (news) {
        ctx.body = news
    } else {
        ctx.status = 404
        ctx.body = { error: 'News not found' }
    }
}

exports.createNews = async (ctx, next) => {
    const { date, title, shortDescription, text } = ctx.request.body
    const news = new News({ date, title, shortDescription, text })
    try {
        await news.save()
        ctx.status = 201
        ctx.body = news
    } catch (err) {
        ctx.status = 400
        ctx.body = { error: err.message }
    }
}

exports.updateNews = async (ctx, next) => {
    const { id } = ctx.params
    const { date, title, shortDescription, text } = ctx.request.body

    const news = await News.findByIdAndUpdate(id, { date, title, shortDescription, text }, { new: true })

    if (news) {
        ctx.body = news;
    } else {
        ctx.status = 404
        ctx.body = { error: 'News not found' }
    }
}

exports.deleteNews = async (ctx, next) => {
    const { id } = ctx.params;
    const news = await News.findByIdAndDelete(id)

    if (news) {
        ctx.body = { message: 'News deleted successfully' }
    } else {
        ctx.status = 404
        ctx.body = { error: 'News not found' }
    }
}