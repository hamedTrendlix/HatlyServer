const {Router} =  require('express');
const userController  = require('../../controllers/user.controller');
const { authUser } = require('../../middleware/userAuth');

const routes = Router();

routes.route('/signup' ).post(userController.signup)
routes.route('/login' ).post(userController.login)
routes.route('/logout' ).get(authUser, userController.logout)
routes.route('/me' ).get(authUser, userController.getUserInfo)

routes.route('/').post(userController.addUser);


module.exports = routes;