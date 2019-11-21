const moment_tz = require('moment-timezone');
moment_tz().tz('Asia/Ho_Chi_Minh');
module.exports = {
    generatorTime: moment_tz(),
};