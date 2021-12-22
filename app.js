const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
app.use(bodyParser.json());

const connectDB = require('./config/db');
// Load Config
dotenv.config({path: './config/config.env'})

connectDB();

// Routes
app.use('/', require('./routes/index'));
app.listen(3000);



