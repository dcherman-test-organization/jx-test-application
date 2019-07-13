const express = require('express');
const {createLightship} = require('lightship');
const app = express();


app.get('/', (request, response) => {
  response.send('Hello, World!');
});

const lightship = createLightship();
const server = app.listen(process.env.PORT, () => {
  lightship.signalReady();
});

lightship.registerShutdownHandler(async () => {
  return new Promise((resolve, reject) => {
    server.close((err) => err ? reject(err) : resolve());
  });
});
