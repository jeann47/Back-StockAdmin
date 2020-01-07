const express = require('express');
const route = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./DataBase')

const app = express();


app.use(cors());


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(route);

console.log("We are listening...")

app.listen(3001);
