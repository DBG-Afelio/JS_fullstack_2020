const oMaree = document.querySelector('.maree');
const oButtons  = document.querySelector('.buttons');
const oMessage  = document.querySelector('.message');
const newGame = document.querySelector('#newGame button')
const lines = 9;
const column = 9;
const colors = [
    'rouge', 
    'vert',
    'bleu',
    'violet'
];
const action =  (event) => { play(event.target.getAttribute('data-color')); }

let turn = 0;
let maree = [];

newGame.addEventListener('click', startGame);

startGame();
function startGame() {
    oMessage.style.display = "none";
    generateButtons(colors);
    maree = generateMaree(colors, lines, column, oMaree);
}

/**
 * Fonctions appelée au click sur un bouton qui lance la marée, teste la victoire et compte les coups
 * fonction impure
 * @param {string} couleur 
 */
function play(couleur) {
    turn++;
    
    let firstDiv = getDiv(0,0);
    changeColor(firstDiv.getAttribute('data-color'), couleur, firstDiv);

    if (isWin(maree, couleur)) {
        oMessage.innerHTML = 'Bravo ! Vous avez gagné en ' + turn + ' coup' + ((turn > 1) ? 's':'');
        //oButtons.forEach(button => button.removeEventListener('click', action));
        oButtons.innerHTML = '';
        oMessage.style.display = "block";
    }
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
function generateMaree (tabColors, lines, column, divParent) {  
    divParent.innerHTML = '';  
    for(let i = 0; i < 2*lines-1; i++) {
        maree[i] = []; 
        let size = (i < lines) ? lines+i : 3*lines-i-2;

        for(let j = 0; j< size; j++) { 
            let color = getRandomColor(tabColors);
            maree[i][j] = color;
            generateHexa(i, j, color);
        }
    }
    
    return maree;
}

function generateHexa (x, y, color) {
    let oHexa = document.createElement('div');
    oHexa.classList.add('hexa');
    oHexa.setAttribute('data-color', color);
    oHexa.setAttribute('data-ligne', x);
    oHexa.setAttribute('data-colonne', y);
    //oHexa.innerHTML=x+'-'+y;
    oHexa.style.top = (x*36)+"px";
   oHexa.style.left = (x < lines) ? (40*y) + (0-20*x) +"px" : (40*y) - (2*lines-x-2)*20+"px" ;
    oMaree.appendChild(oHexa);
    return color;
}

function getRandomColor(tabColors) {
    let nb = Math.floor(Math.random()*tabColors.length);

    return tabColors[nb];
}

/**
 * Fonction générant les boutons de choix de couleurs sur base d'un tableau des couleurs possibles
 * Les boutons générés écoute l'évènement click
 * @param {string[]} tabColors 
 */
function generateButtons(tabColors) {
    oButtons.innerHTML = '';
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
    oButton.addEventListener('click', action);
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

    let x = Number(div.getAttribute('data-ligne'));
    let y = Number(div.getAttribute('data-colonne'));

    setCouleur(div, newColor); 

    let all = [getNW(div), getNE(div), getW(div), getE(div),getSW(div), getSE(div)];
    //let all = [getBas(div)];
    all.forEach(carre => {   
        if (carre !== null) {
            let carreColor =  carre.getAttribute('data-color');    
            if (carreColor === oldColor && carreColor !== newColor) { 
                changeColor(oldColor, newColor, carre);
            };
        }
    });
}

/**
 * fonction renvoyant le div du Nord-Est s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div du Nord-Est ou null
 */
function getNE(div) {
    let x = Number(div.getAttribute('data-ligne'));
    let y = Number(div.getAttribute('data-colonne'));

    return getDiv(x-1, y);
}

/**
 * fonction renvoyant le div du Nord-Ouest s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div du Nord-Ouest ou null
 */
function getNW(div) {
    let x = Number(div.getAttribute('data-ligne'));
    let y = Number(div.getAttribute('data-colonne'));
    return getDiv(x-1, y-1);
}

/**
 * fonction renvoyant le div à gauche s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div à gauche ou null
 */
function getW(div) {
    let x = Number(div.getAttribute('data-ligne'));
    let y = Number(div.getAttribute('data-colonne'));
    return getDiv(x,y-1);
}

/**
 * fonction renvoyant le div à droite s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div à droite ou null
 */
function getE(div) {
    let x = Number(div.getAttribute('data-ligne'));
    let y = Number(div.getAttribute('data-colonne'));
    return getDiv(x, y+1);
}

/**
 * fonction renvoyant le div du Sud-Est s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div du SudEst ou null
 */
function getSE(div) {
    let x = Number(div.getAttribute('data-ligne'));
    let y = Number(div.getAttribute('data-colonne'));

    return getDiv(x+1, y);
}

/**
 * fonction renvoyant le div du Sud-Ouest s'il existe
 * @param {HTMLDivElement} div 
 * @returns {HTMLDivElement | null} le div du Sud-Ouest ou null
 */
function getSW(div) {
    let x = Number(div.getAttribute('data-ligne'));
    let y = Number(div.getAttribute('data-colonne'));
    return getDiv(x+1, y-1);
}

/**
 * fonction renvoyant le div sur base de son position ligne/colonne s'il existe
 * @param {number} ligne le numéro de ligne
 * @param {number} colonne le numéro de colonne
 * @returns {HTMLDivElement | null} le div à gauche ou null
 */
function getDiv(ligne, colonne) {
    
    let div = document.querySelector('[data-ligne="'+ligne+'"][data-colonne="'+colonne+'"]');
   
    return div;
}

/**
 * Fonction modifiant la couleur d'un div passé en paramètre
 * @param {DivHTMLElement} div 
 * @param {string} couleur 
 */
function setCouleur(div, couleur) {   
    div.setAttribute('data-color', couleur);
    let x = Number(div.getAttribute('data-ligne'));
    let y = Number(div.getAttribute('data-colonne'));
    maree[x][y] = couleur;
}

/**
 * Fonction testant si tous les divs sont de la couleur passée en paramètre 
 * @param {DivHTMLElement[]} divs le tableau de tous les divs 
 * @param {string} couleur 
 * @returns {boolean}
 */
function isWin(divs, couleur){
    return divs.every(line => line.every(carre => carre === couleur));
}
