const taskModels = require('../models/taskModels');

const getAllTasks = async () => {
  const tasks = await taskModels.getAllTasks();
  return tasks;
};

const createTask = async (task, data) => {
  const createdTask = await taskModels.createTask(task, data);
  return createdTask;
};

module.exports = {
  createTask,
  getAllTasks,
};
