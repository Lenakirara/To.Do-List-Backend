const userModels = require('../models/userModels');

const getUsers = async () => {
  const users = await userModels.getUsers();
  return users;
}

const createUser = async (name, email, password) => {
  const createdUser = await userModels.createUser(name, email, password);
  return createdUser
};

/* const loginUser = async (email, password) => {
  if (!email || !password) {
    return res.status(401).json({ message: 'Incorrect username or password'});
  }
  const token = 
} */

module.exports = {
  getUsers,
  createUser,
};
