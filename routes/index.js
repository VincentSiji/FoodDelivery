const { Router } = require( 'express');
const   calculatePrice = require( '../src/controller/price');

const routes = Router()

routes.use('/', calculatePrice);

module.exports = routes;