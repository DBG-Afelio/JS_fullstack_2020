import { Router, Request, Response, NextFunction } from 'express';
import { ArticlesService } from '../services/Articles.Queries';
import { Article } from '../models/Articles.model';
import { CreateArticleDto } from '../dtos/ArticleListDto';
export const router = Router();

const articleService = new ArticlesService();

router.get('', (request: Request, response: Response, next: NextFunction) => {
    articleService.getAllArticles()
        .then((result: Article[]) => {
            response.json(result.map((art: Article) => art.toDto()))
        })
        .catch(next)
});

router.get('/:id', (request, response, next) => {
    const id: number = parseInt(request.params.id, 10);
    articleService.getArticleById(id)
        .then((result: Article) => response.json(result.toDto()))
        .catch(next)
});

// POST /articles
router.post('', (request, response, next) => {
    articleService.addArticle(request.body)
        .then((result:Article) => response.json(result.toDto()))
        .catch(next)
});

// PUT /articles/1
router.put('/:id', (request, response, next) => {
    const id: number = parseInt(request.params.id, 10);
    articleService.updateArticle(request.body, id)
        .then(result => response.json(result.toDto()))
        .catch(next)
});
// DELETE /articles/1

