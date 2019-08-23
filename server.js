const fs = require('fs');
const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/static'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/location', (req, res) => {
  fs.appendFile('./location.txt', req.body);
});

app.listen(process.env.PORT || 3000);
