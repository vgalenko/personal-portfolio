'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
const conString = 'postgres://localhost:5432/kilovolt';
const client = new pg.Client(conString);
client.connect();

app.use(express.static('./public'));

app.get('./index', (req, res) => {
  res.sendFile('index.html', {root: './public'});
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('.'));

app.listen(PORT, () => console.log(`Your server is now running on port ${PORT}`));
