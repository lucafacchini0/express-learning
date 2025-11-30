const express = require('express');
const app = express(); // Crea un'istanza express

const { people } = require('./people');

app.get('/people', (req, res) => {
    res.json(people)
})

app.listen(3000);