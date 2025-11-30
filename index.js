const express = require('express');
const app = express(); // Crea un'istanza express

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.get('/about', (req, res) => {
    res.send("Contacts page, I'm Luca!")
})

app.all(/(.*)/, (req, res) => { // /(.*)/ means: every page
    res.send("<h1>404 Not Found</h1>")
})

app.listen(3000);