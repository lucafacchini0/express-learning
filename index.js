const express = require('express');
const app = express(); // Crea un'istanza express

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.listen(3000)