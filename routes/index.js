var express = require('express');
var router = express.Router();

/* GET home page. */
require('./admin/index')(router);
require('./no_admin/index')(router);

module.exports = router;