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
    if(req.query.message)
      res.send(req.query.message);
    else
      res.sendStatus(400);
  });
  app.listen(8080);
}

startServer();
