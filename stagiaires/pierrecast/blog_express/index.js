const express = require('express');
const articles = require('./routes/articles');

const app = express();


app.use(express.json())

app.use('/articles', articles);


app.use((err, req, res, next) => {
    res.send(err);
});

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));