const CoreApi = require('../../http/CoreApi')
let prefixUrl = 'https://buzzebees-dev.azure-api.net/api'

function authLogin (params){
    let url = prefixUrl + '/auth/bzbs_login'
    let token = null

    return CoreApi.connectBzbsPost(url, token, params).then(data => {
        console.log('login success' , data)
        return data;
    }).catch(error => {
        console.log(error)
        return error
    });
}
function getProfile(params){
    let url = prefixUrl + '/profile/me'
    let token = '.bilpzYJfm8FFiphSEirPUqbzsCB2ECxwzvtHvFtnqgiRjclDqQSYl4xAU0SLjCULPid_fDtfDeY6UEaEMFZgwQwLHpUWOl3LOG3fL5hqzIhNFuS4lrhmlxwT1YyqXEpEUBm4JWAFZGFq2K3_XXUcYZNwYIqNjcsVpecw601tJ5Vxr-g_gyo4LXrv4oBmxMIB'
    return CoreApi.connectBzbsGet(url, token, params).then(data => {
        console.log(data)
        return data;
    }).catch(error => {
        console.log(error)
        return error
    });
}
function getBlob(){
    let url = 'https://devstoragebuzzebees.blob.core.windows.net/webconfig/beesreward/beesrewards/config/config.json'
    return CoreApi.connectBzbsGetBlob(url).then(data => {
        console.log(data)
        return data;
    }).catch(error => {
        console.log(error)
        return error
    });
}
module.exports = {
    getProfile,
    authLogin,
    getBlob
}