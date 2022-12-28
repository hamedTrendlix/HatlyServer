const { Router } = require('express');
const orderController = require('../../controllers/order.controller');
const { authUser } = require('../../middleware/userAuth');

const routes = Router();


routes.route('/').post(authUser, orderController.addOrder);

module.exports = routes
