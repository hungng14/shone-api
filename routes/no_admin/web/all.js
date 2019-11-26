module.exports = (router) => {
    require('./login')(router);
    require('./home')(router);
};