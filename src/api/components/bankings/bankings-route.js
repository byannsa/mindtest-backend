const express = require('express');

const authenticationMiddleware = require('../../middlewares/authentication-middleware');
const celebrate = require('../../../core/celebrate-wrappers');
const bankingsControllers = require('./bankings-controller');
const bankingsValidator = require('./bankings-validator');

const route = express.Router();

module.exports = (app) => {
  app.use('/bankings', route);

  // Get list of users
  route.get('/', authenticationMiddleware, bankingsControllers.getBankings);

  // Create user
  route.post(
    '/',
    authenticationMiddleware,
    celebrate(bankingsValidator.inputBanking),
    bankingsControllers.createBanking
  );

  // Get user detail
  route.get('/:id', authenticationMiddleware, bankingsControllers.getBankingById);

  // Update user
  route.put(
    '/:id',
    authenticationMiddleware,
    celebrate(bankingsValidator.inputBanking),
    bankingsControllers.updateBanking
  );

  // Delete user
  route.delete('/:id', authenticationMiddleware, bankingsControllers.deleteBanking);

};
