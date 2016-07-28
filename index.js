var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var func = require('./function.js');

app.use(bodyParser.json({type: '*/*'}));

app.get('/', function (req, res) {
      res.send('Ni Hao');
});

app.post('/add', function(req, res){
    console.log(req.body);
    let a = req.body.a;
    let b = req.body.b;
    if(a<0){
        res.status(400).send('a<0');
    }else{
        res.send('' + func.add(a,b));
    }
});


const port = process.env.PORT || 3000;

app.listen(port, function () {
      console.log('Example app listening on port ' + port);
});
