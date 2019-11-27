const admin_login = require('../../../controllers/admin_login');
module.exports = (router) => {
    router.get('/adm/login', admin_login.index);
};

