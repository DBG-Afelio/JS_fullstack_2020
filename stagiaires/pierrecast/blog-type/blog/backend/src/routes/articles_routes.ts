import Router, { Request, Response, NextFunction } from 'express';
import { ArticleService } from '../services/article_services';
import { CatArticleService } from '../services/cat_article_services';
import { Article } from '../models/articles_models';

export const router = Router();
const articleService = new ArticleService();
const catArticleService = new CatArticleService();

router.get('/:id', (request: Request, response: Response, next: NextFunction) => {
    // GET /articles/1
    const id = parseInt(request.params.id,10);
    articleService.getArticleById(id)
    .then(result => response.json(result.toArticleItemDto()))
    .catch(next);
});

router.get('', (request: Request, response: Response, next: NextFunction) => {
    if (request.query.auteur_id) {
        // GET /articles?auteurId=1
        const id = parseInt(request.query.auteur_id as string, 10);
        articleService.getArticleByAuteur(id)
        .then(
            (result: Article[]) =>  {
                response.json(
                result.map((art: Article) =>  art.toArticleItemDto())
            )
        })
        .catch(next);
    } else if (request.query.page && request.query.parPage) {
         // GET /articles?page=1&parPage=10
         const page = parseInt(request.query.page as string, 10);
         const parPage = parseInt(request.query.par_page as string, 10);
         articleService.getArticleByPage(page, parPage)
        .then(result => response.json(
            result.map((art: Article) =>  art.toArticleItemDto())
        ))
        .catch(next);
    } else {
        // GET /articles
        articleService.getListArticles()
        .then(result => response.json(
            result.map((art: Article) =>  art.toArticleItemDto())
        ))
        .catch(next);
    }
});

router.post('', async (request: Request, response: Response, next: NextFunction) => {
   // POST /articles

    try {
        await articleService.createArticle(request.body);
        const articleId = await articleService.getInsertId();
        await catArticleService.createCategoriesArticles(request.body.categories, articleId);

        response.send('insertion Articles et Catégories associées réussie');
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.put('/:id', async (request: Request, response: Response, next: NextFunction) => {
    // PUT /articles/1
    const articleId = parseInt(request.params.id,10);
    try {
        await articleService.updateArticle(articleId, request.body)
        await catArticleService.deleteAllCategoriesFromArticle(articleId);
        await catArticleService.createCategoriesArticles(request.body.categories, articleId);

        response.send('mise à jour Articles et Catégories associées réussie');
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.delete('/:id', (request: Request, response: Response, next: NextFunction) => {
    // DELETE /articles/1
    const id = parseInt(request.params.id, 10);
    articleService.deleteArticle(id)
    .then(result => response.json(result))
    .catch(next);

});
