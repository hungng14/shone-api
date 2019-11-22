const CrudService = require('./crud');
class UserService extends CrudService{
    constructor() {
        super();
    }
    async create(data) {
        const obj = {
            username: 'abc2',
            password: 'abc2',
            status: 1,
            role: 1,
            contact_o_id: '5dc377f06481462a7c9e05d4',
        };
        const result = await super.create(obj);
        return result;
    }
}

const user_instance = new UserService();
module.exports = user_instance;