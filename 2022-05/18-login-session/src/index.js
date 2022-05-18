const config = require('./config');
const express = require('express');

function startServer() {
  const app = express();

  require('./loaders').loaders({ expressApp: app });

  app.listen(config.port, () => {
    console.log(`Server listening on port: ${config.port}`);
  }).on('error', err => {
    console.error(err);
    process.exit(1);
  });

}

startServer();