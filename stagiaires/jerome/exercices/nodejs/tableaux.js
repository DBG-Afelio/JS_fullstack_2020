// Vérifie si un des éléments du tableau est plus grand que 10

function unPlusGrandQue10 () {
};




// Vérifie si un des mots dans un tableau de chaînes de caractères comporte plus de 10 lettres.

function motPlusGrandQue10 () {
};



// Vérifie que tous les élements d'un tableau sont pairs

function tousPairs() {
};



// Vérifie si 'manger' est dans une phrase.

function contientManger(){
};


// Renvoie la somme de tous les nombres dans un tableau

function sommeTous(){
}


// Affiche tous les éléments d'un tableau sur une ligne séparée.

function afficheElements(){
}


// Renvoie un tableau avec les pairs contenus dans le tableau reçu en input

function seulementImpairs(){
}



// Vérifie que tous les élements d'une matrice (tableau à deux dimensions) sont positifs

function matricePositive(){
};




// Renvoie un tableau moins son premier élément.

function tableauMoinsPremier(){
}



// Prend un tableau de noms, et renvoie une chaîne de caractère contenant les mots de la liste
// séparés par des virgules, sauf le dernier qui est précédé de "et".
// Exemple : listeNoms(['Jean', 'Jacques', 'Aline']) ==> 'Jean, Jacques et Aline'

function listeNoms(){
}



// Renvoie les initiales d'une personne dont elle reçoit le nom en input.
// Ex: "John Fitzgerald Kennedy" => "J.F.K."
function initiales(){
}



// Renvoie les chaines de caractères qui ne contiennent qu'un seul mot

function seulementUnMot(){
}


// Concatène deux tableaux : le plus long doit suivre le premier. Si ils ont la même longueur, le second suit le premier.

function concateneTableaux(){
}



// Effectue la "rotation" des éléments d'un tableau (en place). Le premier élément doit se retrouver à la fin du tableau.
// Ex: input: ["a", "b", "c", "d"] output : ["b", "c", "d", "a"]

function rotationTableau(){
}



// Ajoute une valeur à la fin d'un tableau (en place), seulement si elle ne se trouve pas déjà dedans.

function ajouteSiPas(){
}



// Renvoie un tableau de tableaux "applati".
//   Ex : applatit([[2, 3, 4], [5, 6, 7]]) ==> [2, 3, 4, 5, 6, 7].

function applatit(){
}



// Vérifie si tous les éléments d'un tableau sont identiques.

function tousIdentiques(){
}



// Incrémente chaque élement d'un tableau de nombres de 1 (dans un nouveau tableau).

function incrementeTableau(){
}



// Renvoie le plus long mot contenu dans une chaine de caractères.

function plusLong(){
}


// Renvoie la somme des éléments d'un tableau

function somme(){
}



// Renvoie la moyenne des éléments d'un tableau
function moyenne(){
}



// Renvoie le produit des éléments d'un tableau
function produit(){
}



// Renvoie le produit des éléments non-nuls d'un tableau
function produitNonNuls(){
}



// Double les nombres dans une matrice, en gardant la structure.
// ex: doubleMatrice([[1, 2, 3]       [[2,   4,  6]
//                    [2, 3, 4]   =>   [4,   6,  8]
//                    [5, 6, 7]])      [10, 12, 14]]

function doubleMatrice(){
}



// Trie un tableau de nombres.

function trieNombres(){

}


// Renvoie le deuxieme maximum d'un tableau.

// ex: secondMax([2, 6, 7, 3, 1, 8, 3]) => 7

function secondMax(){

}

// Renvoie un tableau avec les voyelles des mots reçus en input
function seulementVoyelles() {
};


// Renvoie uniquement les lignes qui ne contiennent que des positifs

function lignesTousPositifs(){
}



// Renvoie uniquement les lignes dont la somme est positive
function lignesSommePositive(){
}


// Renvoie uniquement les lignes qui possèdent au moins un nombre positif

function lignesUnPositif(){

}


// Renvoie un tableau de deux cases contenant la somme de tous les nombres positifs et négatifs dans un tableau.

function sommePositifsNegatifs(){
}



// Vérifie si tous les mots dans un tableau ne contiennent que la même voyelle (dans le mot, pas entre eux)
// ex: tousMonoVoyelle(['bobo', 'tutu', 'taratata']) => true

function tousMonoVoyelle(){
}



// Prend une chaine de caractères et ne renvoie que les voyelles qu'il contient.

function voyelles(){
}



// Prend une tableau de chaînes de caractères et renvoie uniquement les mots qui possèdent des voyelles

function avecVoyelle(){
}



// Prend un tableau de chaines de caractères et renvoie un tableau avec les voyelles des mots qui en contenaient.
// Ex: tableauVoyelles(['bjr', 'allo', 'swtzrlnd', 'cheese']) => ['ao', 'eee']

function tableauVoyelles(){
}


// Renvoie si un mot est un palindrome

function estPalindrome(){
}


// Renvoie la somme des moyennes des lignes d'une matrice
function sommeMoyennes(){
}



// Renvoie la somme des produits non-nuls des lignes d'une matrice
function sommeProduitsNonNuls(){
}

// Transforme un nom en kebab-case en camel case
// ex: kebabToCamel("kebab-case") => kebabCase
function kebabToCamel(){

}




let tests = [];
tests.push(['unPlusGrandQue10', unPlusGrandQue10([2, 3, 4, 11]) === true]);

tests.forEach(test => console.log(test[0], test[1]));
