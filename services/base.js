const utils = require('../utils/utils');
class BaseService{
    constructor() {
        this.__coll_name = utils.coll_name(this.constructor.name);
    };
    me() {
        return this.constructor.name;
    };
}
module.exports = BaseService;