const bangkingRepository = require('./bankings-repository');

async function getBangkings() {
  return await bangkingRepository.getBankings();
}

async function getBangkingById(id) {
  return await bangkingRepository.getBankingById(id);
}

async function createBangking(type, card_number, balance, limit, pin) {
  try {
    await bangkingRepository.createBanking(
      type,
      card_number,
      balance,
      limit,
      pin
    );
    return true;
  } catch (err) {
    console.error('Error creating Bangking:', err);
    return null;
  }
}

async function updateBangking(id, type, card_number, balance, limit, pin) {
  return await bangkingRepository.updateBanking(
    id,
    type,
    card_number,
    balance,
    limit,
    pin
  );
}

async function deleteBangking(id) {
  return await bangkingRepository.deleteBanking(id);
}

module.exports = {
  getBangkings,
  getBangkingById,
  createBangking,
  updateBangking,
  deleteBangking,
};
