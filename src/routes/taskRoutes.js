const router = require('express').Router();

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
router.post('/', validateJWTToken, createTask);


module.exports = router;