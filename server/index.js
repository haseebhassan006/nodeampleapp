const express = require('express');
const app = express();
const http = require('http');
app.use(express.static(__dirname + '/public/assets/css'));
app.use(express.static(__dirname + '/public/assets/js'));

const server = app.listen(3000, () => {
    console.log('listening on *:3000');
  });

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

