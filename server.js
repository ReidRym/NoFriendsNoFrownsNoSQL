const express = require('express');
const {MongoClient} = require('mongodb');


const app = express();
const port = 3000;

const connectionStringURI = 'mongodb://localhost:27017';
const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'userDB';

client.connect()
    .then(() => {
        console.log('Finally Connected successfully to MongoDb server');

        db = client.db(dbName);
        db.collection('userDB').deleteMany({});

        db.collection('userDB').insertMany(data)
        .then(res => console.log(res))
        .catch(err => {
            if(err) return console.log(err);
        }); 

        app.listen(port, () => {
            console.log(`Server is listening on port http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.log('Error connecting to server', err);
    });   

    app.use(express.json());

    app.post('/create', (req, res) => {

        db.collection('userCollections').insertOne(
            {name: req.body.name, email: req.body.email, password: req.body.password}
        )
        .then(result => res.json(result))
        .catch(err => {
            if(err) throw err;
        });
    });
    
    app.get('/read', (req, res) => {
        db.collection('userCollections')
        .find()
        .toArray()
        .then(result => res.json(result))
        .catch(err => {
            if(err) throw err;
        });
    });



    