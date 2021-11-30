const newsRouter = require('./NewsRoute')
const sitesRouter = require('./SitesRoute')

function route(app) {
    app.use ('/news',newsRouter) // các tuyến đường của news, là cấp con nhỏ hơn của news
    app.use ('/',sitesRouter)
}

module.exports = route;