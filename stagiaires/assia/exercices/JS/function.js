const tests = [];
/**
 * fonction qui renvoit une copie d'un tableau de nombre a 1 dimension
 * @param {array} le tableau a copier
 */
function copyArrayOneD(arrayOneD) {
    return [...arrayOneD];
 }
 ajouteTest(copyArrayOneD, 'copie tableau 1D'  , ['bonjour', 'ls', 'amis'], ['bonjour', 'ls', 'amis']);
const tab = [1, 2, 3];
const tabcopy = copyArrayOneD(tab);
console.log(tab === tabcopy);
/**
 * fonction qui renvoit une copie d'un tableau de nombre a 2 dimensions
 * @param {array} le tableau a copier
 */
function copyArrayTwoD(arrayTwoD) {
    return arrayTwoD.map(arr => copyArrayOneD(arr));
}
ajouteTest(copyArrayTwoD, 'copie tableau 2D'  , [['bonjour', 'ls', 'amis'], [5, 12, -400]], [['bonjour', 'ls', 'amis'], [5, 12, -400]]);
const tab2 = [[1, 2, 3][4, 5, 6]];
const tabcopy2 = copyArrayTwoD(tab2);
console.log(tab2 === tabcopy2);
/**
 * fonction qui renvoit une copie d'un tableau de nombre a 2 dimensions trié sur la valeur de la 1ere case du sous-tableau
 * @param {array} le tableau a copier
 * [[3,2], [2,3], [1,8]] => [[1,8], [2,3], [3,2]]
 */
function triArrayTwoD(arrayTwoD) {
    //console.log(arrayTwoD.sort());
    return arrayTwoD.sort();
}
ajouteTest(triArrayTwoD, 'trie tableau 2D sur el #1', [[3, 2], [2, 3], [1, 8]], [[1, 8], [2, 3], [3, 2]]);



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

