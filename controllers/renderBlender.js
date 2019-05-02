const indexController = require('./index');
const loginController = require('./login');
const registerController = require('./register');
const blender = {
    index: indexController,
    login: loginController,
    register: registerController

};
module.exports = blender;
