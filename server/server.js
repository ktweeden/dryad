const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const server = express();

server.use(parser.json());
server.use(express.static('client/public'));

function initialiseDbConnection(onDbInitialise) {
    mongoose.connect('mongodb://localhost:27017/dryad');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', onDbInitialise);
}

initialiseDbConnection(()=> {
    server.listen(3001, function () {
        console.log('Listening on port 3001');
    });
})