const values = [ 'A', '2', '3' , '4', '5', '6' ,'7', '8', '9' ,'10', 'V', 'D' ,'R'];
const colors = [ 'coeur', 'pique', 'carreau', 'trefle'];
const colorCode = { coeur:'\u2665', pique:'\u2660', carreau:'\u2666', trefle:'\u2663'};
let deck, card, piles;

const oDeck = document.getElementById('deck'); 

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
                /*position: null,
                zIndex: null,*/
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
        //placeCardToDeck();
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
    oCard.classList.add(card.visible ? 'visible' : 'invisible');
    oDeck.appendChild(oCard);
}

// transforme le mot 'trefle' en son symbole
function getColorCode(color) {
    return colorCode[color];
}

//
/*function placeCardToDeck() {
    piles.deck.forEach((item, index) => {
        item.position = 0;
        item.zIndex = index;
    })
}*/

// distribution initiale des cartes
function distribute() {
    let distrib = { A: 7, B: 6, C: 5, D: 4, E: 3, F: 2, G: 1, O: 24}
    for (let namePile in distrib) {
        let nbCard = Number(distrib[namePile]);
        for (let i = 0 ; i < nbCard ; i++) {
            moveCard('deck', namePile);
        }
        
        if (namePile !== 'O') {
            let card = piles[namePile][piles[namePile].length-1];
            returnCard(card, namePile);// retourne la dernière carte
        }
    }
    console.log(piles);
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
        }
        
    } 
}

// vérifier si le deplacement de la carte est autorisé
function verifyMove(nameFrom, nameTo) {
    if (nameFrom === 'deck') {
        return true;
    }

    return false;
}

// Dévoile une carte 
function returnCard(card, namePile) {
    card.visible = true;
    let oCard = getLastCardFrom(namePile);

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

function getLastCardFrom(namePile) {
    return document.querySelector('div[data-name="'+namePile+'"] .card:last-of-type');
}