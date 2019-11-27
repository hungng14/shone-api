class App{
    constructor() { }
    async sendData(method, data, url) {
        try {
            const result = await axios({
                method: method,
                url: url,
                data: data
            });
            return result.data;
        } catch (error) {
            return error;
        }
    }

    getFormObj(formId) {
        var formObj = {};
        var inputs = $('#'+formId).serializeArray();
        $.each(inputs, function (i, input) {
            formObj[input.name] = input.value;
        });
        return formObj;
    }
}

const APP = new App();
