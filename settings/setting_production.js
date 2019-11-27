exports.DB = {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
};
exports.ENUM_ROLES = [1, 2];
exports.ROLES = {
    member: 1,
    admin: 2,
};
exports.ENUM_STATUS = [10, 20, 30, 40];
exports.STATUS = {
    new: 10,
    active: 20,
    deleted: 30,
    inactive: 40,
};