const express = require('express');

const app = express();
const template = require('./template/home.js');

const tab = ['a','b'];

const articles = [
    {
        id : '001',
        content :  'Premier Article'
    },
    {
        id : '002',
        content :  'Deuxième Article'
    },
    {
        id : '003',
        content :  'Troisième Article'
    }
];

function renderArticleList(){
    const list_html = '<ul>' + articles.map((article) => `<li><a href="/${article.id}">${article.id}</a></li>`) + '</ul>';
    return list_html;
}

app.get('', (request, response, next) => {
    let response_html = template.home.replace('{{name}}', 'denis');
    response_html = response_html.replace('{{article_List}}', renderArticleList());
   response.send(response_html);
});

app.get('/:id', (request, response, next) => {
        const article = articles.find((art) => art.id === request.params.id)
        response.status(200).send(`<html><body>${article.content}</body></html>`);
});

app.get('/json', (request, response, next) => {
    response.json({message:'<html><body>Salut</body></html>'});
})

app.use((err, req, res, next) => {
    res.send(err);
});

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));