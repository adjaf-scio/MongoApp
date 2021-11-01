const express = require('express');
var router = express.Router();

const controller = require('../controllers/contact.controller');
const auth = require('../middleware/auth.middleware');


router.post('/', auth.loginRequired, controller.createContact);
router.get('/', auth.loginRequired, controller.getAll);
router.patch('/:id', auth.loginRequired, controller.updateContact);
router.get('/:id', auth.loginRequired, controller.findOne);
router.delete('/:id', auth.loginRequired, controller.deleteContact);
router.get('/search/:value', auth.loginRequired, controller.searchContact);


module.exports = router;