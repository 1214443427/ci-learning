const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const msg = "This is unused"
    res.send('Works on my machine.');
});

module.exports = app;
