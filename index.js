const express = require('express');
const app = express(); // Crea un'istanza express
const { users } = require('./users')

app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Homepage!</h1>")
})

app.get('/about', (req, res) => {
    res.sendFile('about.html', {root: __dirname + "/public"})
})


app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id)

    if(!user) { res.send('<h1>No user found</h1>');
    } else { res.json(user) }
})

app.listen(3000);