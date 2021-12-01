const Courses = require('../models/Courses');
class SitesController {

    // [GET] /
    home(req, res) {
        Courses.find({}, function(err,courses) {
            if (!err) res.json(courses);
            else res.status(400).json({error: 'ERROR' });
        }) 
        // res.render('home');
        // res.json({
        //     name:'test'
        // });
    }

    // [GET] /search
    search(req, res) {
        res.send('search')
    }

}

module.exports = new SitesController;
