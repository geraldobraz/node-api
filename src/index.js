const express = require('express');

const app = express();

const personRoute = require('./routes/person');

const path = require('path');

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    next();
});

app.use(personRoute);
app.use(express.static('public'));

// Handler for 404 - Resource Not Found!
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!')
});
// Handler for Error 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`The server has started on ${PORT}`);
});
