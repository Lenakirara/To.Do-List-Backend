const connection = require('../models/connection');

const createUser = async (name, email, password) => {
  const db = await connection();
  const user = await db.collection('users').insertOne({ name, email, password });
  return {
    name,
    email,
    _id: user.insertedId,
  }
};

module.exports = {
  createUser,
}