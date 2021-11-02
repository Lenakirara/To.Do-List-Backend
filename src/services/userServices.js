const userModels = require('../models/userModels');

const getUsers = async () => {
  const users = await userModels.getUsers();
  return users;
}

const createUser = async (name, email, password) => {
  const createdUser = await userModels.createUser(name, email, password);
  return createdUser
};

module.exports = {
  getUsers,
  createUser,
};
