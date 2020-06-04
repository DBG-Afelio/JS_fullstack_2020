/*
    - Soit une grille de x ligne y colonne composée de carré de couleur aléatoire
    - et un bouton par couleur possible
    - quand on clique sur un bouton on transmet la couleur du bouton au carré qui est en haut à gauche
    - les carrés qui se trouvent à gauche, en haaut, à droite, en bas s'il sont de la couleur d'origine du carré de référence change aussi de couleur
    - on propage l'opération
    - Si tous les carrés sont de la même couleur c'est gagné
*/


const colors = [
    'rouge', 
    'vert',
    'bleu',
    'violet'
];


/**
 * Fonctions appelée au click sur un bouton qui lance la marée, teste la victoire et compte les coups
 * fonction impure
 * @param {string} couleur 
 */
function play(couleur) {}


/** 
* fonctions générant les divs dans l'HTML sur base du nombre de lignes et de colonnes passées en paramètres
* ces div aurant une couleur aléatoire tirées dans le tableaux des couleurs possibles
* @param {string[]} tabcolors le tableau des couleurs acceptables
* @param {number} lines le nombre de ligne
* @param {number} column le nombre de colonnes
* @param {HTMLDivElement} divParent le div où on l'on place les divs générés
* @returns {DivHTMLElement[][]} un tableau à deux dimensions contenant les références des divs générés
*           <div class="carre" data-ligne="2" data-colonne="4" data-color='rouge'></div>
*/
function generateMaree(tabColors, lines, column, divParent) {
    const nbCases = lines * column;
    let div;
    let i = 0;
    do {
        div = divParent.createElement('div');
        divParent.appendChild(div);
        i++
    } while (i <= nbCases);
    let grille = [lines, column];
    
}

/**
 * Fonction générant les boutons de choix de couleurs sur base d'un tableau des couleurs possibles
 * Les boutons générés écoute l'évènement click
 * @param {string[]} tabColors 
 */
function generateButtons(tabColors){}

/**
 * Fonction permettant de changer la couleur d'un div passé en paramètre si celui-ci possède la couleur de oldColor 
 * La fonction s'assurera aussi d' exécuter la même fonction sur les div haut, bas, gauche, droite s'ils existent
 * @param {string} oldColor ancienne couleur
 * @param {string} newColor nouvelle couleur
 * @param {HTMLDivElement} div le div qui doit changer de couleur
 */
function changeColor(oldColor, newColor, div){}

/**
 * fonction renvoyant le div du dessus s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div du dessus ou null
 */
function getHaut(div) {}

/**
 * fonction renvoyant le div du dessous s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div du dessous ou null
 */
function getBas(div) {}

/**
 * fonction renvoyant le div à gauche s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div à gauche ou null
 */
function getGauche(div) {}

/**
 * fonction renvoyant le div à droite s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div à droite ou null
 */
function getDroite(div) {}

/**
 * fonction renvoyant le div sur base de son position ligne/colonne s'il existe
 * @param {number} ligne le numéro de ligne
 * @param {number} colonne le numéro de colonne
 * @returns {HTMLDivElement | null} le div ou null
 */
function getDiv(ligne, colonne) {}

/**
 * Fonction modifiant la couleur d'un div passé en paramètre
 * @param {DivHTMLElement} div 
 * @param {string} couleur 
 */
function setCouleur(div, couleur) {}

/**
 * Fonction testant si tous les divs sont de la couleur passée en paramètre 
 * @param {DivHTMLElement[]} divs le tableau de tous les divs 
 * @param {string} couleur 
 * @returns {boolean}
 */
function isWin(divs, couleur){}