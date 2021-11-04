const taskServices = require('../services/taskServices');

const msgError = 'Sorry! Server request problem';

const getAllTasks = async (_req, res) => {
  try {
    const tasks = await taskServices.getAllTasks();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ message: msgError });
  }
};

const findTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskServices.findTaskById(id);
    if (!task) {
      return res.status(404).json({ message: 'task not found' });      
    }
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: msgError });
  }  
};

const createTask = async (req, res) => {
  try {
    const { title, currentStatus } = req.body;
    // console.log(req.body, 'CREATE_TASK');
    const { data } = req.user;
   // console.log(req.user, 'DATA-CONTROLLER');
    const task = await taskServices.createTask({ title, currentStatus }, data.id);
    // console.log(task, 'TASK-CONTROLLER');
    return res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ message: msgError });
  }
};

module.exports = {
  findTaskById,
  getAllTasks,
  createTask,
};
