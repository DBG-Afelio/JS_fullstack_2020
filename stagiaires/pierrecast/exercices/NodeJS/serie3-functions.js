/** 
 * fonction qui renvoit une copie d'un tableau de nombre à une dimension
 * @param {Array} le tableau à copier
*/

function copyVector(tab){
    return [...tab];
}

let tab = [1,2,3];
let tabOut = copyVector(tab); 
console.log('Exercice 1');
console.log('1-Avant Modif : tab' , tab, ' - tabOut', tabOut);
tab[1] = 7;
console.log('1-Après Modif : tab' , tab,' - tabOut',  tabOut);

/** 
 * fonction qui renvoit une copie d'un tableau de nombre à 2 dimension
 * @param {Array} le tableau à copier
*/
function copyMatrice(tabIn){
    let tabOut = [];
    tabIn.forEach(array => {
        tabOut.push(copyVector(array));
    });
    return tabOut;
}
tab = [[3,2], [2,3], [1,8]];
tabOut = copyMatrice(tab); 
console.log('\nExercice 2');
console.log('2-Avant  Modif : tab' , tab, ' - tabOut', tabOut);
tab[1] = [7,2];
console.log('2-Après  Modif : tab' , tab, ' - tabOut', tabOut);

/** 
 * Fonction qui renvoit une copie d'un tableau de nombre a 2 dimension trié sur la valeur de la première case du sous-tableau
 * @param {Array} le tableau à copier
 * [[3,2], [2,3], [1,8]] => [[1,8], [2,3], [3,2]]
*/
function orderMatriceOnFirstPlace(tabIn) {
    let tabOut = copyMatrice(tabIn);
    
    return tabOut.sort(compareNumeric);
}
tab = [[15,2], [2,3], [1,8]];
tabOut = orderMatriceOnFirstPlace(tab); 

console.log('\nExercice 3');
console.log('3- tab' ,  tab,' - tabOut', tabOut);

function compareNumeric(a, b) {
    if (a[0] > b[0]) return 1;
    if (a[0] == b[0]) return 0;
    if (a[0] < b[0]) return -1;
}
 
