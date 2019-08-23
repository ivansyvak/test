const fs = require('fs');
const http = require('http');

const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/static'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/location', (req, res) => {
  http.get('http://93.79.103.147:3000/location?'+req.body);
});

app.get('/location', (req, res) => {
  fs.appendFile('./location.txt', JSON.stringify(req.query) + '\n', err => {});
  res.end('OK');
});

app.listen(process.env.PORT || 3000);
