const express = require('express');
const app = express(); // Crea un'istanza express

// Cleaned code
const { users } = require('./users')

app.get('/api/users', (req, res) => {
    res.status(200).json({success: true, data: users})
})

app.get('/api/users/search', (req, res) => {
    const { startLetter } = req.query;

    let usersCopy = [...users];

    if (startLetter) {
        usersCopy = usersCopy.filter((user) => user.name.toLowerCase().startsWith(startLetter.toLowerCase()));
    }

    res.status(200).json({success: true, data: usersCopy})
})

app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;

    const user = users.find((user) => {
        if(user.id === id) return user 
    })

    res.status(200).json({success: true, data: user})
})
app.listen(3000);