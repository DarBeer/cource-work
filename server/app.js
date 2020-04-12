const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

const PORT = 3001;
const mongodbKey = require('./keys');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Configure Mongoose
mongoose.connect(mongodbKey, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('debug', true);

//Models & routers
app.use(require('./routes'));

app.listen(PORT, () => console.log('Server running on http://localhost:'+ PORT+'/'));