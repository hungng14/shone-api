const BaseController = require('./base');
const user_ser = require('../services/user');

class UserController extends BaseController{
    constructor() { super(); };

    index(req, res) {
        const params = {
            layout: 'user',
            title: 'Quản lý người dùng'
        };
        user_ser.update();
        return super.render_logined(req, res, 'user/index', params);
    }

    async create(req, res) {
        const result = await user_ser.create(req.body);
        return res.json(result);
    }

    update() {
        user_ser.update();
    }
}

const user_con_ins = new UserController();
module.exports = user_con_ins;