const bangkingService = require('./bankings-service');
const { errorTypes } = require('../../../core/errors');

async function getBankings(request, response, next) {
  try {
    const bankings = await bangkingService.getBangkings();
    response.status(200).json(bankings);
  } catch (error) {
    next(error);
  }
}

async function getBankingById(request, response, next) {
  try {
    const bangking = await bangkingService.getBangkingById(request.params.id);

    if (!bangking) {
      throw new Error('Unknown bangking');
    }

    response.status(200).json(bangking);
  } catch (error) {
    next(error);
  }
}

async function createBanking(request, response, next) {
  try {
    const { type, card_number, balance, limit, pin } = request.body;

    const success = await bangkingService.createBangking(
      type,
      card_number,
      balance,
      limit,
      pin
    );
    if (!success) {
      throw new Error('Failed to create bangking');
    }

    response.status(201).json({ type,card_number });
  } catch (error) {
    next(error);
  }
}

async function updateBanking(request, response, next) {
  try {
    const id = request.params.id;
    const { type, card_number, balance, limit, pin } = request.body;

    const success = await bangkingService.updateBangking(
      id,
      type,
      card_number,
      balance,
      limit,
      pin
    );
    if (!success) {
      throw new Error('Abort update');
    }

    response.status(200).json({ id });
  } catch (error) {
    next(error);
  }
}

async function deleteBanking(request, response, next) {
  try {
    const id = request.params.id;
    const success = await bangkingService.deleteBangking(id);
    if (!success) {
      throw new Error('Abort delete');
    }

    response.status(200).json({ id });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getBankings,
  getBankingById,
  createBanking,
  updateBanking,
  deleteBanking,
};
