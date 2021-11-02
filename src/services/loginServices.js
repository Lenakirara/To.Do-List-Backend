const JWT = require('jsonwebtoken');
const userModels = require('../models/userModels');

const SECRET = 'mysecretpassword';

const jwtConfig = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

const userLogin = async (userEmail) => {
  const { _id } = await userModels.emailExist(userEmail);

  const userWithoutPassword = {
    id: _id,
  }
  
  const token = JWT.sign({ data: userWithoutPassword }, SECRET, jwtConfig);
return token;
};



module.exports = {
  userLogin,
};