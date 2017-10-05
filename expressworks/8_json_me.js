const express = require('express');
const fs = require('fs');
let app = express();

app.get('/books', (req, res) => {

	fs.readFile(process.argv[3], (err, data) => {

		if (err) return res.sendStatus(500);

		try {
			jData = JSON.parse(data.toString());
		} catch (e) {
			return res.sendStatus(500);
		}


		res.json(jData);	
	});

});

app.listen(process.argv[2]);
