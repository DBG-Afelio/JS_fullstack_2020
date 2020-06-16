import { Cochon } from './examples/two/cochon';

const baby = new Cochon('Baby', 'F'); // instanciation
const piggy = new Cochon('Piggy', 'M'); // instanciation

const baggy = baby.rencontreCochon(piggy);
if (baggy) {
    console.log(`l'enfant est né il s'appelle ${baggy.getNom()}`)
}

// baby.disBonjour();
// piggy.disBonjour();

// Accesseur et encapsulation

// console.log(`la couleur de piggy ${piggy.couleur}`);

// piggy.couleur = 'rouge';

// console.log(`la couleur de piggy ${piggy.couleur}`);
// console.log(`la couleur de piggy ${piggy.sexe}`); // erreur

// piggy.setCouleur('rouge');
// console.log ('La couleur de Piggy est', piggy.getCouleur());

// // baby.setCouleur('rouge');
// console.log ('La couleur de Baby est', baby.getCouleur());
// baby.Sexe = 'M';
// console.log ('Le sexe de Baby est', baby.Sexe);
