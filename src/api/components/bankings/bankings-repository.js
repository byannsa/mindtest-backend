const { Banking } = require('../../../models');

async function getBankings() {
  return Banking.find({});
}

async function getBankingById(id) {
  return Banking.findById(id);
}

async function createBanking(type, card_number, balance, limit, pin) {
  return Banking.create({
    type,
    card_number,
    balance,
    limit,
    pin,
  });
}

async function updateBanking(id, type, card_number, balance, limit, pin) {
  return Banking.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        type,
        card_number,
        balance,
        limit,
        pin,
      },
    }
  );
}

async function deleteBanking(id) {
  return Banking.deleteOne({ _id: id });
}

module.exports = {
  getBankings,
  getBankingById,
  createBanking,
  updateBanking,
  deleteBanking,
};
