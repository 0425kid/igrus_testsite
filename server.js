const express = require('express')
const app = express()
var http     = require('http').Server(app) //create a http web server using the http library
const port = 3000

const path = require("path")

var cors = require('cors');
app.use(cors())

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true }));
app.use(express.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.static(__dirname + "/"));
app.use('/style', express.static(__dirname + '/stylesheets'))
app.use('/images', express.static(__dirname + '/images'))
app.use('/js', express.static(__dirname + '/javascripts'))
app.use('/audio', express.static(__dirname + '/audio'))

app.use('/', require('./routes/page.js'))
app.use('/problem', require('./routes/problem.js'))

app.use('/unity', express.static(__dirname+'/public'));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/views/404.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, '/views/404.html'));
});


http.listen(port, () => {
  console.log(`server listening on *:${port}`)
})
console.log("------- server is running -------");