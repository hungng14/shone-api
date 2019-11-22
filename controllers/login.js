const BaseController = require('./base');

class LoginController extends BaseController{
    constructor() { super(); };

    index(req, res) {
        const params = {
            layout: 'login',
            title: 'Shone web'
        };
        return super.render_no_logined(req, res, 'login/index', params);
    }
}

const login_con_ins = new LoginController();
module.exports = login_con_ins;