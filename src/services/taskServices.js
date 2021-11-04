const { ObjectId } = require('mongodb');
const taskModels = require('../models/taskModels');

const getAllTasks = async () => {
  const tasks = await taskModels.getAllTasks();
  return tasks;
};

const findTaskById = async (id) => {
  if (!ObjectId.isValid(id)) return false;
  const task = await taskModels.findTaskById(id);
  return task;
};

const createTask = async (task, data) => {
  const createdTask = await taskModels.createTask(task, data);
  return createdTask;
};

module.exports = {
  createTask,
  findTaskById,
  getAllTasks,
};
