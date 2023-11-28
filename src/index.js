const { getAuth } = require('./modules/auth/Auth')

function callGetAuth(){
    console.log(getAuth())
    getAuth();
}
module.exports = {
    callGetAuth
} 
