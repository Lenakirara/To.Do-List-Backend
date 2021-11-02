const router = require('express').Router();

const {
  validateFields,
  validateEmail,
  validatePassword,
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
  createUser);

module.exports = router;