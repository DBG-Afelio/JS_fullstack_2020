const values = [ 'A', '2', '3' , '4', '5', '6' ,'7', '8', '9' ,'10', 'V', 'D' ,'R'];
const colors = [ 'coeur', 'pique', 'carreau', 'trefle'];
const redColors = [ 'coeur', 'carreau'];
const blackColors = [ 'pique', 'trefle'];
const colorCode = { coeur:'\u2665', pique:'\u2660', carreau:'\u2666', trefle:'\u2663'};
const pileStart = ['O', 'S'];
const pileMiddle = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const pileEnd = ['W', 'X', 'Y', 'Z'];
let deck, card, piles;

const oPileO = document.querySelector('div[data-name="O"]');
const oPileS = document.querySelector('div[data-name="S"]');
const oDeck = document.getElementById('deck'); 

const dblclick = function(e) {    
    let oPile = e.target.closest('.pile');
    let nameFrom = oPile.getAttribute('data-name');
    let card = piles[nameFrom][piles[nameFrom].length-1];
    let nameTo = getGoodPile(card.color);

    moveCard(nameFrom, nameTo, 1);
};

const clickTop = function() {
    if (piles.S.length === 0 && piles.O.length === 0) {
        //retire l'écouteur click
        oPileO.removeEventListener('click', clickTop);

    } else if (piles.O.length === 0) {
        // rechargement
        for (let i = piles.S.length-1; i >= 0; i--) {
            let oCard = oPileS.children[i];

            // rendre invisible 
            returnCard(oCard, piles['S'][i], false);
            oPileO.appendChild(oCard);
        };
        piles.O = [...piles.S];
        piles.S = [];
    } else {
        for (let i = 0; i < 3; i++) {
            if (piles.O.length !== 0) {
                moveCard('O', 'S');
            }
        }       
    }    
}

const dragStart = function(e) {
    defineDropZone(true);
    let oCard = e.target.closest('.card');
    let nbCard = getNbCard(oCard);
    let nameFrom = e.target.closest('.pile').getAttribute('data-name');
    e.dataTransfer.setData('nameFrom', nameFrom);
    e.dataTransfer.setData('nbCard', nbCard);
}

const dragEnd = function(e) {
    defineDropZone(false);
}

const dragOver = function(e) {
     e.preventDefault();
}

const drop = function(e) {
    e.preventDefault();
    let nameFrom = e.dataTransfer.getData('nameFrom');
    let nameTo = e.target.closest('.pile').getAttribute('data-name');
    let nbCard = Number(e.dataTransfer.getData('nbCard'));
    if (nbCard === 1) {
        moveCard(nameFrom, nameTo);
    } else {
        multipleMove(nameFrom, nameTo, nbCard);
    }
}

newGame.addEventListener('click', function() {
    startGame();
});

startGame();
function startGame() {
    cleanAll();
    piles = { 
        O: [],      S: [],      deck: generateDeck(),             
        A: [],      B: [],      C: [],        D: [],        E: [],        F: [],        G: [],
        W: [],      X: [],      Y: [],        Z: [],    
    };
    showDeck();
    distribute();
    placeListenerO();
}

// crée le paquet de cartes initial
function generateDeck() {
    deck = [];
    values.forEach(value => {
        colors.forEach(color => {
            card = {
                value: value,
                color: color,
                visible: false,
            };

            deck.splice(Math.floor(Math.random()*deck.length), 0, card);
        });
    });

    return deck;
}

// affiche le paquet de cartes initial
function showDeck() {
    piles.deck.forEach(card => {
        createCard(card);
    });
}

// génère la carte
function createCard(card) {
    let oDeck = document.querySelector('#deck');
    let oCard = document.createElement('div');
    
    let oTop = document.createElement('span'); 
    oTop.classList.add('top');
    oCard.appendChild(oTop);

    let oCenter = document.createElement('span'); 
    oCenter.classList.add('center');    
    oCard.appendChild(oCenter);

    let oBottom = document.createElement('span'); 
    oBottom.classList.add('bottom');
    oCard.appendChild(oBottom);

    oCard.classList.add('card');
    oCard.classList.add('invisible');
    oDeck.appendChild(oCard);
}

// transforme le mot 'trefle' en son symbole
function getColorCode(color) {
    return colorCode[color];
}

