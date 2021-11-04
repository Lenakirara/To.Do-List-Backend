const router = require('express').Router();

const {
  validateFields,
  validateEmail,
  validatePassword,
  validateEmailExist,
} = require('../middlewares/userValidation');

const {
  getUsers,
  createUser,
} = require('../controllers/userControllers');

router.get('/', getUsers);
router.post('/',
  validateFields,
  validateEmail,
  validatePassword,
  validateEmailExist,
  createUser);

module.exports = router;