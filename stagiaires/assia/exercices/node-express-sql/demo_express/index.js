const express = require('express');
const utilisateurs = require('./routes/utilisateurs');
const produits = require('./routes/produits');
const fournisseurs = require('./routes/fournisseurs');
const commandes = require('./routes/commandes');

const app = express();


app.use(express.json())

app.use('/utilisateurs', utilisateurs);
app.use('/produits', produits);
app.use('/fournisseurs', fournisseurs);
app.use('/commandes', commandes);

app.use((err, req, res, next) => {
    res.status(500);
    res.send(err);
});

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));