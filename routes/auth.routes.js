const express = require('express');
var router = express.Router();

const controller = require('../controllers/auth.controller');
const auth = require('../middleware/auth.middleware');

router.post('/signup', controller.signUp);
router.post('/login', controller.logIn);
router.get('/user', auth.loginRequired, controller.getUser);
router.patch('/user', auth.loginRequired, controller.updateUser);

module.exports = router;