// distribution initiale des cartes
function distribute() {
    let distrib = { A: 7, B: 6, C: 5, D: 4, E: 3, F: 2, G: 1, O: 24}
    for (let namePile in distrib) {
        let nbCard = Number(distrib[namePile]);
        for (let i = 0 ; i < nbCard ; i++) {
            moveCard('deck', namePile);
        }
        
        if (namePile !== 'O' && piles[namePile][piles[namePile].length-1].visible === false) {  
            returnLastCardFromPile(namePile);// retourne la dernière carte
        }
    }
}

// déplace une carte d'une pile à l'autre
function moveCard(nameFrom, nameTo, nbCard = 1) {
    if (verifyMove(nameFrom, nameTo, nbCard)) {
        // objet
        let pileTo = piles[nameTo];
        let pileFrom = piles[nameFrom];
        let lastCard = pileFrom[pileFrom.length-nbCard]
        pileTo.push(lastCard);
        pileFrom.splice(pileFrom.length-nbCard, 1);
        let position = pileTo.length-1;

        // visuel
        let oCard = getLastCardFrom(nameFrom, nbCard);
        let oPileTo = document.querySelector('div[data-name="'+nameTo+'"]');
        oPileTo.appendChild(oCard);
        switch (nameTo) {
            case 'A':
            case 'B':
            case 'C':
            case 'D':
            case 'E':
            case 'F':
            case 'G':
                oCard.style.top = (position*25)+"px";         
                break;
            case 'W':
            case 'X':
            case 'Y':
            case 'Z':
                oCard.style.top = "0";         
                break;
            case 'S':
                returnLastCardFromPile('S');
                break;
        }

       if (nameFrom !== 'deck' && nameFrom !== 'O') {
           returnLastCardFromPile(nameFrom);
           checkWinGame();
       } 

       if (pileEnd.includes(nameTo)) {
            oCard.removeEventListener('dblclick', dblclick, true);
       }
    } 
}

// déplace plus d'une carte d'une pile à l'autre
function multipleMove(nameFrom, nameTo, nbCard) {
    for (let i = nbCard; i > 0 ; i--) {
        moveCard(nameFrom, nameTo, i);
    }
   
    return false;
}

// vérifier si le deplacement de la carte est autorisé
function verifyMove(nameFrom, nameTo, nbCard = 1) {
    if (nameFrom !== null && nameTo !== null && nameFrom !== nameTo) {
        let cardFrom = (piles[nameFrom].length !== 0) ? piles[nameFrom][piles[nameFrom].length-nbCard] : null;
        let cardTo = (piles[nameTo].length !== 0) ? piles[nameTo][piles[nameTo].length-nbCard] : null;

        switch (nameFrom) {
            // depuis le deck (1ere distribution)
            case 'deck':
                return true;
                break;
            case 'O': 
                // O vers S
                if (nameTo === 'S' ) {
                    return true;
                }
                break;
            default:      
                // vers les piles finales
                if (pileEnd.includes(nameTo)) {
                    if (cardTo === null) {
                        if (cardFrom.value === 'A') {
                            return true;
                        }
                    } else {
                        if (cardFrom.color === cardTo.color) {
                            let positionFrom = values.indexOf(cardFrom.value);
                            if (values[positionFrom-1] === cardTo.value) {
                                return true;
                            }
                        }
                    }
                }

                // vers les piles centrales 
                if (pileMiddle.includes(nameTo)) {
                    let cardFrom = piles[nameFrom][piles[nameFrom].length-nbCard];  
                    if (piles[nameTo].length === 0) {
                        if (cardFrom.value === 'R') {
                            return true;
                        }
                    } else {
                        let cardTo = piles[nameTo][piles[nameTo].length-1];   
                        let colorTo = redColors.includes(cardTo.color) ? 'red' : 'black';  
                        let colorFrom = redColors.includes(cardFrom.color) ? 'red' : 'black';     
                        let expectedValue =  cardFrom.value !== 'R' ? values[values.indexOf(cardFrom.value)+1] : null;  
                        
                        if (colorFrom !== colorTo && expectedValue === cardTo.value) {
                            return true;
                        }
                    }
                }
                break;
            
        }
    }
    console.log('NO -> ', nameFrom, nameTo, nbCard);
    return false;
}

