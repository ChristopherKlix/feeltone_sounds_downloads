const express = require('express');

const app = express();

const port = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/buy-rave/', (req, res) => {
    res.redirect('https://adsrsounds.com/');
});

app.get('/rave/', (req, res) => {
    res.redirect('/fltn-rave/');
});

app.get('/fltn-rave/', (req, res) => {
    res.render('fltn_rave');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
