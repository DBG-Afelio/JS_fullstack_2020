// Passer votre souris au-dessus des petites vagues rouges pour inspecter les erreurs
// Passer au dessus des variables pour déterminer leur type
// Fixer l'erreur de type

let pi:number = 3.14159;
let tau:number = pi * 2;

// Inspecter le type des variables
// Ajouter une annotation de type aux variables
// Essayer d'assigner des types invalides, juste pour voir

let tarte:string;
let age:number;
let found:boolean;
let cotes:number[];

tarte = 'fraise';
age = 22;
found = true;
cotes = [15, 14, 16, 11];

// Inspecter l'erreur, puis la régler

let isMark: boolean;

console.log(`${isMark ? 'Oh, salut Mark' : 'Bonjour, Comment allez vous?'}`);


// Ajouter des annotations de type (aussi explicites que possible) sur toutes les variables
// Régler l'erreur éventuelle

const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;

const members = [
  integer,
  float,
  hex,
  binary,
  octal,
  negZero,
  actuallyNumber,
  largestNumber,
  mostBiglyNumber
];

members[0] = '12345';

// Ajouter des annotations aussi explicites que possibles


const sequence = [1, 2, 3, 4, 5, 6, 7];
const animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays = [sequence, animals, stringsAndNumbers];


// Ecrire une fonction qui prend un paramètre nom obligatoire et un prenom facultatif
// et renvoie le "nom complet"




// ajouter toutes les annotations possible à ces fonctions
// Ajouter un salut par défault : "SALUT"
function salut(salutation) {
  return salutation.toUpperCase();
}

const defaultGreeting = greet();


function salue(nom) {
  return "bonjour " + nom;
}

function add(x, y) {
  return x + y;
}

function greet(greeting) {
  return greeting.toUpperCase();
}



function sumArray(numbers) {
  return numbers.reduce(add, 0);
}

const somme = sumArray(['3', '6', '9']);

// ne pas oublier d'indiquer la valeur de retour de cette fonction

function layEggs(quantity, color) {
  console.log(`You just laid ${quantity} ${color} eggs. Good job!`);
}



// PLUS COMPLIQUÉ
// Pour un mot, on calcule son score au scrabble
// Ajouter le annotations partout où c'est possible

function computeScore(word) {
  const letters = word.toUpperCase().split('');
  return letters.reduce((accum, curr) => accum += getPointsFor(curr), 0);
}

function getPointsFor(letter) {
  const lettersAndPoints = [
    ['AEOIULNRST', 1],
    ['DG', 2],
    ['BCMP', 3],
    ['FHVWY', 4],
    ['K', 5],
    ['JX', 8],
    ['QZ', 10],
  ];

  return lettersAndPoints.reduce((computedScore, pointsTuple) => {
    const [letters, score] = pointsTuple;
    if (letters.split('').find((ll) => ll === letter)) {
      return computedScore += score;
    }
    return computedScore;
  }, 0);
}




// Ici nous avons initialisé deux variables avec dtypes de fonction
// Puis plus bas nous leur avons assigné des fonctions
// Régler les erreurs

let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

multiply = function(value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

capitalize = function(x: number, y: number): number {
  return x * y;
}



// Ajouter les conditions dans la fonction pour fixer les erreurs
// Ajouter l'annotion de type de retour de la fonction

function traite(data: unknown) {
  let result: number = -1;

  if () {
    result = parseInt(data);

  } else if () {
    result = data;
  }
  return result;
}


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
