const values = [ 'A', '2', '3' , '4', '5', '6' ,'7', '8', '9' ,'10', 'V', 'D' ,'R'];
const colors = [ 'coeur', 'pique', 'carreau', 'trefle'];
const colorCode = { coeur:'\u2665', pique:'\u2660', carreau:'\u2666', trefle:'\u2663'};
let deck, card, piles;

const oDeck = document.getElementById('deck'); 

const dblclick = function(e) {    
    let oPile = e.target.closest('.pile');
    let nameFrom = oPile.getAttribute('data-name');
    let card = piles[nameFrom][piles[nameFrom].length-1];
    let nameTo = getGoodPile(card.color);

    moveCard(nameFrom, nameTo);
};

startGame();

function startGame() {
    piles = { 
        deck: generateDeck(),             
        A: [],      B: [],        C: [],        D: [],        E: [],        F: [],        G: [],
        O: [],      W: [],        X: [],        Y: [],        Z: [],    
    };
    showDeck();
    distribute();
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
        
        if (namePile !== 'O') {  
            returnLastCardFromPile(namePile);// retourne la dernière carte
        }
    }
}

// déplace une carte d'une pile à l'autre
function moveCard(nameFrom, nameTo) {
    if (verifyMove(nameFrom, nameTo)) {
        // objet
        let pileTo = piles[nameTo];
        let pileFrom = piles[nameFrom];
        let lastCard = pileFrom[pileFrom.length-1]
        pileTo.push(lastCard);
        pileFrom.pop();
        let position = pileTo.length-1;

        // visuel
        let oCard = getLastCardFrom(nameFrom);
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
                oCard.style.top = (position*20)+"px";         
                break;
            case 'W':
            case 'X':
            case 'Y':
            case 'Z':
                oCard.style.top = "0";         
                break;
        }

       if (nameFrom !== 'deck') {
           returnLastCardFromPile(nameFrom);
           checkWinGame();
       }

       if (nameTo === 'W' || nameTo === 'X' || nameTo === 'Y' || nameTo === 'Z') {
            oCard.removeEventListener('dblclick', dblclick, true);
       }
    } 
}

// vérifier si le deplacement de la carte est autorisé
function verifyMove(nameFrom, nameTo) {
    // depuis le deck (1ere distribution)
    if (nameFrom === 'deck') {
        return true;
    }

    let cardFrom = (piles[nameFrom].length !== 0) ? piles[nameFrom][piles[nameFrom].length-1] : null;
    let cardTo = (piles[nameTo].length !== 0) ? piles[nameTo][piles[nameTo].length-1] : null;
    
    // vers les piles finales
    if (nameTo === 'W' || nameTo === 'X' || nameTo === 'Y' || nameTo === 'Z' ) {
        if (cardTo === null) {
           // alert (cardFrom.value);
            if (cardFrom.value === 'A') {
                return true;
            }
        } else {
           // alert (cardFrom.value, cardTo.value);
            if (cardFrom.color === cardTo.color) {
                let positionFrom = values.indexOf(cardFrom.value);
                if (values[positionFrom-1] = cardTo.value) {
                    return true;
                }
            }
        }
    }

    return false;
}

// Dévoile/cache une carte 
function returnCard(oCard, card, visible) {
    card.visible = visible;
    if (visible) {
        oCard.classList.remove('invisible');
        oCard.classList.add('visible');

        // Placement des écouteurs drag'n drop et double click
        oCard.addEventListener('dblclick', dblclick, true);
    } else {
        oCard.classList.remove('visible');
        oCard.classList.add('invisible');
        
        // Suppression des écouteurs drag'n drop et double click
        oCard.removeEventListener('dblclick', dblclick, true);
    }
    
    oCard.classList.remove('invisible');
    oCard.classList.add('visible');
    oCard.classList.add(card.color);
    let oValueTop = document.createTextNode(card.visible ? card.value+" "+getColorCode(card.color) : '');
    let oValueCenter = document.createTextNode(card.visible ? card.value+" "+getColorCode(card.color) : '');
    let oValueBottom = document.createTextNode(card.visible ? card.value+" "+getColorCode(card.color) : '');
    oCard.querySelector('.top').appendChild(oValueTop);
    oCard.querySelector('.center').appendChild(oValueCenter);
    oCard.querySelector('.bottom').appendChild(oValueBottom);
}

// Dévoile la dernière carte d'une pile
function returnLastCardFromPile(namePile) {
    let pile = piles[namePile];
    if (pile.length !== 0) {
        let oCard = getLastCardFrom(namePile);
        let card = pile[pile.length-1]; 

        returnCard(oCard, card, true);
    }
}

function getLastCardFrom(namePile) {
    return document.querySelector('div[data-name="'+namePile+'"] .card:last-of-type');
}

function checkWinGame() {
    if (piles.W.length === 13 && piles.X.length === 13 && piles.Y.length === 13 && piles.Z.length === 13 ) {
        //retirer les 4 écouteurs dblclick
        getLastCardFrom('W').removeEventListener('dblclick', dblclick);
        getLastCardFrom('X').removeEventListener('dblclick', dblclick);
        getLastCardFrom('Y').removeEventListener('dblclick', dblclick);
        getLastCardFrom('Z').removeEventListener('dblclick', dblclick);

        alert ('Bravo !');
        return true;
    }

    return false;
}

function getGoodPile(color) {
    let goodPile = '';
    let pileTop = ['W', 'X', 'Y' ,'Z'];
    let pileColor = pileTop.map(namePile => getColorPile(namePile)) ;

    if (pileColor.includes(color)) {
        return pileTop[pileColor.indexOf(color)];
    } else {
        return pileTop[pileColor.indexOf(null)];
    }
}

function getColorPile(namePile) {
    if (piles[namePile].length === 0) {
        return null;
    } else {
        return piles[namePile][0].color;
    }
}