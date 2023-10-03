const express = require('express');
const app = express();
const port = 3000; 

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/notes', (req, res) => {
    res.render('notes');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});

app.use(express.static(__dirname + '/public'));

