const router = require('express').Router();

const {
  validateJWTToken,
} = require('../middlewares/jwtValidations');

const {
  getAllTasks,
  createTask,
} = require('../controllers/taskControllers');

router.get('/', getAllTasks);
router.post('/', validateJWTToken, createTask);


module.exports = router;