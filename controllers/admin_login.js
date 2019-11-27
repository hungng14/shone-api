const BaseController = require('./base');

class AdminLoginController extends BaseController{
    constructor() { super(); };

    index(req, res) {
        const params = {
            layout: 'admin_login',
            title: 'Shone web'
        };
        return super.render_no_logined(req, res, 'admin_login/index', params);
    }
}

const con_ins = new AdminLoginController();
module.exports = con_ins;