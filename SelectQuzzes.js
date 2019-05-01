var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var Connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'VkvsJYvcyA',
    password: 'XRFnPJCqwP',
    database: 'VkvsJYvcyA'
});
var arr;
Connection.connect(function (error) {
    if (!!error) {
        throw (error);
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.get('/', (req, res) => {
    Connection.query("SELECT Title,SkillType FROM quizdata", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
        console.log(result);
    })
});

const hostname = '127.0.0.1';
var port = process.argv[2];
console.log(port);
app.listen(port, () => {
    console.log(`Serving running at http://${hostname}/`);
});
