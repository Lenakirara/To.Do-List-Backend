const userServices = require('../services/userServices');

const msgError = 'Sorry! Server request problem';

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userServices.createUser(name, email, password);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: msgError });
  }
};

module.exports = {
  createUser,
};
