const home_con = require('../../../controllers/home');
module.exports = (router) => {
    router.get('/home', home_con.index);
};
