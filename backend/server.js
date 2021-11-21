// import req packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./models/database');

var app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://admin:admin@datamahasiswa.rhqba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true})
    .then(() => { console.log('Database berhasil terhubung') }, err => { console.log('Error untuk terhubung ke database ' + err) }
);

const mahasiswaController = require('./controllers/mahasiswaController');
app.use('/', mahasiswaController);

app.listen(port, () => {
    console.log('Express server listening at port: ' + port);
});