const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: './env.exemple' });
const port = process.env.SERVER_PORT;

function startServer() {
  const app = express();
  app.use(bodyParser.text());
  app.use(cookieParser());
  if (port) app.listen(port)
  else app.listen(8080);
  app.get('/hello', (req, res) => {
    res.send('world');
  });
  app.get('/repeat-my-fixed', (req, res) => {
    res.sendStatus(200);
  });
  app.get('/repeat-my-query', (req, res) => {
    if (req.query.message) res.send(req.query.message);
    else res.sendStatus(400);
  });
  app.post('/repeat-my-body', (req, res) => {
    if (req.body) res.send(req.body);
    else res.sendStatus(400);
  });
  app.get('/repeat-my-header', (req, res) => {
    if (req.header('X-Message')) res.send(req.header('X-Message'));
    else res.sendStatus(400);
  });
  app.get('/repeat-my-cookie', (req, res) => {
    if (req.cookies.message) res.send(req.cookies.message);
    else res.sendStatus(400);
  });
  app.get('/repeat-my-params/:message', (req, res) => {
    res.send(req.params.message);
  });
}

startServer();
