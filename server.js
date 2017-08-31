'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();
const conString = process.env.DATABASE_URL;
const client = new pg.Client(conString);
client.connect();

app.use(express.static('./public'));

app.get('./index', (req, res) => {
  res.sendFile('index.html', {root: './public'});
});



app.get('/*', (request, response) => response.sendFile('index.html', {root: './public'}));


function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('.'));

app.listen(PORT, () => console.log(`Your server is now running on port ${PORT}`));
