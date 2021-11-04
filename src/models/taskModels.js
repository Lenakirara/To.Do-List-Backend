const connection = require('../models/connection');

const createTask = async (task, data) => {
  const db = await connection();
  const addTask = await db.collection('tasks').insertOne({
    ...task,
    userId: data,
  });
  return {
    ...task,
    userId: data,
    _id: addTask.insertedId,
  }
 // console.log(addTask);
};

module.exports = {
  createTask,
};
