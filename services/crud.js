const BaseService = require('./base');
const userModel = require('../models/user');
class CrudService extends BaseService{
    constructor() {
        super();
        this.user_coll = userModel;
    }
    create(data) {
        const coll_name = this.__coll_name;
        const promise = this[`${coll_name}_coll`].create(data);
        return Promise.resolve(promise).then((res) => {
            return res;
        }).catch(err => err);
    }
    update() {
        console.log(this.me());
    }
}
module.exports = CrudService;