class Utils{
    static coll_name(value = '') {
        const _value = value.toLowerCase();
        return _value.split('service')[0];
    }
}
module.exports = Utils;