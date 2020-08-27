const express = require('express');
const articles = require('./routes/articles');

const app = express();

app.use(express.json());
app.use('/articles', articles);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));