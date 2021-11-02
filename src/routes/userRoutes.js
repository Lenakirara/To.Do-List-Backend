const router = require('express').Router();

const {
  validateFields,
  validateEmail,
  validatePassword,
} = require('../middlewares/userValidation');

const {
  createUser,
} = require('../controllers/userControllers');

router.post('/',
  validateFields,
  validateEmail,
  validatePassword,
  createUser);

module.exports = router;