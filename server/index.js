const express = require('express');
const app = express();
const http = require('http');
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(express.static(__dirname + '/public/assets/css'));
app.use(express.static(__dirname + '/public/assets/js'));

app.set('view engine', 'ejs');

const server = app.listen(3000, () => {
    console.log('listening on *:3000');
  });

app.get('/', (req, res) => {
  res.render('home');
});


