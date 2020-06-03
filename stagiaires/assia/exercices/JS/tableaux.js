let tests = [];

//1 Vérifie si un des éléments du tableau est plus grand que 10
function unPlusGrandQue10(nbArr) {
    return nbArr.some(nb => nb > 10);
};
tests.push(['unPlusGrandQue10', unPlusGrandQue10([2, 3, 4, 11]) === true]);
tests.push(['unPlusGrandQue10', unPlusGrandQue10([2, 3, 4, 1]) === false]);

//2 Vérifie si un des mots dans un tableau de chaînes de caractères comporte plus de 10 lettres.
function motPlusGrandQue10(stringArr) {
    return stringArr.some(str => str.length > 10);
};
tests.push(['motPlusGrandQue10', motPlusGrandQue10(['abrac', 'abracadbr', 'jecontiensplusde10lettres']) === true ]);
tests.push(['motPlusGrandQue10', motPlusGrandQue10(['abrac', 'abracadbr', 'je']) === false]);

//3 Vérifie que tous les élements d'un tableau sont pairs
function tousPairs(nbPairArr) {
    return (nbPairArr.every((nb) => nb % 2 == 0));
};
tests.push(['tousPairs', tousPairs([2, 4, 10, 1]) === false]);
tests.push(['tousPairs', tousPairs([2, 4, 10, 0]) === true]);

//4 Vérifie si 'manger' est dans une phrase.
function contientManger(string) {
    return string.includes('manger');
};
tests.push(['contientManger', contientManger('je vais manger chez moi') === true]);
tests.push(['contientManger', contientManger('je vais boire une biere') === false]);

//5 Renvoie la somme de tous les nombres dans un tableau
function sommeTous(nbArr) {
    return nbArr.reduce((accumulateur, currentValue) => accumulateur + currentValue, 0); //ici l'index 0 est facultatif
}
tests.push(['sommeTous', sommeTous([2, 3, 4, 11]) === 20]);

//6 Affiche tous les éléments d'un tableau sur une ligne séparée.
function afficheElements(elementArr) {
    elementArr.forEach(elt => console.log(elt));
    return true;
}
tests.push(['afficheElements', afficheElements(['boo', 2, 'too', 4, 11])]);

//7 Renvoie un tableau avec les impairs contenus dans le tableau reçu en input
function seulementImpairs(nbArr) {
    let arr = nbArr.filter(nb => nb % 2 != 0);
    console.log(arr);
    return arr;
}
tests.push(['seulementImpairs', seulementImpairs([0, 1, 2, 3, 5, 7, 11]) === [ 1, 3, 5, 7, 11 ]]);

//8 Vérifie que tous les élements d'une matrice (tableau à deux dimensions) sont positifs
function matricePositive(arr2d) {
    return !(arr2d.some(nb => nb < 0));
};
tests.push(['matricePositive', matricePositive([[12, 45, 74, 1],[2, 532, 98, 0]]) === true]);
tests.push(['matricePositive', matricePositive([[12, -45, 74, -1],[-2, 532, -98, 0]]) === false]); // ?

//9 Renvoie un tableau moins son premier élément.
function tableauMoinsPremier(arr) { 
    arr.shift();
    console.log(arr);
    return arr;
}
tests.push(['tableauMoinsPremier', tableauMoinsPremier([2, 3, 6, 7, 11]) === [ 3, 6, 7, 11 ]]);

//10 Prend un tableau de noms, et renvoie une chaîne de caractère contenant les mots de la liste
// séparés par des virgules, sauf le dernier qui est précédé de "et".
// Exemple : listeNoms(['Jean', 'Jacques', 'Aline']) ==> 'Jean, Jacques et Aline'
function listeNoms(arr) {
    const lastWord = arr.pop();
    let str = arr.toString(); // ou join()?
    return str.concat(' et ', lastWord);
}
tests.push(['listeNoms', listeNoms(['Sauciflard', 'fromdu', 'pinard']) === 'Sauciflard, fromdu et pinard']);

//11 Renvoie les initiales d'une personne dont elle reçoit le nom en input.
// Ex: "John Fitzgerald Kennedy" => "J.F.K."
function initiales(nameStr) {
    const nameArr = nameStr.trim().split(' ');
    let initialsArr = Array.from(nameArr, name => name.charAt(0));
    const initials = initialsArr.toString().split(',').join('.').toUpperCase(); // pourquoi replaceAll() avec une regex renvoit une erreur function ??
    console.log(initials);
    return initials;
}
tests.push(['initiales', initiales('Godefroy de Montmirail') === 'G.D.M']);

//12 Renvoie les chaines de caractères qui ne contiennent qu'un seul mot
function seulementUnMot(arr) {
    let oneWordArr = arr.filter(str => console.log(str.includes(' ')));
    console.log(oneWordArr);
    return oneWordArr;
}
tests.push(['seulementUnMot', seulementUnMot(['je suis partie', 'hello','je suis la', 'personnel']) === ['hello', 'personnel']]);

//13 Concatène deux tableaux : le plus long doit suivre le premier. Si ils ont la même longueur, le second suit le premier.
function concateneTableaux(arr1, arr2) {
    console.log(arr2.length >= arr1.length ? arr1.concat(arr2) : arr2.concat(arr1));
    return (arr2.length >= arr1.length ? arr1.concat(arr2) : arr2.concat(arr1));
}
tests.push(['concateneTableaux', concateneTableaux([2, 4, 5, 6], [1, 2]) === [1, 2, 2, 4, 5, 6]]);
tests.push(['concateneTableaux', concateneTableaux([1, 2], [2, 4, 5, 6]) === [1, 2, 2, 4, 5, 6]]);
tests.push(['concateneTableaux', concateneTableaux([1, 2, 7, 8], [2, 4, 5, 6]) === [1, 2, 7, 8, 2, 4, 5, 6]]);  // ? affichage different ?

