const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Does not work on my machine.');
});

module.exports = app;