const router = require('express').Router();

const {
  createUser,
} = require('../controllers/userControllers');

router.post('/', createUser);

module.exports = router;