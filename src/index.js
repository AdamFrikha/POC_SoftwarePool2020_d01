function startServer() {
  const express = require('express');
  const app = express();
  app.get('/hello', (req, res) => {
    res.send('world');
  });
  app.get('/repeat-my-fixed', (req, res) => {
    res.sendStatus(200);
  });
  app.get('/repeat-my-query', (req, res) => {
    res.send(req.query.id);
  });
  app.listen(8080);
}

startServer();
