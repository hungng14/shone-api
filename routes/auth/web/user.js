const user_con = require('../../../controllers/user');
module.exports = (router) => {
    router.get('/adm/user', user_con.index);
    router.post('/adm/user/create', user_con.create);
    router.post('/adm/user/update', user_con.update);
};

