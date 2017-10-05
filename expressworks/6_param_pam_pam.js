const express = require('express');


// since this node module depends upon OpenSSL being installed on 
// the executing machine this will prevent crashes
let crypto;
try {
	crypto = require('crypto');
} catch (err) {
	console.log('crypto support disabled');
}


let app = express();


app.put('/message/:id', (req, res) => {
	if (crypto) {
		const id = req.params.id;
		let sha1 = crypto
				.createHash('sha1')
				.update(new Date().toDateString() + id)
				.digest('hex');
	
		if (sha1) {
			res.send(sha1);
		}
	} else {
		res.end('this app requires crypto');
	}	
});

app.listen(process.argv[2]);