// Effectue la "rotation" des éléments d'un tableau (en place). Le premier élément doit se retrouver à la fin du tableau.
// Ex: input: ["a", "b", "c", "d"] output : ["b", "c", "d", "a"]
function rotationTableau(arr) {
    arr.push(arr.shift());
    console.log(arr);
    return arr;
}
tests.push(['rotationTableau', rotationTableau(["a", "b", "c", "d"]) === ["b", "c", "d", "a"]]);

// Ajoute une valeur à la fin d'un tableau (en place), seulement si elle ne se trouve pas déjà dedans.
function ajouteSiPas(nbAjout, arr) {
    arr.includes(nbAjout) ? arr : arr.push(nbAjout);
    return arr;
}
tests.push(['ajouteSiPas', ajouteSiPas(3, [2, 4, 5, 6]) === [2, 4, 5, 6, 3]]);
tests.push(['ajouteSiPas', ajouteSiPas(3, [3, 4, 5, 6]) === [3, 4, 5, 6]]);

// Renvoie un tableau de tableaux "applati".
//   Ex : applatit([[2, 3, 4], [5, 6, 7]]) ==> [2, 3, 4, 5, 6, 7].
function applatit(arr) {
    return arr.flat();   //flat(profondeur) >> profondeur est facultatif ici et = 1
}
tests.push(['applatit', applatit([[2, 3, 4], [5, 6, 7]]) === [2, 3, 4, 5, 6, 7]]);

// Vérifie si tous les éléments d'un tableau sont identiques.
function tousIdentiques(arr) {
    const value = sommeTous(arr) / arr.length;
    return arr.every(el => el == value);
}
tests.push(['tousIdentiques', tousIdentiques([5, 5, 5, 5, 5]) === true]);
tests.push(['tousIdentiques', tousIdentiques([5, 5, 5, 4, 6]) === false]);

// Incrémente chaque élement d'un tableau de nombres de 1 (dans un nouveau tableau).
function incrementeTableau(arr) {
    let newArr = Array.from(arr, el => el + 1);         //ou map()
    console.log(arr, 'elt +1 =>', newArr);
    return newArr;
}
tests.push(['incrementeTableau', incrementeTableau([5, 1, 10, 0, -2]) === [ 6, 2, 11, 1, -1 ]]);

// Renvoie le plus long mot contenu dans une chaine de caractères.
function plusLong(str) {
    let arr = str.split(' ');
    const order = arr.sort((a, b) => a.length + b.length);   // ca ca ne marche pas
    console.log(order);
    const plusLong = order[0];
    console.log(plusLong);
    return plusLong;
}
tests.push(['plusLong', plusLong('Zonjour Dans cette phrase jeSuisLeMotLePlusLong') === 'jeSuisLeMotLePlusLong']);

// Renvoie la somme des éléments d'un tableau
function somme(arr) {
    const tab = [];
    tab[0] = sommeTous(arr);
    console.log(tab);
    return tab;
}
tests.push(['somme', somme([5, 1, 10, 0, -2]) === [ 14 ]]);


// Renvoie la moyenne des éléments d'un tableau
function moyenne(arr) {
    return sommeTous(arr) / arr.length;
}
tests.push(['moyenne', moyenne([5, 1, 10, 6, 8]) === 6]);

// Renvoie le produit des éléments d'un tableau
function produit(arr) {
    return arr.reduce((acc, currVal) => acc * currVal);
}
tests.push(['produit', produit([5, 1, 10, 6, 8]) === 2400]);

// Renvoie le produit des éléments non-nuls d'un tableau
function produitNonNuls(arr) {
    return produit(arr.filter(nb => nb != 0));
}
tests.push(['produitNonNuls', produitNonNuls([5, 0, 1, 10, 0, 6, 8, 0]) === 2400]);

// Double les nombres dans une matrice, en gardant la structure.
// ex: doubleMatrice([[1, 2, 3]       [[2,   4,  6]
//                    [2, 3, 4]   =>   [4,   6,  8]
//                    [5, 6, 7]])      [10, 12, 14]]

function doubleMatrice(arr2d) {
    let newArr = arr2d.map(nb => nb * 2);
    console.log('doubleMatrice :',+newArr);
    return newArr;
}
tests.push(['doubleMatrice', doubleMatrice([[1, 2, 3],[2, 3, 4],[5, 6, 7]]) === [[2, 4, 6],[4, 6, 8],[10, 12, 14]]]);

// Trie un tableau de nombres.
function trieNombres(arr){
    return arr.sort((a, b) => a - b);
}
tests.push(['trieNombres', trieNombres([5, 0, 1, 10, 6, 8]) === [0, 1, 5, 6, 8, 10]]);

// Renvoie le deuxieme maximum d'un tableau.
// ex: secondMax([2, 6, 7, 3, 1, 8, 3]) => 7
function secondMax(arr) {
    return trieNombres(arr)[arr.length - 2];
}
tests.push(['secondMax', secondMax([2, 6, 7, 3, 1, 8, 3]) === 7]);
    
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

function sommePositifsNegatifs(arr){
    let positifArr = arr.filter(nb => nb >= 0);
    let negatifArr = arr.filter(nb => nb < 0);
    return [sommeTous(positifArr), sommeTous(negatifArr)];
}
tests.push(['sommePositifsNegatifs', sommePositifsNegatifs([2, -3, -2, 4, -5, -2, 3, -3, 1]) === [10, -15]]);


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


tests.forEach(test => console.log(test[0], test[1] ? 'PASS' : 'FAIL'));
