const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Black_Devil_!985',
    database: 'Max_Database'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


let users = [
{id: 1, login: 'Mother', password: '1111'},
{id: 2, login: 'Father', password: '1111'}
];

let tasks = [];
let taskId = 1;
app.get('/users', function (req, res) {
        res.json(users)
    });
    
    app.post('/registration', function (req, res){
        const user = {
            login: req.body.login,
            password: req.body.password,
            id: idSet
        };
        users.push(user)
        idSet += 1;
        res.json(user);
    });



    app.post('/product', function (req, res){
    const loginTask = users.find(el => el.login === req.body.login);
    if (loginTask) {
        tasks.push({
            id: taskId,
            tasks: req.body.product
        })
        taskId +=1;
        res.json(tasks);
    } else {
        res.status(401).send();
    }
});

    app.listen(3001, function() {
        console.log()
    
    })