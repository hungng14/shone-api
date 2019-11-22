module.exports = (router) => {
    require('./app/all')(router);
    require('./web/all')(router);
};