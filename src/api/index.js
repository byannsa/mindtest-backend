const express = require('express');

const authentication = require('./components/authentication/authentication-route');
const users = require('./components/users/users-route');
const bankings = require('./components/bankings/bankings-route');

module.exports = () => {
  const app = express.Router();

  authentication(app);
  users(app);
  bankings(app);

  return app;
};
