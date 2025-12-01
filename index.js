const express = require('express');
const app = express(); // Crea un'istanza express
const { users } = require('./users')

app.use(express.static('public'))

// Routes
app.get('/',      (req, res) => { res.send("<h1>Welcome to the Homepage!</h1>")             })
app.get('/about', (req, res) => { res.sendFile('about.html', {root: __dirname + "/public"}) })
app.get('/users', (req, res) => { res.json(users)                                           })

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id)

    if(!user) { res.send('<h1>No user found</h1>');
    } else { res.json(user) }
})

app.get('/search', (req, res) => {
    const { query, limit} = req.query;

    // localhost:3000/search?query=L&limit=1
    let usersCopy = [...users];

    if (query) {

        usersCopy = usersCopy.filter((user) => {
            return user.name.toLowerCase().startsWith(query.toLowerCase());
        })
    }

    if (limit) {
        usersCopy = usersCopy.slice(0, Number(limit));
    }


    res.json(usersCopy)
}) 



const middleware1 = (req, res, next) => {
    const { method, url } = req;
    console.log(method, url)

    res.send("<h1>Middleware1 Called</h1>")

    next()
}

const middleware2 = (req, res, next) => {
    res.send("<h2>Middleware2 Called</h2>")
    next()
}

const middleware3 = (req, res, next) => {
    res.send("<h3>Middleware3 Called</h3>");
    next()
}

app.get('/middleware', middleware1, middleware2, middleware3, (req, res) => {
    res.send("<h4>Middleware4 (def) called");
})

app.listen(3000);