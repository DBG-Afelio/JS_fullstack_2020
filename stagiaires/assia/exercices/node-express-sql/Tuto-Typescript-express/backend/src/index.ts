import express from "express";
import { router as articlesRouter } from './routes/Articles.Routes';
import { router as commentairesRouter } from './routes/Commentaires.Routes';
import { router as censuresRouter } from './routes/Censures.Routes';

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.use(express.json());
app.use('/articles', articlesRouter);
app.use('/commentaires', commentairesRouter);
app.use('/censures', censuresRouter);

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
});





