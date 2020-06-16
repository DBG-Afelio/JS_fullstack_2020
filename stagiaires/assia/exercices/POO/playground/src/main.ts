// Dans un fichier séparé, Créer et exporter une classe Personne avec:
// - 3 propriétés : un nom, un prenom, un age,
// - 3 accesseurs sur ces propriétés
// - un constructeur

// Importer la classe Personne dans ce fichier.
// Déclarer une nouvelle variable;
// Assigner une nouvelle personne à cette variable.
// Créer une function pour afficher une personne (dans la console)
// Appeler la fonction avec la personne créée


// Créer une nouvelle enumeration Couleur (dans un fichier a part), contenant quelques couleurs
// Ajouter une propriété 'favoriteColor' dans la clases Personne en utilisant cette enum
// ajouter une méthode à votre classe personne, pour vérifier que deux personnes ont la même couleur préférée

// modifier l'exercice précédent pour prendre en compte cette couleur
// créer une deuxieme personne

// afficher (dans la console) si ces deux personnes ont la même couleur préférée.

import { Personne } from './Personne'

let unePersonne: Personne = new Personne('John', 'Doe', 30);

function afficherPersonne(personne: Personne): void{
    console.log(`Je m'appelle ${personne.nom} ${personne.prenom} et j'ai ${personne.age}`)
}

afficherPersonne(unePersonne);