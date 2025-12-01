const express = require('express');
const app = express();

// Middleware
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Middleware Users
const usersRouter = require('./routes/users')
const usersPath = '/api/users';
app.use(usersPath, usersRouter);

app.listen(3000);