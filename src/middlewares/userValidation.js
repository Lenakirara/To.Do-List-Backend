const userModels = require('../models/userModels');

const validateFields = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Invalid Values' });
  };
  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req. body;
  const regxEmail = /\S+@\S+\.\S+/;
  if (!regxEmail.test(email)) {
    return res.status(400).json({ message: 'Invalid email' });
  }
  next();
};

const validatePassword = async (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message: 'password must be at least 6 digits' });
  }
  next();
};

const validateEmailExist = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = await userModels.emailExist(email);
  if (userEmail) {
    return res.status(409).json({ message: 'Email already registered' });
  }
  next();
};

module.exports = {
  validateFields,
  validateEmail,
  validatePassword,
  validateEmailExist,
}