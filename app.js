const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const unused = 'testing a failed PR';
    res.status(200).send('Works on my machine.');
});

module.exports = app;
