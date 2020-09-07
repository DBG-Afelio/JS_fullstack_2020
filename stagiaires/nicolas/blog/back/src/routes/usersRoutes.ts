import  { Router, Request, Response, NextFunction } from "express";
import { UserDb } from "../services/userDb";

export const router = Router();

router.get('', (request:Request,response:Response, next:NextFunction) => {

    UserDb.getAllUsers()
        .then(result => {

            response.json(result);

        })
        .catch(error => next(error))

});

router.get('/:id', (request:Request,response:Response, next:NextFunction) => {

    UserDb.getUserByid(request.params.id)
        .then(result => {response.json(result.toDto())})
        .catch(error => next(error))

})
router.post('', (request:Request,response:Response, next:NextFunction) => {

    UserDb.createUser(request.body)
        .then(result => {response.json(result)})
        .catch(error => next(error))

})
router.put('/:id', (request:Request,response:Response, next:NextFunction) => {

    UserDb.modifyUser(request.params.id,request.body)
        .then(result => {response.json(result)})
        .catch(error => next(error))
})
router.delete('/:id', (request:Request,response:Response, next:NextFunction) => {

    UserDb.deleteUser(request.params.id)
        .then(result => {response.json(result)})
        .catch(error => next(error))

})