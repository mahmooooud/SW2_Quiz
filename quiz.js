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

Connection.connect(function (error) {
    if (!!error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.post('/quizzes', (req, res) => {
    
    

    var quiz = { 
        Title: req.body.title, SkillType: req.body.qType,
        Score: req.body.score, PassScore: req.body.passScore,
        Duration: req.body.duration, Question1: req.body.q1,
        Question2: req.body.q2, Question3: req.body.q3,
        Question4: req.body.q4, Question5: req.body.q5,
        Choice11: req.body.choice11, Choice12: req.body.choice12,
        Choice13: req.body.choice13, Choice14: req.body.choice14,
        Choice21: req.body.choice21, Choice22: req.body.choice22,
        Choice23: req.body.choice23, Choice24: req.body.choice24,
        Choice31: req.body.choice31, Choice32: req.body.choice32,
        Choice33: req.body.choice33, Choice34: req.body.choice34,
        Choice41: req.body.choice41, Choice42: req.body.choice42,
        Choice43: req.body.choice43, Choice44: req.body.choice44,
        Choice51: req.body.choice51, Choice52: req.body.choice52,
        Choice53: req.body.choice53, Choice54: req.body.choice54,
        AnswerQ1: req.body.q1answer, AnswerQ2: req.body.q2answer,
        AnswerQ3: req.body.q3answer, AnswerQ4: req.body.q4answer,
        AnswerQ5: req.body.q5answer
    };
    //console.log(quiz);
    res.send("DONE");
    Connection.query('INSERT INTO quizdata SET ?', quiz, function (err, res) {
        if (err) throw err;
    });
});

const hostname = '127.0.0.1';
const port = 5000;
app.listen(port, () => {
    console.log(`Serving running at http://${hostname}:${port}/`);
});
