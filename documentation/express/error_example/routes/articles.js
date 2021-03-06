const { Router } = require('express');
const pool = require('../db/pool');
const router = Router();
const { getListArticles,
    getArticleById, 
    getArticleByAuteur,
    getArticleByPage,
    createArticle, 
    updateArticle, 
    deleteArticle, getInsertId } = require('../models/articles_db');

const { createCategoriesArticles, deleteAllCategoriesFromArticle } = require('../models/categories_articles_db');

router.get('/:id', (request, response) => {
    // GET /articles/1
    const id = parseInt(request.params.id);
    getArticleById(id)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));
    
});

router.get('', (request, response) => {
    if (request.query.auteur_id) {
        // GET /articles?auteur_id=1
        const id = parseInt(request.query.auteur_id);
        getArticleByAuteur(id)
        .then(result => response.json(result))
        .catch(error => response.status(500).send('Erreur'));
    } else if (request.query.page && request.query.par_page) {
         //GET /articles?page=1&par_page=10
         const page = parseInt(request.query.page);
         const par_page = parseInt(request.query.par_page);
         getArticleByPage(page, par_page)
        .then(result => response.json(result))
        .catch(error => response.status(500).send('Erreur'));
    } else {
        // GET /articles
        getListArticles()
        .then(result => response.json(result))
        .catch(error => response.status(500).send('Erreur'));
    }
});

router.post('', async (request, response) => {
   // POST /articles
    
    try {
        await createArticle(request.body);
        const article_id = await getInsertId();
        await createCategoriesArticles(request.body.categories, article_id);

        response.send('insertion Articles et Catégories associées réussie');
    } catch (error) {
        console.log(error);
        response.status(500).send('Erreur');
    }
});

router.put('/:id', async (request, response) => {
    // PUT /articles/1
    const article_id = parseInt(request.params.id);
    try {
        await updateArticle(article_id, request.body)
        await deleteAllCategoriesFromArticle(article_id);
        await createCategoriesArticles(request.body.categories, article_id);

        response.send('mise à jour Articles et Catégories associées réussie');
    } catch (error) {
        console.log(error);
        response.status(500).send('Erreur');
    }
});

router.delete('/:id', (request, response) => {
    // DELETE /articles/1
    const id = parseInt(request.params.id);
    deleteArticle(id)
    .then(result => response.json(result))
    .catch(error => response.status(500).send('Erreur'));

});

module.exports = router;
