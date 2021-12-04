const { multipleMongooseToObject } = require('../../util/moongoose');
const Courses = require('../models/Courses');
class SitesController {

    // [GET] /
    home(req, res, next) {
        Courses.find({})
            .then(courses => {
                res.render('home', { 
                    courses :  multipleMongooseToObject(courses) 
                })
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.send('search')
    }

}

module.exports = new SitesController;
