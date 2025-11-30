const express = require('express');
const app = express(); // Crea un'istanza express


// Questo serve a far in modo che, se ad esempio 
// la pagina index.html richiede style.css, automaticamente 
// Express lo prende dalla cartella.

// Ad esempio, se in public ho /public/index.html e /public/style.css, 
// Express va automaticamente ad usare style.css, senza bisogno della
// mia autorizzazione.
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