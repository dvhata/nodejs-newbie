const { multipleMongooseToObject, singleMongooseToObject } = require('../../util/moongoose');
const Courses = require('../models/Courses');
class CoursesController {

    // [GET] /courses/::slug
    show(req,res, next) {
       Courses.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', {course: singleMongooseToObject(course)})
            })
            .catch(next)
    }
   
}

module.exports = new CoursesController;
