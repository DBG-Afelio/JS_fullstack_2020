const express = require('express');
const articles = require('./routes/articles');
const auteurs = require('./routes/auteurs');

const app = express();


app.use(express.json())

app.use('/articles', articles);
app.use('/auteurs', auteurs);

app.use((err, req, res, next) => {
    res.send(err);
});

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));