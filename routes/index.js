var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Team = mongoose.model('Team');

router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});


module.exports = router;
