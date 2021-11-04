const router = require('express').Router();

const {
  validateTask,
} = require('../middlewares/taskValidations')

const {
  validateJWTToken,
} = require('../middlewares/jwtValidations');

const {
  getAllTasks,
  findTaskById,
  createTask,
  updateTask,
  deleteTask,s
} = require('../controllers/taskControllers');

router.get('/:id', findTaskById);
router.get('/', getAllTasks);
router.post('/', validateJWTToken, validateTask, createTask);
router.put('/:id', validateJWTToken, updateTask);
router.delete('/:id', validateJWTToken, deleteTask);


module.exports = router;