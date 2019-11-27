const mongoose = require('mongoose');
const auto_increment = require('mongoose-auto-increment');
const { Schema } = mongoose;
const { generatorTime } = require('../utils/shared');
const { ENUM_STATUS, STATUS, ENUM_ROLES } = require('../settings/config').settings;
const userSchema = new Schema({
    username: { type: String, unique: true, required: true, index: true },
    email: { type: String, unique: true, required: true, index: true },
    password: { type: String, required: true },
    status: { type: Number, default: STATUS.new, required: true, enum: ENUM_STATUS, index: true },
    role: { type: Number, required: true, enum: ENUM_ROLES, index: true },
    contact_o_id: { type: mongoose.Schema.Types.ObjectId, ref: 'contact', required: true },
    created_at: { type: Date, required: true, default: generatorTime },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    updated_at: { type: Date,},
    updated_by: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
}, {collection: 'user'});
auto_increment.initialize(mongoose.connection);
userSchema.plugin(auto_increment.plugin, {
    model: 'user',
    field: 'user_id',
    startAt: 1,
});
const user = mongoose.model('user', userSchema);
module.exports = user;