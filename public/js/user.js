
jQuery(document).ready(function () {

    $('#btn-create-user').click(async function () {
        try {
            const values = APP.getFormObj('f-create-user');
            const result = await APP.sendData('post', values, '/adm/user/create');
            console.log(result);
            console.log('ok');
        } catch (error) {
            console.log(error)
        }
    });
});