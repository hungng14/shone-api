class BaseController{
    constructor() { }
    
    render_no_logined(req, res, path, params) {
        return res.render(path, params);
    }
    render_logined(req, res, path, params = {}) {
        return res.render(path, params);
    }
}
module.exports = BaseController;