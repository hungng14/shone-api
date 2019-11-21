const mongoose = require('mongoose');
const db_config = require('../settings/config').settings.DB;
const { NODE_ENV = 'development' } = process.env;
let uri = '';
if (NODE_ENV === 'production') {
    uri = `mongodb://${db_config.username}:${db_config.password}@${db_config.host}:${db_config.port}/${db_config.name}`;
} else {
    uri = `mongodb://${db_config.host}:${db_config.port}/${db_config.name}`;
}
mongoose.connect(uri, (err) => {
    if (err) {
        console.log('Connecting to Database failed!');
    } else {
        console.log('Connecting to Database success!');
    }
});