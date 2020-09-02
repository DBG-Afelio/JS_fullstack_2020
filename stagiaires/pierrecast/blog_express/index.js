const express = require('express');
const articles = require('./routes/articles');
const auteurs = require('./routes/auteurs');
const commentaires = require('./routes/commentaires');
const categories = require('./routes/categories');
const categories_articles = require('./routes/categories_articles');
const censures = require('./routes/censures');

const app = express();


app.use(express.json())

app.use('/articles', articles);
app.use('/auteurs', auteurs);
app.use('/commentaires', commentaires);
app.use('/categories', categories);
app.use('/categories_articles', categories_articles);
app.use('/censures', censures);

app.use((error, req, res, next) => {
    error.code = error.code || 500;
    res.status(error.code).json({message: error.message,
    code: error.code});
});

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));