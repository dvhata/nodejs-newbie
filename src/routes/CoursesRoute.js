const express = require('express');
const CoursesController = require('../app/controllers/CoursesController');
const router = express.Router();

// CoursesController.index

router.get('/:slug', CoursesController.show )

module.exports = router;