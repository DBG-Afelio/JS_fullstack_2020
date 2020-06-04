/** 
 * fonction qui renvoit une copie d'un tableau de nombre à une dimension
 * @param {Array} le tableau à copier
*/

// Pierre : on peut faire ceci avec la méthode slice qui peut prendre 2 paramètres : index de début et index de fin; ici vu que je veux copier l'entièreté du tableuau
// l'index de début suffit - on peut donc utiliser slice avec un seul paramètre ; edit en fait on peut même ne mettre aucun param

const array = [1, 3, 5, 7, 9];

function copyVector(tab){

    return [...tab];

}

/** 
 * fonction qui renvoit une copie d'un tableau de nombre à 2 dimension
 * @param {Array} le tableau à copier
*/
function copyMatrice(tab){

    return [...tab];

}


/** 
 * Fonction qui renvoit une copie d'un tableau de nombre a 2 dimension trié sur la valeur de la première case du sous-tableau
 * @param {Array} le tableau à copier
 * [[3,2], [2,3], [1,8]] => [[1,8], [2,3], [3,2]]
*/
function orderMatriceOnFirstPlace(tab) {
    
    return array.slice().sort()

}

funtion orderMatriceOnFirstPlaceBis(tab){

    return 

}

orderMatriceOnFirstPlace(array);