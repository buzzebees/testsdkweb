const axios = require('axios');
const FormData = require('form-data');
let appId = '2952697274802274' //for test
let subscribeKey = '3a8f25febad74697acf33e81ec7c91fa' //for test

//#region body with from-data
function connectBzbsGet(url, token, data){
    return connectMethod(url, token, data, 'get');
}
function connectBzbsPost(url, token, data){
    return connectMethod(url, token, data, 'post');
}
function connectBzbsDelete(url, token, data){
    return connectMethod(url, token, data, 'delete');
}
function connectBzbsPut(url, token, data) {
    return connectMethod(url, token, data, 'put');
}
function connectMethod(url, token, data, method){
    let header = {
        'App-Id': appId,
        'Ocp-Apim-Subscription-Key': subscribeKey,
        'Content-Type': 'multipart/form-data'
    }
    if (token != null) {
        header.Authorization = 'token ' + token
    }
    let formData = arrToFormData(data)
    
    return axios({
        method: method,
        url: url,
        data: formData,
        headers: header,
    }).then((res) => {
        let resData = convertResponse(res)

        if (resData.isError) {
            return setErrorObjStatus200(res, data)
        } else {
            return res.data
        }
    }).catch((err) => {
        return setErrorObj(err, data)
    })
}
//#endregion body with from-data

//#region body with json-data
function connectBzbsGetJson(url, token, data){
    return connectMethodJson(url, token, data, 'get');
}
function connectBzbsPostJson(url, token, data){
    return connectMethodJson(url, token, data, 'post');
}
function connectBzbsDeleteJson(url, token, data){
    return connectMethodJson(url, token, data, 'delete');
}
function connectBzbsPutJson(url, token, data) {
    return connectMethodJson(url, token, data, 'put');
}
function connectMethodJson (url, token, data, method) {
    let header = {
        'App-Id': appId,
        'Ocp-Apim-Subscription-Key': subscribeKey,
    }
    if (data == null) {
        data = {}
    }
    if (token != null) {
        header.Authorization = 'token ' + token
    }
    axios({
        method: method,
        url: url,
        data: data,
        headers: header,
    }).then((res) => {
        let resData = convertResponse(res)

        if (resData.isError) {
            return setErrorObjStatus200(res, data)
        } else {
            return res.data
        }
    }).catch((err) => {
        return setErrorObj(err, data)
    })
}
//#endregion body with json-data

function connectBzbsGetBlob(url) {
    const timestamp = new Date().getTime()
    url += `?t=${timestamp}`

    return axios({
        method: 'get',
        url: url,
    }).then((res) => {
        return res
    }).catch((err) => {
        return setErrorObj(err);
    })
}

function arrToFormData (arr) {
    let form = new FormData()
    for (let i in arr) {
        form.append(i, arr[i])
    }
    return form
}
function setErrorObjStatus200 (res, data) {
    let error = {
        error: res,
        id: null,
        params: data,
    }
    if (res?.data?.error != null) {
        error = {
            id: res.data.error.id,
            code: res.data.error.code,
            message: res.data.error.message,
            type: res.data.error.type,
            res: res,
            params: data,
        }
    } else if (res?.data != null) {
        error = {
            id: null,
            code: res.data.code,
            message: res.data.message,
            res: res,
            params: data,
        }
    }
    return error
}
function setErrorObj (err, data) {
    let error = {
        error: err,
        id: null,
        params: data,
    }
    if (err.response?.data?.error != null) {
        error = {
            id: err.response.data.error.id,
            code: err.response.data.error.code,
            message: err.response.data.error.message,
            type: err.response.data.error.type,
            res: err.response,
            params: data,
        }
    } else {
        error = {
            id: err.response?.id,
            code: err.response?.code,
            message: err.response?.message,
            type: '',
            res: err.response,
            params: data,
        }
    }
    return error
}
function convertResponse (res) {
    let data = res.data;
    if (data.success === true || data.success === false) {
        return {
            isError: data.success ? false : true,
            data: data,
        };
    } else {
        return {
            isError: false,
            data: data,
        };
    }
}

module.exports = {
    connectBzbsGet,
    connectBzbsPost,
    connectBzbsDelete,
    connectBzbsPut,
    connectBzbsGetBlob,

    connectBzbsGetJson,
    connectBzbsPostJson,
    connectBzbsPutJson,
    connectBzbsDeleteJson,
}