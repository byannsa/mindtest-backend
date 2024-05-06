const Joi = require('joi');

module.exports = {
  inputBanking: {
    body: {
      type: Joi.string().min(1).max(100).required().label('Type'),
      card_number: Joi.string().min(1).max(100).required().label('Card Number'),
      balance: Joi.string().min(1).max(100).required().label('Balance'),
      limit: Joi.string().min(1).max(100).required().label('Limit'),
      pin: Joi.string().min(1).max(100).required().label('Pin'),
    },
  },

};
