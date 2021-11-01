var express = require('express');
var router = express.Router();
const authRoutes = require('./auth.routes');
const contactRoutes = require('./contact.routes');
const groupRoutes = require('./group.routes');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth', authRoutes);
router.use('/contacts', contactRoutes);
router.use('/groups', groupRoutes);

module.exports = router;
