const express = require('express');
const app = express(); // Crea un'istanza express

const { people } = require('./people');

app.get('/json', (req, res) => {
    res.json(people)
})

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname + "/public"});
})
app.get('/about', (req, res) => {
    res.send("Contacts page, I'm Luca!")
})
app.all(/(.*)/, (req, res) => { // /(.*)/ means: every page
    res.send("<h1>404 Not Found</h1>")
})

app.listen(3000);