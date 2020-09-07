import  { Router, Request, Response, NextFunction } from "express";
import { ArticleDb } from "../services/articleDb";

export const router = Router();

router.get('', (request:Request,response:Response, next:NextFunction) => {

    ArticleDb.getAllArticles()
        .then(result => {

            response.json(result.map(article => article.toDto()));

        })
        .catch(error => next(error))

});
router.get('/:id', (request:Request,response:Response, next:NextFunction) => {

    ArticleDb.getArticleByid(request.params.id)
        .then(result => {response.json(result.toDto())})
        .catch(error => next(error))

})
router.post('', (request:Request,response:Response, next:NextFunction) => {

    ArticleDb.createArticle(request)
        .then(result => {response.json(result)})
        .catch(error => next(error))

})
router.put('/:id', (request:Request,response:Response, next:NextFunction) => {

    ArticleDb.modifyArticle(request.params.id,request.body)
        .then(result => {response.json(result)})
        .catch(error => next(error))

})
router.delete('/:id', (request:Request,response:Response, next:NextFunction) => {
    console.log(request.params.id)
    ArticleDb.deleteArticle(request.params.id)
        .then(result => {response.json(result)})
        .catch(error => next(error))

})