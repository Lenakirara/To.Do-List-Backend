const userModels = require('../models/userModels');

const createUser = async (name, email, password) => {
  const createdUser = await userModels.createUser(name, email, password);
  return createdUser
};

module.exports = {
  createUser,
};
