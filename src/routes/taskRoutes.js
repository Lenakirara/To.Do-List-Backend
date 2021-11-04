const router = require('express').Router();

const {
  validateJWTToken,
} = require('../middlewares/jwtValidations');

const {
  createTask,
} = require('../controllers/taskControllers');

router.post('/', validateJWTToken, createTask);


module.exports = router;