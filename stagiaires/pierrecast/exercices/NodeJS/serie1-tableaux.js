let tests = [];



// Vérifie si un des éléments du tableau est plus grand que 10

function unPlusGrandQue10(tab) {
    return tab.some(nb => nb > 10);
};
tests.push(['unPlusGrandQue10', unPlusGrandQue10([2, 3, 4, 11]) === true]);
tests.push(['unPlusGrandQue10', unPlusGrandQue10([2, 3, 4, 10]) === false]);

// Vérifie si un des mots dans un tableau de chaînes de caractères comporte plus de 10 lettres.

function motPlusGrandQue10(tab) {   
    return tab.some(nb => nb.length > 10);
};
tests.push(['motPlusGrandQue10', motPlusGrandQue10(['abc', 'abcdef', 'abcdefghijkl',  'abc']) === true]);
tests.push(['motPlusGrandQue10', motPlusGrandQue10(['abc', 'abcdef', 'abcd',  'abc']) === false]);



// Vérifie que tous les élements d'un tableau sont pairs

function tousPairs(tab) {
    return tab.every(nb => nb % 2 === 0)
};
tests.push(['tousPairs', tousPairs([2, 4, 6, 8]) === true]);
tests.push(['tousPairs', tousPairs([2, 4, 7, 8]) === false]);



// Vérifie si 'manger' est dans une phrase.

function contientManger(sentence){
    let words = sentence.split(' ');
    return words.includes('manger');
};
tests.push(['contientManger', contientManger('Il faut manger des pommes') === true]);
tests.push(['contientManger', contientManger('Il faut boire') === false]);
 
// Renvoie la somme de tous les nombres dans un tableau

function sommeTous(tab){
    
    return tab.reduce((sum, item) => sum + item, 0);
}
tests.push(['sommeTous', sommeTous([1,2,3,4]) === 10]);



// Affiche tous les éléments d'un tableau sur une ligne séparée.

function afficheElements(tab){
    tab.forEach(item => {
        console.log(item);
    });
}
// ???? AfficheElements



// Renvoie un tableau avec les pairs contenus dans le tableau reçu en input

function seulementImpairs(tabIn){
    return tabIn.filter(item => item % 2 === 0);
}

tests.push(['seulementImpairs', seulementImpairs([1,2,3,4]).join('|') === [2,4].join('|') ]);



// Vérifie que tous les élements d'une matrice (tableau à deux dimensions) sont positifs

function matricePositive(tab){
    return tab.every(array => array.every(item => item > 0));
};
// ????? tests.push(['matricePositive', matricePositive([1,2],[3,4,5]) === true]);




// Renvoie un tableau moins son premier élément.

function tableauMoinsPremier(tab){
    tab.shift();
    return tab;
}
tests.push(['tableauMoinsPremier', tableauMoinsPremier([1,2,6,4]).join('|') === [2,6,4].join('|') ]);


// Prend un tableau de noms, et renvoie une chaîne de caractère contenant les mots de la liste
// séparés par des virgules, sauf le dernier qui est précédé de "et".
// Exemple : listeNoms(['Jean', 'Jacques', 'Aline']) ==> 'Jean, Jacques et Aline'

function listeNoms(tabIn){
    let tabOut = [...tabIn];
    let last = tabOut[tabOut.length-1];
    tabOut.pop();
    return tabOut.join(', ')+ " et " + last;
}
tests.push(['listeNoms', listeNoms(['Jean', 'Jacques', 'Aline']) === 'Jean, Jacques et Aline']);


// Renvoie les initiales d'une personne dont elle reçoit le nom en input.
// Ex: "John Fitzgerald Kennedy" => "J.F.K."
function initiales(name){
    ;
    let names = name.split(' ').map(item => item[0]);
    return names.join('.')+'.';
}
tests.push(['initiales', initiales("John Fitzgerald Kennedy") === "J.F.K."]);


// Renvoie les chaines de caractères qui ne contiennent qu'un seul mot

function seulementUnMot(tab){
    return tab.filter(item => item.indexOf(' ') === -1);
}

tests.push(['seulementUnMot', seulementUnMot(["John Fitzgerald Kennedy", "John Kennedy", "John", "Lisa"]).join('|') === 'John|Lisa' ]);

// Concatène deux tableaux : le plus long doit suivre le premier. Si ils ont la même longueur, le second suit le premier.

function concateneTableaux(tab1, tab2){
    return (tab2.length >= tab1.length) ? [...tab2, ...tab1] : [...tab1, ...tab2]
}

tests.push(['concateneTableaux', concateneTableaux([1,2], [2,3]).join('|') === [2,3,1,2].join('|')]);


// Effectue la "rotation" des éléments d'un tableau (en place). Le premier élément doit se retrouver à la fin du tableau.
// Ex: input: ["a", "b", "c", "d"] output : ["b", "c", "d", "a"]

function rotationTableau(tab){
   let first = tab[0]; 
   tab.shift();
   tab.push(first);
   return tab;
}

