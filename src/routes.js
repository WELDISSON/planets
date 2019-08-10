const express = require('express');
const app = express();
const planetController = require('./controllers/planetController');

app.get('/planets', planetController.index);
app.get(`/planets/name/:name`, planetController.findForName);
app.get('/planets/:id', planetController.findForId);
app.post('/planets', planetController.create);
app.delete('/planets/:id', planetController.destroy);


module.exports = app ;