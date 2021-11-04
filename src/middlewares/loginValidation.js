const userModels = require('../models/userModels');
 
const validateEmailLogin = async (req, res, next) => {
  const { email } = req.body;
  const regxEmail = /\S+@\S+\.\S+/;
  if (!email) {
    return res.status(401).json({ message: 'Field needs to be filled'});
  }
  if (!regxEmail.test(email)) {
    return res.status(401).json({ message: 'Invalid Email'});
  }
  next();
};

const validatePasswordLogin = async (req, res, next) => {
  const { password } = req.body;
  const regxEmail = /\S+@\S+\.\S+/;
  if (!password) {
    return res.status(401).json({ message: 'Field needs to be filled'});
  }
  if (password.length < 6) {
    return res.status(401).json({ message: 'invalid Password'});
  }
  next();
};

module.exports = {
  validateEmailLogin,
  validatePasswordLogin,
};