// Dévoile/cache une carte 
function returnCard(oCard, card, visible) {
    card.visible = visible;
    oCard.querySelector('.top').innerHTML = '';
    oCard.querySelector('.center').innerHTML = '';
    oCard.querySelector('.bottom').innerHTML = '';

    if (visible) {
        oCard.classList.remove('invisible');
        oCard.classList.add('visible');    
        oCard.classList.add(card.color);

        let oValueTop = document.createTextNode( card.value+" "+getColorCode(card.color));
        let oValueCenter = document.createTextNode(card.value+" "+getColorCode(card.color));
        let oValueBottom = document.createTextNode(card.value+" "+getColorCode(card.color));
        oCard.querySelector('.top').appendChild(oValueTop);
        oCard.querySelector('.center').appendChild(oValueCenter);
        oCard.querySelector('.bottom').appendChild(oValueBottom);
        oCard.setAttribute('draggable', true);

        // Placement des écouteurs drag'n drop et double click
        oCard.addEventListener('dblclick', dblclick);
        oCard.addEventListener('dragstart', dragStart, true);        
        oCard.addEventListener('dragend', dragEnd, true);
    
    } else {
        oCard.classList.remove('visible');
        oCard.classList.add('invisible');
        oCard.classList.remove(card.color);
        oCard.setAttribute('draggable' , false);
        
        // Suppression des écouteurs drag'n drop et double click
        oCard.removeEventListener('dblclick', dblclick);
        oCard.removeEventListener('dragstart', dragStart, true);   
        oCard.removeEventListener('dragend', dragEnd, true);
    }
}

// Dévoile la dernière carte d'une pile
function returnLastCardFromPile(namePile, nbCard = 1) {
    let pile = piles[namePile];
    if (pile.length !== 0) {
        let oCard = getLastCardFrom(namePile, nbCard);
        let card = pile[pile.length-nbCard]; 

        returnCard(oCard, card, true);
    }
}

// récupère la dernière carte d'une pile
function getLastCardFrom(namePile, nbCard = 1) {
    let nbChildren = document.querySelector('div[data-name="'+namePile+'"]').children.length;
    let position = nbChildren - nbCard +1;
    return document.querySelector('div[data-name="'+namePile+'"] .card:nth-of-type('+position+')');
}

// vérifie si on a gagné
function checkWinGame() {
    if (piles.W.length === 13 && piles.X.length === 13 && piles.Y.length === 13 && piles.Z.length === 13 ) {
        //retirer les 4 écouteurs dblclick
        pileEnd.forEach(namePile => {
            let oCard = getLastCardFrom(namePile);
            oCard.removeEventListener('dblclick', dblclick);
            oCard.removeEventListener('dragstart', dragStart, true);   
            oCard.removeEventListener('dragend', dragEnd, true);
        });
               
        alert ('Bravo !');
        return true;
    }

    return false;
}

// Donne le nom de la pile de destination (dblClick)
function getGoodPile(color) {
    let pileTop = [...pileEnd];
    let pileColor = pileTop.map(namePile => getColorPile(namePile)) ;

    if (pileColor.includes(color)) {
        return pileTop[pileColor.indexOf(color)];
    } else {
        return pileTop[pileColor.indexOf(null)];
    }
}

// Donne la couleur d'une pile finale (pileEnd)
function getColorPile(namePile) {
    if (piles[namePile].length === 0) {
        return null;
    } else {
        return piles[namePile][0].color;
    }
}

// Placement de l'écouteur sur la pile O (click)
function placeListenerO() {
    oPileO.addEventListener('click', clickTop);
}

// Active/Désactive les zones de dépôt
function defineDropZone(action) {
    const dropZones = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'W', 'X', 'Y', 'Z'];
    dropZones.forEach(zone => {
        oZone = document.querySelector('div[data-name="'+zone+'"]');
        if (oZone.children.length === 0) {
            dropZone = oZone;
        } else {
            dropZone = getLastCardFrom(zone);
        }

        if (action) {
            dropZone.classList.add('dropZone');
            dropZone.addEventListener('drop', drop, true);
            dropZone.addEventListener('dragover', dragOver, true);
        } else {
            let allDropZones = document.querySelectorAll('.dropZone').forEach(zone => {
                zone.classList.remove('dropZone');
                zone.removeEventListener('drop', drop, true);
                zone.removeEventListener('dragover', dragOver, true);
            })
        }
    });
}

// calcul le nombre de cartes sous la carte selectionnée (drag)
function getNbCard(child) {
    let i = 1;
    while( (child = child.nextSibling) != null ) {
        i++;
    }
    return i;
}

function cleanAll() {
    let allPiles = document.querySelectorAll('.pile');
    allPiles.forEach(pile => {
        pile.innerHTML = '';
    });
}
