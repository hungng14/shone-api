var express = require('express');
var router = express.Router();

/* GET home page. */
require('./auth/index')(router);
require('./no_auth/index')(router);

module.exports = router;