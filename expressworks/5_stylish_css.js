/*

If running expressworks on a local machine, be aware that 
you may run into issues with file permissions. If so 
(pay attention to the error output), find where the expressworks
folder is stored. Try /user/lib/node_modules. Then chmod the public 
folder of this exercise dir so that whichever user you are on the 
computer can read from it
*/ 

var express = require('express')
var app = express()

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);
