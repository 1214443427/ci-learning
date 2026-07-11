const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Works on my machine.');
});

module.exports = app;
