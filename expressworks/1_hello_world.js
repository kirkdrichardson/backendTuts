const express = require('express');
let app = express();

app.get('/home', (req, res) => {
	res.end('Hello World!');
}).listen(process.argv[2]);
