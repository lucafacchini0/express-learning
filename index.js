const express = require('express');
const app = express(); // Crea un'istanza express

// Cleaned code
const { users } = require('./users')

app.get('/api/users', (req, res) => {
    res.status(200).json({success: true, data: users})
})
app.listen(3000);