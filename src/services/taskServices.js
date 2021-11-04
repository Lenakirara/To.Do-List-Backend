const taskModels = require('../models/taskModels');

const createTask = async (task, data) => {
  const createdTask = await taskModels.createTask(task, data);
  return createdTask;
};

module.exports = {
  createTask,
};
