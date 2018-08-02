'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var func = require('./function.js');

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send('Ni Hao');
});

app.post('/demo/:pathVar', function(req, res){
    console.log('header', req.headers)
    console.log('pathVar', req.params.pathVar);
    console.log('body', req.body);
    console.log('queryString', req.query);
    res.send('ok');
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

app.get('/questions', function(req, res){
    res.json([
            {
                "question": "Favourite programming language?",
                "published_at": "2015-08-05T08:40:51.620Z",
                "choices": [
                    {
                        "choice": "Swift",
                        "votes": 2000
                    }, {
                        "choice": "Python",
                        "votes": 1024
                    }, {
                        "choice": "Objective-C",
                        "votes": 512
                    }, {
                        "choice": "Ruby",
                        "votes": 256
                    }
                ]
            }
        ]);
});

app.listen(port, function () {
      console.log('Example app listening on port ' + port);
});
