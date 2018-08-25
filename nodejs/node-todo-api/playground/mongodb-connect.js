//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Conectado al servidor MongoDB');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Javier',
    //     age: 41,
    //     location: 'cancun'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Fallo no se grabo el registro');
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});