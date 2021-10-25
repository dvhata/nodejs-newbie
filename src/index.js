const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000; // default

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/resources/views'));

app.get('/', (request, response) => {
    response.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
    console.log(req.query.q)
})

app.get('/search', (req, res) => {
    res.render('search');
})

app.post('/search', (req, res) => {
    console.log(req.body)
    res.send('');
})

app.listen(port,() => console.log(`Example app listening on at http:/localhost:${port}`));