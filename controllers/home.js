const BaseController = require('./base');

class HomeController extends BaseController{
    constructor() { super(); };

    index(req, res) {
        const params = {
            layout: 'home',
            title: 'Home'
        };
        return super.render_logined(req, res, 'home/index', params);
    }
}

const con_ins = new HomeController();
module.exports = con_ins;