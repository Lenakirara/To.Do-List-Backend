const { ObjectId } = require('mongodb'); 
const connection = require('../models/connection');

const getAllTasks = async () => {
  const db = await connection();
  const tasks = await db.collection('tasks').find().toArray();
  return tasks;
};

const findTaskById = async (id) => {
  const db = await connection();
  const task = await db.collection('tasks').findOne({ _id: ObjectId(id) });
  // console.log(task, 'FIND TAREFA');
  if (!task) return null;
  return task;
};

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
  findTaskById,
  createTask,
  getAllTasks,
};
