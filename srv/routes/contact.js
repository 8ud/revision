var express = require('express');
var router = express.Router();
var fs = require('fs'); // file system
var path = require('path');

/* GET contact */
router.get('/', function(req, res, next) {
   var pth = path.join(__dirname,'..','lesdata/contact.json'); //création de chemin/fichier
   fs.readFile(pth , { encoding : 'utf8'} , (err,data)=>{
      if (err){
         console.log(err);
         res.sendStatus(204);
      }else{
         res.send(data);
              }
    
            });
});

/* POST contact */
router.post('/', function(req, res, next) {
   //creation du chemin/fichier
   var pth = path.join(__dirname,'..','lesdata/contact.json'); //création de chemin/fichier
   fs.writeFile(pth , JSON.stringify(req.body) , { encoding : 'utf8'} , (err)=>{
      if (!err){
         res.sendStatus(204);
         return;
      }
      res.sendStatus(500).write("erreur de gestion");
   }); //write

});

module.exports = router;
