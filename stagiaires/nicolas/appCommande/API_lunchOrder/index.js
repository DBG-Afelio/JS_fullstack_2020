const express = require('express');

const utilisateurs = require('./routes/utilisateurs');
const commandes = require('./routes/commandes');
const fournisseurs = require('./routes/fournisseurs');
const produits = require('./routes/produits');


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');


    next();
  })

app.use(express.json())

app.use('/utilisateurs', utilisateurs)
.use('/commandes', commandes)
.use('/fournisseurs', fournisseurs)
.use('/produits', produits);

app.use((err, req, res, next) => {
    res.send(err);
});

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));