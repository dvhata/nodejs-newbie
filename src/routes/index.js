const newsRouter = require('./NewsRoute')
const sitesRouter = require('./SitesRoute')
const coursesRouter = require('./CoursesRoute')

function route(app) {
    app.use ('/courses',coursesRouter)
    app.use ('/news',newsRouter) // các tuyến đường của news, là cấp con nhỏ hơn của news
    app.use ('/',sitesRouter)
}

module.exports = route;