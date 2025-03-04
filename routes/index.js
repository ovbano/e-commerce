const express = require('express');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const proveedoresRouter = require('./proveedor.router');
const customersRouter = require('./customers.router');
const orderRouter = require('./orders.router');
const discountRouter = require('./discount.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/proveedores', proveedoresRouter);
  router.use('/customers', customersRouter);
  router.use('/orders', orderRouter);
  router.use('/discounts', discountRouter);
}

module.exports = routerApi;
