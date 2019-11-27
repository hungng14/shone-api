const CrudService = require('./crud');
const { STATUS, ROLES } = require('../settings/config').settings;
class UserService extends CrudService{
    constructor() {
        super();
    }
    async create(data) {
        const obj = {
            username: data.username || data.email,
            email: data.email,
            password: data.password,
            status: STATUS.new,
            role: ROLES.member,
            contact_o_id: '5dc377f06481462a7c9e05d4',
        };
        const result = await super.create(obj);
        return result;
    }
}

const user_instance = new UserService();
module.exports = user_instance;