const express = require('express');
const utilisateurs = require('./routes/utilisateurs');
const fournisseurs = require('./routes/fournisseurs');
const produits = require('./routes/produits');
const commandes = require('./routes/commandes');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    next();
  })

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
