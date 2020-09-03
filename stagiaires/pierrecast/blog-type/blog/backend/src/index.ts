import express, { NextFunction } from "express";
import { router as articles } from './routes/articles_routes';
import { router as auteurs } from'./routes/auteurs_routes';
import { router as commentaires } from './routes/commentaires_routes';
import { router as categories } from'./routes/categories_routes';
import { router as categories_articles } from './routes/cat_articles_routes';
import { router as censures } from './routes/censures_routes';
const app = express();
const port = 8080; // default port to listen

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    next();
})

app.use('/articles', articles);
app.use('/auteurs', auteurs);
app.use('/commentaires', commentaires);
app.use('/categories', categories);
app.use('/categories_articles', categories_articles);
app.use('/censures', censures);

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.use((err: any, req: any, res: any, next: NextFunction) => {
    console.log('=> Erreurs :');
    switch(err.message) {
        case 'MOT_NTERDIT':
            res.status(403);
            break;
        case 'FORMAT_INVALIDE':
            res.status(400);
            break;
        default:
            res.status(500);
            break;
    }

    res.json({message:err.message});
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
