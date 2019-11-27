module.exports = (router) => {
    require('./admin_login')(router);
    require('./user')(router);
};