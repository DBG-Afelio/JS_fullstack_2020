import express, { Request, Response, NextFunction } from "express";
import {router as UsersRoute } from "./routes/usersRoutes";
import {router as ArticlesRoute} from "./routes/articlesRoutes";
import {router as CommentsRoute} from "./routes/commentsRoutes";
import bodyParser from "body-parser"

const usersRoute = UsersRoute;
const articlesRoute = ArticlesRoute;
const commentsRoute = CommentsRoute;

const app = express();
const port = 3000; // default port to listen

app.use((request:Request,response:Response,next:NextFunction) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST,PUT,GET,DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

    next();
})



app.use('/utilisateurs',usersRoute);
app.use('/articles',articlesRoute);
app.use('/commentaires',commentsRoute);


// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );