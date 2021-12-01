const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Courses = new Schema({
    name: {
        type: String,
        maxlength:245,
        // default: '',
        // minlength: 1
    },
    description: {
        type: String,
        maxlength: 600,
    },
    image: {
        type: String,
    },
    createAt: {
        type: Date,
        default:Date.now
    },
    updateAt: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Courses', Courses);