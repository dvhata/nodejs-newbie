const express = require('express');
const NewsController = require('../app/controllers/NewsController');
const router = express.Router();

// newsController.index

router.get('/:slug', NewsController.show )
router.get('/', NewsController.index )


module.exports = router;