const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 8080; // default

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

//connect to db
const db = require("./config/db")
db.connect();

const route = require('./routes')
route(app);

app.listen(port, () => console.log(`http://localhost:${port}`),);

