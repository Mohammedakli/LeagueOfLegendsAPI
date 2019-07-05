const { Router } = require('express');
const basicsRouter = require('../modules/basics/router');

const router = new Router();

// Service  API
router.use(basicsRouter);


module.exports = router;
