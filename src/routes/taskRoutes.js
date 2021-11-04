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
} = require('../controllers/taskControllers');

router.get('/:id', findTaskById);
router.get('/', getAllTasks);
router.post('/', validateJWTToken, validateTask, createTask);


module.exports = router;