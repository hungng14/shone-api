const userModel = require('../models/user');
const obj = {
    username: 'shone',
    password: 'test',
    status: 1,
    role: 1,
    contact_o_id: '5dba983934866d56e4e9648e',
};
userModel.create(obj, (err, data) => {
        console.log(err);
        console.log(data); 
});