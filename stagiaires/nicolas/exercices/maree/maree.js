
const SquareRow = 20 ;
const SquareColumn = 20 ;
const maree = document.querySelector('.maree');
const buttons = document.querySelector('.buttons');

const colors = [
    'rouge', 
    'vert',
    'bleu',
    'violet'
];

function randomNumber(min, max) { 
    
    return Math.floor(Math.random() * (max - min) + min); 
    
}  

/**
 * Fonctions appelée au click sur un bouton qui lance la marée, teste la victoire et compte les coups
 * fonction impure
 * @param {string} couleur 
 */
function play(couleur) {

    changeColor(getDiv(1,1).getAttribute('data-color'),couleur,getDiv(1,1));
    
    if(isWin(maree.children,couleur)) {
        alert('bravo, tu as gagné');
    };
    
}

/** 
* fonctions générant les divs dans l'HTML sur base du nombre de lignes et de colonnes passées en paramètres
* ces div aurant une couleur aléatoire tirées dans le tableaux des couleurs possibles
* @param {string[]} tabcolors le tableau des couleurs acceptables
* @param {number} lines le nombre de ligne
* @param {number} column le nombre de colonnes
* @param {HTMLDivElement} divParent le div où on l'on place les divs générés
* @returns {DivHTMLElement[]} un tableau à deux dimensions contenant les références des divs générés
*           <div class="carre" data-ligne="2" data-colonne="4" data-color='rouge'></div>
*/
function generateMaree (tabColors, lines, column, divParent){
    
    for(let i = 1; i < lines+1; i++){
        
        for(let j = 1; j < column+1; j++){
            
            const newSquare = document.createElement('div');
            const newSquareRow = i.toString();
            const newSquareCol = j.toString();
            
            divParent.appendChild(newSquare);
            
            
            newSquare.classList.add('carre');
            newSquare.setAttribute('data-color',tabColors[randomNumber(0,tabColors.length)]);
            newSquare.setAttribute('data-colonne',newSquareCol);
            newSquare.setAttribute('data-ligne',newSquareRow);
            
            newSquare.style.gridColumn = newSquareCol;
            newSquare.style.gridRow = newSquareRow;
            
        }
        
    }
    
}

/**
 * Fonction générant les boutons de choix de couleurs sur base d'un tableau des couleurs possibles
 * Les boutons générés écoute l'évènement click
 * @param {string[]} tabColors 
 */

function generateButtons(tabColors, divParent){
    
    for(let i = 0; i < tabColors.length; i++){
        
        const newButton = document.createElement('button');
        divParent.appendChild(newButton);
        
        newButton.setAttribute('data-color', tabColors[i]);
        
        newButton.addEventListener('click', (event) => play(event.target.getAttribute('data-color')));
        
    }
}

/**
 * Fonction permettant de changer la couleur d'un div passé en paramètre si celui-ci possède la couleur de oldColor 
 * La fonction s'assurera aussi d' exécuter la même fonction sur les div haut, bas, gauche, droite s'ils existent
 * @param {string} oldColor ancienne couleur
 * @param {string} newColor nouvelle couleur
 * @param {HTMLDivElement} div le div qui doit changer de couleur
 */
function changeColor(oldColor, newColor, div){
    
    const tabDivs = [getHaut(div),getBas(div),getGauche(div),getDroite(div)]
    
    if(newColor !== oldColor){
        
       setCouleur(div, newColor);
        
        
        tabDivs.forEach(element => {
            if(element !== null){
                if(element.getAttribute('data-color') === oldColor){

                    setCouleur(element, newColor);
                    changeColor(oldColor,newColor,element);

                }
            }
        });
        
    }
    
    
    
}

/**
 * fonction renvoyant le div du dessus s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div du dessus ou null
 */
function getHaut(div) {
    
    const divCol = parseInt(div.getAttribute('data-colonne'),10);
    const divRow = parseInt(div.getAttribute('data-ligne'),10);
    
    if(Number.isInteger(divCol) && Number.isInteger(divRow)){
        
        return getDiv(divRow-1,divCol);
        
    }
    
    
    
    
}

/**
 * fonction renvoyant le div du dessous s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div du dessous ou null
 */
function getBas(div) {
    
    const divCol = parseInt(div.getAttribute('data-colonne'),10);
    const divRow = parseInt(div.getAttribute('data-ligne'),10);
    
    
    if(Number.isInteger(divCol) && Number.isInteger(divRow)){
        
        return getDiv(divRow+1,divCol);
        
    }
    
}

/**
 * fonction renvoyant le div à gauche s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div à gauche ou null
 */
function getGauche(div) {
    
    const divCol = parseInt(div.getAttribute('data-colonne'),10);
    const divRow = parseInt(div.getAttribute('data-ligne'),10);
    
    if(Number.isInteger(divCol) && Number.isInteger(divRow)){
        return getDiv(divRow,divCol-1);
    }
}

/**
 * fonction renvoyant le div à droite s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div à droite ou null
 */
function getDroite(div) {
    
    const divCol = parseInt(div.getAttribute('data-colonne'),10);
    const divRow = parseInt(div.getAttribute('data-ligne'),10);
    
    if(Number.isInteger(divCol) && Number.isInteger(divRow)){
        return getDiv(divRow,divCol+1);
    }
}

/**
 * fonction renvoyant le div sur base de son position ligne/colonne s'il existe
 * @param {number} ligne le numéro de ligne
 * @param {number} colonne le numéro de colonne
 * @returns {HTMLDivElement | null} le div à gauche ou null
 */
function getDiv(ligne, colonne) {
    
    return document.querySelector(`.carre[data-colonne="${colonne.toString()}"][data-ligne="${ligne.toString()}"]`);

}

/**
 * Fonction modifiant la couleur d'un div passé en paramètre
 * @param {DivHTMLElement} div 
 * @param {string} couleur 
 */
function setCouleur(div, couleur) {
    
    div.setAttribute('data-color',couleur);
    
}

/**
 * Fonction testant si tous les divs sont de la couleur passée en paramètre 
 * @param {DivHTMLElement[]} divs le tableau de tous les divs 
 * @param {string} couleur 
 * @returns {boolean}
 */
function isWin(divs, couleur){
    
    return [...divs].every(element => element.getAttribute('data-color') === couleur);
    
}
generateMaree(colors,SquareRow,SquareColumn,maree);
generateButtons(colors, buttons);