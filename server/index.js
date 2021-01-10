const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const { json } = require('body-parser');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Black_Devil_!985',
    database: 'Max_Database'
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MONDAY
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
app.delete('/api/deletemonday', (req,res) => {
    var tasksOfDay = req.body.tasksOfDay;
    var sqlDelete =
    "DELETE * FROM monday (tasks)";
    connection.query(sqlinsert, (err, result) => {
        console.log(result)
    });

    console.log('delete');
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
    console.log('delete');
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
    console.log('delete');
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
app.delete('/api/deletethusday', (req,res) => {
    console.log('delete');
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
    console.log('delete');
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
    console.log('delete');
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
    console.log('delete');
});


app.listen(3001, () => {
    console.log('good')
})