// Passer votre souris au-dessus des petites vagues rouges pour inspecter les erreurs
// Passer au dessus des variables pour déterminer leur type
// Fixer l'erreur de type

let pi: number = 3.14159;
let tau = pi * 2;

// Inspecter le type des variables
// Ajouter une annotation de type aux variables
// Essayer d'assigner des types invalides, juste pour voir

let tarte;
let age;
let found;
let cotes;

tarte = 'fraise';
age = 22;
found = true;
cotes = [15, 14, 16, 11];

// Inspecter l'erreur, puis la régler

let isMark: boolean = true;

console.log(`${isMark ? 'Oh, salut Mark' : 'Bonjour, Comment allez vous?'}`);


// Ajouter des annotations de type (aussi explicites que possible) sur toutes les variables
// Régler l'erreur éventuelle

const integer: number = 6;
const float: number = 6.66;
const hex:number = 0xf00d;
const binary:number = 0b1010011010;
const octal:number = 0o744;
const negZero:number = -0;
const actuallyNumber: number = NaN;
const largestNumber: number = Number.MAX_VALUE;
const mostBiglyNumber: number = Infinity;

const members: number[] = [
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

members[0] = 12345;

// Ajouter des annotations aussi explicites que possibles


const sequence: number[] = [1, 2, 3, 4, 5, 6, 7];
const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers: (string | number)[] = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays: (string | number)[][] = [sequence, animals, stringsAndNumbers];
let stringOrNumber: [number, string[]] = [3, animals];
let stringOrNumberArrays: (number[] | string[])[] = [sequence, animals];
stringOrNumberArrays = [sequence, animals, sequence];

// Ecrire une fonction qui prend un paramètre 'nom' obligatoire et un 'prenom' facultatif
// et renvoie le "nom complet"

function nomComplet(nom: string, prenom?:string): string {
  return nom + prenom;
}



// ajouter toutes les annotations possible à ces fonctions
// Ajouter un salut par défault : "SALUT"
function salut(salutation?: string):string  {
  let resultat = '';
  if (salutation !== undefined){
    resultat =  salutation.toUpperCase();
  }
  return resultat;
}
function salut2(salutation = ''):string  {
    return salutation.toUpperCase();
}


const defaultGreeting = salut();



function add(x: number, y: number): number {
  return x + y;
}




function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

const somme = sumArray([3, 6, 9]);

// ne pas oublier d'indiquer la valeur de retour de cette fonction

function layEggs(quantity: number, color: string): void {
  console.log(`You just laid ${quantity} ${color} eggs. Good job!`);
}



// PLUS COMPLIQUÉ
// Pour un mot, on calcule son score au scrabble
// Ajouter le annotations partout où c'est possible

function computeScore(word: string): number {
  const letters = word.toUpperCase().split('');
  return letters.reduce((accum, curr) => accum += getPointsFor(curr), 0);
}

function getPointsFor(letter: string) {
  const lettersAndPoints: [string, number][] = [
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
    if (letters.split('').find((ll: string) => ll === letter)) {
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

capitalize = function(value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

multiply = function(x: number, y: number): number {
  return x * y;
}



// Ajouter les conditions dans la fonction pour fixer les erreurs
// Ajouter l'annotion de type de retour de la fonction

function traite(data: unknown): number {
  let result: number = -1;

  if (typeof data === 'string') {
    result = parseInt(data);

  } else if (typeof data === 'number') {
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
