const login_con = require('../../../controllers/login');
module.exports = (router) => {
    router.get('/', login_con.index);
};
