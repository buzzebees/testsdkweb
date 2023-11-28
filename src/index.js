const { authLogin , getProfile , getBlob } = require('./modules/auth/Auth')

const bzbs = {
    authLogin,
    getProfile,
    getBlob,
}
function bzbsFeature(){
    return bzbs;
}
function callFuncForTestOnly(){
    let params = {
        username:"natcha@buzzebees.com",
        password:"qqqqqqqq",
        app_id:2952697274802274
    }
    bzbs.getBlob(params);
}

module.exports = callFuncForTestOnly()
// module.exports = {
//     bzbsFeature
// }
