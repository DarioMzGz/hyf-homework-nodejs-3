const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("Hello World!");
})

const users = []
var cont = 0
app.get('/users', function(req, res) {
    if (cont > 0) {
        res.send([{ id: 0 }])
    } else {
        cont += 1
        res.send(users)
    }
});

app.get('/user/:id', function(req, res) {
    res.json({
        id: parseInt(req.params.id, 10)
    });
});

app.post('/user', function(req, res) {
    res.send({ id: 0 })
});

app.listen(3000, function() {
    console.log("Server is running...");
});