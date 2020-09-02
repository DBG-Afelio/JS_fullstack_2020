import  { Router, Request, Response, NextFunction } from "express";
import { CommentDb } from "../services/commentDb";
import { Errors } from "../errors/Errors";

export const router = Router();



router.get('', (request:Request,response:Response, next:NextFunction) => {

    if(request.query.article_id){

        CommentDb.getCommentsByArticleId(request.query.article_id as string)
        .then(result => Errors.noResult(result,response))
        .catch(error => next(error))

    }else{

        CommentDb.getAllComments()
        .then(result => Errors.noResult(result,response))
        .catch(error => next(error))

    }

});

router.get('/:id', (request:Request,response:Response, next:NextFunction) => {

    CommentDb.getCommentByid(request.params.id)
        .then(result => {

            Errors.noResult(result,response);

        })
        .catch(error => next(error))

})
router.post('', (request:Request,response:Response, next:NextFunction) => {

    CommentDb.createComment(request.body)
        .then(result => response.json(result))
        .catch(error => next(error))

})
router.put('/:id', (request:Request,response:Response, next:NextFunction) => {

    CommentDb.modifyComment(request.params.id,request.body)
        .then(result => response.json(result))
        .catch(error => next(error))

})
router.delete('/:id', (request:Request,response:Response, next:NextFunction) => {

    CommentDb.deleteComment(request.params.id)
        .then(result => response.json(result))
        .catch(error => next(error))

})