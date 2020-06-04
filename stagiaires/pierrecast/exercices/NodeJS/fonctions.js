const tests = [];

// Vérifie si une lettre est une voyelle

function estVoyelle(lettre){
    /*const regex = /^[aeiouy]$/;
    return regex.test(lettre);*/
    const voyelles = ['a','e','i','o','u','y'];

    return voyelles.includes(lettre);
}


// fonction pour ajouter un test, qui prend (minimum) 4 arguments
// 1                 : la fonction (pas une string)
// 2                 : la description du test
// 3...avant-dernier : le (ou les) arguments à la fonction (dans le bon ordre)
// Dernier           : la valeur de retour attendue par la fonction pour l'input
ajouteTest(estVoyelle, 'voyelle' , 'a', true);
ajouteTest(estVoyelle, 'consonne', 'b', false);


// Vérifie si un mot possède une voyelle

function possedeVoyelle(mot){
    /*const regex = /[aeiouy]/;
    return regex.test(mot);*/

    return mot.split('').some(estVoyelle);
}

ajouteTest(possedeVoyelle, 'mot sans voyelle', 'bjr',     false);
ajouteTest(possedeVoyelle, 'mot sans voyelle', 'bonjour', true);
ajouteTest(possedeVoyelle, 'mot vide',         '',        false);

// Prend une chaine de caractères et renvoie un mot composé des voyelles qu'il contient.

function gardeVoyelles(mot){   
    return mot.split('').filter(estVoyelle).join('');
}

ajouteTest(gardeVoyelles, 'voyelles et consonnes', 'hello', 'eo'   ); 
ajouteTest(gardeVoyelles, 'uniquement voyelles'  , 'aeiou', 'aeiou');
ajouteTest(gardeVoyelles, 'sans voyelles'        , 'hll',   ''     );



// Prend une tableau de chaînes de caractères et renvoie uniquement les mots qui possèdent des voyelles

function avecVoyelle(mots){    
    return mots.filter(possedeVoyelle);
}

ajouteTest(avecVoyelle, 'un mot sans voyelles'  , ['bonjour', 'ls', 'amis'], ['bonjour', 'amis']);
ajouteTest(avecVoyelle, 'aucun mot avec voyelle', ['bjr', 'ls', 'ms']      , []                 );


// Prend un tableau de chaines de caractères et renvoie un tableau avec les voyelles des mots qui en contenaient.
// Ex: tableauVoyelles(['bjr', 'allo', 'swtzrlnd', 'cheese']) => ['ao', 'eee']

function tableauVoyelles(mots){
     return mots.map(gardeVoyelles).filter(item => item !== '');
}


ajouteTest(tableauVoyelles, 'aucun mot avec voyelle', ['hll', 'qs', 'ztr']  , []    );
ajouteTest(tableauVoyelles, 'un mot avec voyelle'   , ['hello', 'qs', 'ztr'], ['eo']);

function tousIdentiques(tab){
    
    return tab.every(item => item === tab[0]);
}

ajouteTest(tousIdentiques, 'tous identiques'  , ['a', 'a', 'a', 'a'], true);
ajouteTest(tousIdentiques, 'premier different', ['b', 'a', 'a', 'a'], false);
ajouteTest(tousIdentiques, 'dernier different', ['a', 'a', 'a', 'b'], false);

// Vérifie si tous les mots dans un tableau ne contiennent que la même voyelle (dans le mot, pas entre eux)
// ex: tousMonoVoyelle(['bobo', 'tutu', 'taratata']) => true

function tousMonoVoyelle(mots){
    let tab = tableauVoyelles(mots.map(gardeVoyelles));

    return tab.every(item => tousIdentiques(item.split('')));
}

ajouteTest(tousMonoVoyelle, 'tous monovoyelles'           , ['allah', 'bibi', 'taratata'] , true);
ajouteTest(tousMonoVoyelle, 'premier mot non monovoyelles', ['allaih', 'bibi', 'taratata'], false);

// Renvoie la lettre répétée une fois

function doubleLettre(lettre){
    return lettre+lettre;
}

ajouteTest(doubleLettre, 'lettre a', 'a', 'aa');


// Applique une fonction à toutes les lettres d'un mot

function appliqueAuxVoyelles(fonction, mot){
    return mot.split('').map(lettre => estVoyelle(lettre) ? fonction(lettre) : lettre).join('');
}

ajouteTest(appliqueAuxVoyelles, 'applique doubleLettre', doubleLettre, "bonjour", "boonjoouur");


// Répète une lettre un nombre n de fois
// Utilisez une fonction récursive

function repeteLettre(lettre, n){
    let result = lettre;
    if (n > 1) {
        result += repeteLettre(lettre, n-1);
    }
    return result;
}

ajouteTest(repeteLettre, 'repete 3 fois j', 'j', 3, 'jjj');

// Renvoie une FONCTION qui prend une lettre et renvoie cette lettre répétée n fois

/*
function repeteNfoisLettre(n) {
    return repeteLettre('i', n);
}
*/ 

function repeteNfoisLettre(n) {
    return (lettre) => repeteLettre(lettre, 5);
}

/*
function repeteNfoisLettre(lettre){
    function interne(n) { 
        return repeteLettre(lettre, n);
    }
    return interne(5);
}
*/



// Répète une lettre 5 fois

function repete5FoisLettre() {
    return repeteNfoisLettre(5);
}

ajouteTest(repete5FoisLettre, 'lettre i', 'i', 'iiiii');


// Répète 5 fois chaque voyelle de chaque mot

function repete5FoisVoyelles(mot) {
    return mot.split('').map(letter => (estVoyelle(letter)) ? repeteLettre(letter, 5) : letter).join('');
}
ajouteTest(repete5FoisVoyelles, 'voyelles et consonnes', 'allo', 'aaaaallooooo');




// Vous pouvez ajouter une fonction en paramètre pour afficher les tests d'une fonction en particulier
// ou ne rien mettre pour afficher tous les tests
afficheTests();



/* *******************************************
    NE PAS FAIRE ATTENTION
   POUR LES TESTS
***********************************************/

function afficheTests(fonction = false){
    let filteredTests = fonction ? tests.filter(test =>  test[0] === fonction.name) : tests;
    filteredTests
        .forEach(test => console.log(
            '[',test[2] === true ? '\x1b[32mPASSE\x1b[0m': '\x1b[31mECHOUE\x1b[0m',  ']',
            test[0],
            ':', test[1],
));
}

// permet de tester l'égalité entre les valeurs de deux tableaux
function memeValeurs(tab1, tab2){
    if (tab1 !== undefined && tab2 !== undefined) {
        return tab1.length == tab2.length && tab1.every((element, index) => element === tab2[index]);
    } else
        return false;
}


// ajoute un test dans le tableau de tests, en sélectionnant la bonne méthode de comparaison
function ajouteTest(fonction, description, ...args){
    let output_attendu = args.slice(-1)[0];
    let input = args.slice(0,-1);
    if (typeof fonction != 'function') {
        console.log('LE PREMIER PARAMETRE DOIT CONTENIR LA FONCTION A TESTER');
        return;
    }
    if (output_attendu instanceof Array) {
        tests.push([fonction.name, description, memeValeurs(fonction.apply(null, input) , output_attendu)]);
    }
    else {
        tests.push([fonction.name, description, fonction.apply(null, input) === output_attendu]);
    }
}
