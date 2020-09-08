import express, { Request, Response, NextFunction } from "express";
import { router as articlesRouter } from './routes/Articles.Routes';
import { router as commentairesRouter } from './routes/Commentaires.Routes';
import { router as censuresRouter } from './routes/Censures.Routes';
import { router as auteursRouter } from './routes/Auteurs.Routes';
import { router as categoriesRouter } from './routes/Categories.Routes';

const app = express();

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.use(express.json());
app.use('/articles', articlesRouter);
app.use('/commentaires', commentairesRouter);
app.use('/censures', censuresRouter);
app.use('/auteurs', auteursRouter);
app.use('/categories', categoriesRouter);
// app.use('/articles_categories', articlesCategoriesRouter);

app.use((error: any, request: Request, response: Response, next: NextFunction) => {
    switch (error.message) {
        case 'MOT_INTERDIT':
            response.status(403)
            break;
        case 'FORMAT_INVALIDE':
            response.status(400)
            break;
        case 'SQL_SYNTAX_ERROR':
            response.status(400)
            break;
        case 'INTROUVABLE':
            response.status(404)
            break;
        default:
            response.status(500);
    }
});

const port = 3000; // default port to listen
// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
});





