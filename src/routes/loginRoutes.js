const router = require('express').Router();

const {
  validateJWTToken,
} = require('../middlewares/jwtValidations');

const {
  userLogin,
} = require('../controllers/loginControllers');

router.post('/', validateJWTToken, userLogin);

module.exports = router;