const express = require('express');
const utilisateurs = require('./routes/utilisateurs');
const fournisseurs = require('./routes/fournisseurs');
const produits = require('./routes/produits');
const { options } = require('./routes/fournisseurs');
const commandes = require('./routes/commandes');

const app = express();


app.use(express.json());

app.use('/utilisateurs', utilisateurs);

app.use('/fournisseurs',fournisseurs);

app.use('/produits',produits);

app.use('/commades',commandes);

app.use((err, req, res, next) => {
    res.send(err);
});

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));