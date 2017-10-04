const express = require('express');
let app = express();

app.set('views', process.argv[3]);
app.set('view engine', 'pug');

app.get('/home', (req, res) => {
	res.render('index', {date: new Date().toDateString()});
}).listen(process.argv[2]);


