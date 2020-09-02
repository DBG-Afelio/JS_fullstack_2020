import express, { Request, Response, NextFunction } from "express";

import {router as articles} from "./routes/articles";
import {router as auteursArticles} from "./routes/auteurs_articles";
import {router as auteursCommentaires} from "./routes/auteurs_commentaires";
import {router as commentaires} from "./routes/commentaires";
import {router as categories} from "./routes/categories";
import {router as forbiddenWords} from "./routes/forbidden_words";



const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, OPTIONS");
    next();
  })
console.log(categories)
app.use( "/articles",articles);
app.use( "/auteursArticles",auteursArticles);
app.use( "/auteursCommentaires",auteursCommentaires);
app.use( "/commentaires",commentaires);
app.use( "/forbiddenWords",forbiddenWords);
app.use( "/categories",categories);

app.use((error:Error, request:Request, response:Response, next:NextFunction) => {
   response.status(checkErrorMessage(error)).send(error.message)
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );