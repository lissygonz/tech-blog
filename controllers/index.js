const router = require('express').Router();

// router.use('/dashboard',require('./dashboard-routes'));
router.use('/api',require('./api'));
router.use('/',require('./home-routes'));

module.exports = router;
