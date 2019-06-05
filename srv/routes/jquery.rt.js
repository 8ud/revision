var express = require('express');
var router = express.Router();
var path = require("path");


router.get('/', function(req, res, next) {
   var pth = path.join(__dirname,'..','node_modules/jquery/dist/jquery.js');
   res.sendFile(pth);
});

module.exports = router;
