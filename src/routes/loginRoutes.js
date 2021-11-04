const router = require('express').Router();

const {
  validateEmailLogin,
  validatePasswordLogin,
} = require('../middlewares/loginValidation');

const {
  userLogin,
} = require('../controllers/loginControllers');

router.post('/',
  validateEmailLogin,
  validatePasswordLogin,
  userLogin);

module.exports = router;