tests.push(['rotationTableau', rotationTableau(["a", "b", "c", "d"]).join('|') === ["b", "c", "d", "a"].join('|')]);


// Ajoute une valeur à la fin d'un tableau (en place), seulement si elle ne se trouve pas déjà dedans.

function ajouteSiPas(tab, nb){
    if (!tab.includes(nb)) {
        tab.push(nb);
    }
    return tab;
}

tests.push(['ajouteSiPas', ajouteSiPas(["A", "B", "C"], "D").join('|') === ["A", "B", "C", "D"].join('|')]);
tests.push(['ajouteSiPas', ajouteSiPas(["A", "B", "C"], "C").join('|') === ["A", "B", "C"].join('|')]);

// Renvoie un tableau de tableaux "applati".
//   Ex : applatit([[2, 3, 4], [5, 6, 7]]) ==> [2, 3, 4, 5, 6, 7].

function applatit(tabIn){
    let tabOut = tabIn.flat();
    return tabOut;
}
tests.push(['applatit', applatit([[2, 3, 4], [5, 6, 7]]).join('|') === [2, 3, 4, 5, 6, 7].join('|')]); 


// Vérifie si tous les éléments d'un tableau sont identiques.

function tousIdentiques(tab){
    return tab.every(item => item === tab[0]);
}

tests.push(['tousIdentiques', tousIdentiques([ 1,1,1,1,1,1]) === true]); 
tests.push(['tousIdentiques', tousIdentiques([ 1,1,2,1,1,1]) === false]); 


// Incrémente chaque élement d'un tableau de nombres de 1 (dans un nouveau tableau).

function incrementeTableau(tab){
    return tab.map(item => item +1);
}
tests.push(['incrementeTableau', incrementeTableau([ 1,1,6,1,1,1]).join('|') === [ 2,2,7,2,2,2].join('|')]); 
tests.push(['incrementeTableau', incrementeTableau([ 1,1,6,1,1,1]).join('|') !== [ 2,2,8,2,2,2].join('|')]); 


// Renvoie le plus long mot contenu dans une chaine de caractères.

function plusLong(string){
    let tab = string.split(' ');
    let max = '';
    tab.forEach(item =>  {
        max = (max.length < item.length) ? item : max;
    });
    return  max;
}
tests.push(['plusLong', plusLong('Dont Worry Be Happppy') === 'Happppy']);
tests.push(['plusLong', plusLong('Dont Worrrry Be Happy') === 'Worrrry']);

// Renvoie la somme des éléments d'un tableau

function somme(tab){    
    return tab.reduce((sum, item)  => sum + item, 0);
}
tests.push(['somme', somme([1,2,6,4]) === 13]);

// Renvoie la moyenne des éléments d'un tableau
function moyenne(tab){
    let nb = tab.length;
    return tab.reduce((sum, item)  => sum + item, 0) / nb
}
tests.push(['moyenne', moyenne([1,2,5,4]) === 3]);


// Renvoie le produit des éléments d'un tableau
function produit(tab){
    return tab.reduce((sum, item)  => sum * item, 1);
}
tests.push(['produit', produit([1,2,3]) === 6]);


// Renvoie le produit des éléments non-nuls d'un tableau
function produitNonNuls(tab){ 
    return produit(tab.filter(item => item > 0));
}
tests.push(['produitNonNuls', produitNonNuls([1,2,3, 0]) === 6]);


// Double les nombres dans une matrice, en gardant la structure.
// ex: doubleMatrice([[1, 2, 3]       [[2,   4,  6]
//                    [2, 3, 4]   =>   [4,   6,  8]
//                    [5, 6, 7]])      [10, 12, 14]]

function doubleMatrice(tab){
    tab = tab.map(array => array.map(item => item * 2));
    return tab;
}
let tab1 = [[2, 3, 4], [5, 6, 7]];
let tab2 = [[4, 6, 8], [10, 12, 14]];
tests.push([ 'doubleMatrice', doubleMatrice(tab1).join('|') === tab2.join('|') ]);


// Trie un tableau de nombres.

function trieNombres(tab) {
    return tab.sort((a, b) => a - b);
}
tab1 = [15, 2, 7];
tab2 = [2, 7, 15];
tests.push([ 'trieNombres', trieNombres(tab1).join('|') === tab2.join('|') ]);

// Renvoie le deuxieme maximum d'un tableau.

// ex: secondMax([2, 6, 7, 3, 1, 8, 3]) => 7

function secondMax(tab){
    trieNombres(tab)  // tab.sort(compareNumeric);   
    return tab[tab.length-2];
}



tests.push([ 'secondMax', secondMax([2, 6, 7, 3, 1, 8, 3]) === 7 ]);




/*
// Renvoie un tableau avec les voyelles des mots reçus en input
function seulementVoyelles(tab) {
   
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
*/





tests.forEach(test => console.log(test[0], test[1]));
