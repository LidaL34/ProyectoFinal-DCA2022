const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.listen(8084,()=>console.log('listening on 8084...'));