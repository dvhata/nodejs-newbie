const express = require('express');
const SitesController = require('../app/controllers/SitesController');
const router = express.Router();

// SitesController.index

router.use('/search', SitesController.search )
router.use('/', SitesController.home) // Bao giờ cũng để / ở cuối cùng (vì nếu để / nó sẽ luôn chọc vào home)


module.exports = router;