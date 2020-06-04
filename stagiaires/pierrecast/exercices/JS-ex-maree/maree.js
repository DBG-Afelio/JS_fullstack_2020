const oMaree = document.querySelector('.maree');
const oButtons  = document.querySelector('.buttons');
const oMessage  = document.querySelector('.message');
const lines = 20;
const column = 20;
const colors = [
    'rouge', 
    'vert',
    'bleu',
    'violet'
];

generateButtons(colors);
//generateMaree([], lines, column, oMaree);

/**
 * Fonctions appelée au click sur un bouton qui lance la marée, teste la victoire et compte les coups
 * fonction impure
 * @param {string} couleur 
 */
function play(couleur) {
    alert(couleur);
}


/** 
* fonction générant les divs dans l'HTML sur base du nombre de lignes et de colonnes passées en paramètres
* ces div aurant une couleur aléatoire tirées dans le tableaux des couleurs possibles
* @param {string[]} tabcolors le tableau des couleurs acceptables
* @param {number} lines le nombre de ligne
* @param {number} column le nombre de colonnes
* @param {HTMLDivElement} divParent le div où on l'on place les divs générés
* @returns {DivHTMLElement[]} un tableau à deux dimensions contenant les références des divs générés
*           <div class="carre" data-ligne="2" data-colonne="4" data-color='rouge'></div>
*/
function generateMaree (tabColors, lines, column, divParent){

}

/**
 * Fonction générant les boutons de choix de couleurs sur base d'un tableau des couleurs possibles
 * Les boutons générés écoute l'évènement click
 * @param {string[]} tabColors 
 */
function generateButtons(tabColors){
    tabColors.forEach(createButton);
}

/**
 * fonction générant un bouton
 * @param {string} color 
 */
function createButton(color) {
    let oButton = document.createElement('button');
    oButton.classList.add('carre');
    oButton.setAttribute('data-color', color);
    oButton.addEventListener('click', () => { play(color); });
    oButtons.appendChild(oButton);
}

/**
 * Fonction permettant de changer la couleur d'un div passé en paramètre si celui-ci possède la couleur de oldColor 
 * La fonction s'assurera aussi d' exécuter la même fonction sur les div haut, bas, gauche, droite s'ils existent
 * @param {string} oldColor ancienne couleur
 * @param {string} newColor nouvelle couleur
 * @param {HTMLDivElement} div le div qui doit changer de couleur
 */
function changeColor(oldColor, newColor, div){
    div.setAttribute('data-color', newColor);
}

/**
 * fonction renvoyant le div du dessus s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div du dessus ou null
 */
function getHaut(div) {
    let x = div.getAttribute('data-ligne');
    let y = div.getAttribute('data-colonne');
    if (x === 0) {
        return document.querySelector('')
    }
}

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
 * @returns {HTMLDivElement | null} le div à gauche ou null
 */
function getDiv(ligne, colonne) {
    
}

/**
 * Fonction modifiant la couleur d'un div passé en paramètre
 * @param {DivHTMLElement} div 
 * @param {string} couleur 
 */
function setCouleur(div, couleur) {
    div.setCouleur('data-color', couleur);
}

/**
 * Fonction testant si tous les divs sont de la couleur passée en paramètre 
 * @param {DivHTMLElement[]} divs le tableau de tous les divs 
 * @param {string} couleur 
 * @returns {boolean}
 */
function isWin(divs, couleur){}