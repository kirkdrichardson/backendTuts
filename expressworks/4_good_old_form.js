const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
let app = express();


app.use(bodyParser.urlencoded({ extended: false }));

app.post('/form', (req, res) => {
	res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);
