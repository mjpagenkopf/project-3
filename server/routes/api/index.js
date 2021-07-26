const router = require('express').Router();
const baseballRoutes = require('./baseball-routes');

router.use('/baseball', baseballRoutes);

module.exports = router;