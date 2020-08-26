const express = require('express');

const app = express();
const template = require('./template/home.js');




app.get('', (request, response, next) => {
   const response_html = template.home.replace('{{name}}', 'denis');
   console.log(response_html);
   response.send(response_html);
});

app.use((err, req, res, next) => {
    res.send(err);
});

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));