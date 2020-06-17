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

import { Personne } from './Personne';
import { Couleur } from './Couleur';
let unePersonne: Personne = new Personne("Doe", "John", 30, Couleur.Jaune);
let autrePersonne: Personne = new Personne("Luc", "Jean", 20, Couleur.Jaune);

function affichePersonne(personne: Personne, parent: HTMLElement): void {
  let message: string = (`Voici : ${personne.prenom} ${personne.nom}, il a ${personne.age} ans.`);
  let title: HTMLElement = document.createElement('h2');
  title.innerText = message;
  parent.append(title);
}

affichePersonne(unePersonne, document.body);
affichePersonne(autrePersonne, document.body);
