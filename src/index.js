function startServer() {
  const express = require('express');
  const app = express();
  app.get('/hello', (req, res) => {
    res.send('world');
  });
  app.listen(8080);
}

startServer();
