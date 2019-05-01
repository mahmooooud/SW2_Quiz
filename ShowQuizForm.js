var express = require('express');
var mysql = require('mysql');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var Connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'VkvsJYvcyA',
    password: 'XRFnPJCqwP',
    database: 'VkvsJYvcyA'
});

Connection.connect(function (error) {
    if (!!error) {
        throw (error);
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.post('/', (req, res) => {
    //res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.body.UserChoice);
    Connection.query("SELECT * FROM quizdata WHERE Title = '" + req.body.UserChoice[0] + "'", function (err, result, fields) {
        if (err) throw err;
        //res.setHeader("Access-Control-Allow-Origin", "*");
        console.log(result);
        res.send(result);
        //console.log(result[0].Title);
    })
});

app.post('/result', (req, res) => {

    console.log(req.body.x)
    res.setHeader("Access-Control-Allow-Origin", "*");
    var answers = {
        ID:req.body.x[6], Interest: "web",
        Name: req.body.x[5], Choice1: req.body.x[0],
        Choice2: req.body.x[1],Choice3: req.body.x[2],
        Choice4: req.body.x[3], Choice5: req.body.x[4]
    };
    console.log(answers);
    res.send("DONE");
    Connection.query('INSERT INTO UserAnswers SET ?', answers, function (err, res) {
        if (err) throw err;
    });
});

const hostname = '127.0.0.1';
var port = 5000;
console.log(port);
app.listen(port, () => {
    console.log(`Serving running at http://${hostname}/`);
});
