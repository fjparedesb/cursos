const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Javier',
            age: 41
        },
        {
            name: 'Lulu',
            age: 35
        },
        {
            name: 'Dany',
            age: 19
        },
        {
            name: 'Fer',
            age: 18
        }
    ]);
});

app.listen(3000);
module.exports.app = app;