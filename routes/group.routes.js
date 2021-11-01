const express = require('express');
var router = express.Router();
const auth = require('../middleware/auth.middleware');
const controller = require('../controllers/group.controller');

router.get('/', auth.loginRequired, controller.getAll);
router.post('/', auth.loginRequired, controller.createGroup);
router.get('/:id', auth.loginRequired, controller.getGroup);
router.patch('/:id', auth.loginRequired, controller.updateGroup);
router.delete('/:id', auth.loginRequired, controller.deleteGroup);
router.get('/search/:value', auth.loginRequired, controller.searchByName);

module.exports = router;