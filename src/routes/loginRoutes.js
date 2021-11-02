const router = require('express').Router();

const {
  userLogin,
} = require('../controllers/loginControllers');

router.post('/', userLogin);

module.exports = router;