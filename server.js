var express = require('express');
var stylus = require('stylus');
var bodyParser  = require('body-parser');
//TODO: Need to check which logger need to add there.
//var logger = require('logger');
//set up  environment viriable
var env =process.env.NODE_ENV =process.env.NODE_ENV||'development'
var app = express();

//compile function used by the middle ware for stylus
var compile  = function(str,path){
return stylus(str).set('filename'+path);
};

//setup view engine 
app.set('views',__dirname+'/server/views');
app.set('view engine','pug');
//TODO: Need to check which logger  need to add therenode
//app.use(express.logger('dev'));
app.use(bodyParser());
app.use(stylus.middleware(
    {
        src:__dirname+'/public',
        compile:compile
    }
));
 app.use(express.static(__dirname+'/public'));
//set the default route 
app.get('*',function(req,res){
    res.render('index');

});
var port  = 3030;
app.listen(port);
console.log('Server listeing to the port ' + port);