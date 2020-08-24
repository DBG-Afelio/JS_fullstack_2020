const express = require('express');
const utilisateurs = require('./routes/utilisateurs');
const fournisseurs = require('./routes/fournisseurs');
const produits = require('./routes/produits');
const commandes = require('./routes/commandes');

const app = express();
/*const cors = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method === "OPTIONS") {
        res.setHeader('Access-Control-Allow-Headers', 'Accept' , 'Content-Type');
    }
    next();
}*/

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, OPTIONS");
    next();
  })
/*
app.use((req,res, next) => {
    console.log('Detail de requête')
    console.log(req.method);
    console.log(req.url);
    next();
});
app.use(cors);*/

app.use(express.json())
app.use('/utilisateurs', utilisateurs);
app.use('/fournisseurs', fournisseurs);
app.use('/produits', produits);
app.use('/commandes', commandes);

app.use((err, req, res, next) => {
    
    res.send(err);
});






const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));