/** 
 * fonction qui renvoit une copie d'un tableau de nombre à une dimension
 * @param {Array} le tableau à copier
*/

function copyVector(tab){
    return [...tab];
}
let tab = [1,2,3];
let tabOut = copyVector(tab); 
tab[1] = 7;
console.log('1- ' , tab, tabOut);

/** 
 * fonction qui renvoit une copie d'un tableau de nombre à 2 dimension
 * @param {Array} le tableau à copier
*/
function copyMatrice(tabIn){
    let tabOut = [];
    tabIn.forEach(array => {
        tabOut.push(array);
    });
    return tabOut;
}
tab = [[3,2], [2,3], [1,8]];
tabOut = copyMatrice(tab); 
tab[1] = [7,2];
console.log('2- ' , tab, tabOut);

/** 
 * Fonction qui renvoit une copie d'un tableau de nombre a 2 dimension trié sur la valeur de la première case du sous-tableau
 * @param {Array} le tableau à copier
 * [[3,2], [2,3], [1,8]] => [[1,8], [2,3], [3,2]]
*/
function orderMatriceOnFirstPlace(tabIn) {
    let tabOut = copyMatrice(tabIn);
    
    return tabOut.sort();
}
tab = [[3,2], [2,3], [1,8]];
tabOut = orderMatriceOnFirstPlace(tab); 

console.log('2- ' , tab, tabOut);
