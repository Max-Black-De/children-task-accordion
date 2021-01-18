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

app.get('/api/getmonday', (req, res) => {
    const sqlSlct = "SELECT * FROM Max_DataBase.monday;"
    connection.query(sqlSlct, (err, result) => {
        res.send(result);
    });
})
app.post('/api/insertmonday', (req, res) => {
    var tasksOfDay = req.body.tasksOfDay;    

    var sqlinsert =
    "INSERT INTO monday (tasks) VALUES (?)";
    connection.query(sqlinsert, [tasksOfDay], (err, result) => {
        console.log(result)
    });
});
app.delete('/api/deletemonday', (req, res) => {
    
    connection.query("DELETE FROM monday", (err, result) => {
        console.log(result)
    });
    console.log('deleted');
});

// TUESDAY
app.get('/api/gettuesday', (req, res) => {
    const sqlSlct = "SELECT * FROM Max_DataBase.tuesday;"
    connection.query(sqlSlct, (err, result) => {
        res.send(result);
    });
})
app.post('/api/inserttuesday', (req, res) => {
    var tasksOfDay = req.body.tasksOfDay;    

    var sqlinsert =
    "INSERT INTO tuesday (tasks) VALUES (?)";
    connection.query(sqlinsert, [tasksOfDay], (err, result) => {
        console.log(result)
    });
});
app.delete('/api/deletetuesday', (req,res) => {
    var sqlDelete =
    "DELETE FROM tuesday";
    connection.query(sqlDelete, (err, result) => {
        console.log(result)
    });
    console.log('deleted');
});
// WEDNESDAY
app.get('/api/getwednesday', (req, res) => {
    const sqlSlct = "SELECT * FROM Max_DataBase.wednesday;"
    connection.query(sqlSlct, (err, result) => {
        res.send(result);
    });
})
app.post('/api/insertwednesday', (req, res) => {
    var tasksOfDay = req.body.tasksOfDay; 
    var sqlinsert =
    "INSERT INTO wednesday (tasks) VALUES (?)";
    connection.query(sqlinsert, [tasksOfDay], (err, result) => {
        console.log(result)
    });
});
app.delete('/api/deletewednesday', (req,res) => {
    var sqlDelete =
    "DELETE FROM wednesday";
    connection.query(sqlDelete, (err, result) => {
        console.log(result)
    });
    console.log('deleted');
});
// THUSDAY
app.get('/api/getthusday', (req, res) => {
    const sqlSlct = "SELECT * FROM Max_DataBase.thusday;"
    connection.query(sqlSlct, (err, result) => {
        res.send(result);
    });
})
app.post('/api/insertthusday', (req, res) => {
    var tasksOfDay = req.body.tasksOfDay;    

    var sqlinsert =
    "INSERT INTO thusday (tasks) VALUES (?)";
    connection.query(sqlinsert, [tasksOfDay], (err, result) => {
        console.log(result)
    });
});
app.delete('/api/deletethusday', (req, res) => {
    
    connection.query("DELETE FROM thusday;", (err, result) => {
        console.log(result)
    });
    console.log('deleted');
});

// FRIDAY
app.get('/api/getfriday', (req, res) => {
    const sqlSlct = "SELECT * FROM Max_DataBase.friday;"
    connection.query(sqlSlct, (err, result) => {
        res.send(result);
    });
});
app.post('/api/insertfriday', (req, res) => {
    var tasksOfDay = req.body.tasksOfDay;    

    var sqlinsert =
    "INSERT INTO friday (tasks) VALUES (?)";
    connection.query(sqlinsert, [tasksOfDay], (err, result) => {
        console.log(result)
    });
});
app.delete('/api/deletefriday', (req,res) => {
    var sqlDelete =
    "DELETE FROM friday";
    connection.query(sqlDelete, (err, result) => {
        console.log(result)
    });
    console.log('deleted');
});

// SATURDAY
app.get('/api/getsaturday', (req, res) => {
    const sqlSlct = "SELECT * FROM Max_DataBase.saturday;"
    connection.query(sqlSlct, (err, result) => {
        res.send(result);
    });
})
app.post('/api/insertsaturday', (req, res) => {
    var tasksOfDay = req.body.tasksOfDay;    

    var sqlinsert =
    "INSERT INTO saturday (tasks) VALUES (?)";
    connection.query(sqlinsert, [tasksOfDay], (err, result) => {
        console.log(result)
    });
});
app.delete('/api/deletesaturday', (req,res) => {
    var sqlDelete =
    "DELETE FROM saturday";
    connection.query(sqlDelete, (err, result) => {
        console.log(result)
    });
    console.log('deleted');
});

// SUNDAY
app.get('/api/getsunday', (req, res) => {
    const sqlSlct = "SELECT * FROM Max_DataBase.sunday;"
    connection.query(sqlSlct, (err, result) => {
        res.send(result);
    });
})
app.post('/api/insertsunday', (req, res) => {
    var tasksOfDay = req.body.tasksOfDay;    

    var sqlinsert =
    "INSERT INTO sunday (tasks) VALUES (?)";
    connection.query(sqlinsert, [tasksOfDay], (err, result) => {
        console.log(result)
    });
});
app.delete('/api/deletesunday', (req,res) => {
    var sqlDelete =
    "DELETE FROM sunday";
    connection.query(sqlDelete, (err, result) => {
        console.log(result)
    });
    console.log('deleted');
});


app.listen(3001, () => {
    console.log('good')
})