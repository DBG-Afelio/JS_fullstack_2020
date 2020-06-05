/** 
 * fonction qui renvoit une copie d'un tableau de nombre à une dimension
 * @param {Array} le tableau à copier
*/
function copyVector(tab){

}
const vector = [3,23,1];
const tabCopy = copyVector(vector);
console.log('Should be different instance', vector !== tabCopy );
console.log('Should have same values', vector.every((value, index) => value === tabCopy[index]))

/** 
 * fonction qui renvoit une copie d'un tableau de nombre à 2 dimension
 * @param {Array} le tableau à copier
*/
function copyMatrice(tab){

}

const matrice = [[1,2,3],[3,4,5]];
const tabCopy2d = copyMatrice(matrice);

console.log('Should be different instance', matrice !== tabCopy2d );
console.log('Should have same values', matrice.every(
    (vector, line) => {
        vector.every((value, column ) => value === tabCopy2d[line][column])
    }));



/** 
 * Fonction qui renvoit une copie d'un tableau de nombre a 2 dimension trié sur la valeur de la première case du sous-tableau
 * @param {Array} le tableau à copier
 * [[3,2], [2,3], [1,8]] => [[1,8], [2,3], [3,2]]
*/
function orderMatriceOnFirstPlace(tab) {

}

const matriceToOrder = [[3,2], [2,3], [1,8]];
const tabOrdered = orderMatriceOnFirstPlace(matrice);

console.log('Should be different instance', matriceToOrder !== tabOrdered );
console.log('returned tab should be ordered', tabOrdered);
console.log('initial tab should be the same', tabOrdered);