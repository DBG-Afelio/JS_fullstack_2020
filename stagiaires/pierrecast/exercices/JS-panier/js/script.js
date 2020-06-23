const shop = tab_img;
const oViewList = document.querySelector('.view-list');
const oList = oViewList.querySelector('.block-liste');

const oDetail = document.querySelector('.block-detail');
const oForm = oDetail.querySelector('form');

const oBasket = document.querySelector('.block-basket');
const oConfirm = oBasket.querySelector('button');
const oNbArticles = oBasket.querySelector('output.nb-articles');
const oTotal = oBasket.querySelector('output.total');

const oViewRecap = document.querySelector('.view-recap');
const oRecap = oViewRecap.querySelector('.block-recap');
const oRecapTotal = oViewRecap.querySelector('output.total');
const oBack = oViewRecap.querySelector('.backToList');
const oClear = oViewRecap.querySelector('.clearBasket');



const showDetail = (event) => {
   generateDetail(basket, shop, event.currentTarget.closest('.item').dataset.id);
}
const updateRecap = (event) => {
    let oInput = event.currentTarget;
    let qte = parseFloat(oInput.value);
    let id = oInput.closest('.item').dataset.id;
    if (checkQuantity(qte)) {
        sendCommand(qte, id);
    }
};

oForm.addEventListener('submit', (e) => {
    let oInput = oDetail.querySelector('input')
    let qte = parseFloat(oInput.value);
    let id = oInput.dataset.id;
    if (checkQuantity(qte)) {
        sendCommand(qte, id);
    }
    e.preventDefault();
}); 

function checkQuantity(qte) {
    if (parseFloat(qte) === NaN || !(Number.isInteger(qte)) ||  qte < 0 ) {
        alert('Quantité non valide');
        return false;
    }
    return true;
}

oConfirm.addEventListener('click', showRecap);
oBack.addEventListener('click', backToList);
oClear.addEventListener('click', clearBasket);

let basket = getStorage();
backToList();

function backToList() {
    showList(shop);
    generateDetail(basket, shop);
    updateBasket(basket);
    oViewList.classList.add('active');
    oViewRecap.classList.remove('active');
}

/**
 * 
 * @param {*} shop 
 */
function showList(shop) {
    shop.forEach(item => generateArticle(item)); 
}

/**
 * 
 * @param {*} item 
 */
function generateArticle(item) {
    let oItem = document.createElement('div');
    oItem.classList.add('item');
    oItem.setAttribute('data-id', item.id);
    generateImage(item, oItem, 'petite');
    generateTitle(item, oItem);
    generatePrice(item, oItem);
    oList.appendChild(oItem);
    
    oItem.addEventListener('click', showDetail);
}

/**
 * 
 * @param {*} item 
 * @param {*} oItem 
 * @param {*} taille 
 */
function generateImage(item, oItem, taille) {
    let oImg = document.createElement('img');
    oImg.setAttribute('src', 'img/'+item.image[taille]);
    oImg.setAttribute('alt', item.titre);
    oItem.append(oImg);
}

/**
 * 
 * @param {*} item 
 * @param {*} oItem 
 */
function generateTitle(item, oItem) {
    let oTitle = document.createElement('div');
    oTitle.classList.add('title');
    oTitle.appendChild(document.createTextNode(item.titre))
    oItem.appendChild(oTitle);
}

/**
 * 
 * @param {*} item 
 * @param {*} oItem 
 */
function generatePrice(item, oItem) {
    let oPrice = document.createElement('div');
    oPrice.classList.add('price');
    oPrice.appendChild(document.createTextNode(getPrice(item.Prix).toFixed(2)+' €'));
    oItem.appendChild(oPrice);
}

function getPrice(prix) {
    return Number(prix.split(' ')[0]);
}

/**
 * fonction qui récupere l'item depuis le magasin et retourne l'objet item ou null
 */
function getItemFromShop(shop, id) {
    return shop.find(article => article.id === Number(id));
}

/**
 * 
 */
function generateDetail(basket, shop, id = 0) {
    id = (id === 0)? shop[0].id : id;
    let item = getItemFromShop(shop, id);
    let command = getCommandFromBasket(basket, id);

    oDetail.querySelector('h2').innerHTML = item.titre;
    oDetail.querySelector('img').setAttribute('src', `img/${item.image.grande}`);
    oDetail.querySelector('img').setAttribute('alt', item.titre);
    oDetail.querySelector('.origin').innerHTML = `De ${item.auteur}, ${item.Pays}`;
    oDetail.querySelector('.comment').innerHTML = item.commentaire;
    oDetail.querySelector('input').value = (command !== undefined )? command.qte: 0;
    oDetail.querySelector('input').dataset.id = item.id;

    activeItemInList(id);
}

/**
 * 
 * @param {*} id 
 */
function activeItemInList(id) {    
    oList.querySelectorAll('.item').forEach(item => {
        if (item.dataset.id === id) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

/* ----- fonctions de commande --- */

/**
 * fonction qui vérifie si l'item est dans le panier et retourne l'objet item ou null
 */
function getCommandFromBasket(basket, id) {
    return basket.find(command => command.id === Number(id));
}

function sendCommand(qte, id) {
    let command = getCommandFromBasket(basket, id);
    let item = getItemFromShop(shop, id);

    if (command === undefined) {
        if (qte !== 0 ) {
            addItemToBasket(basket, item, qte);   
        } /*else {
            alert('NON');
        }*/
    } else {
        if (qte !== 0 ) {
            modifyItemFromBasket(command, qte)
        } else {
            removeItemFromBasket(command)
        }
    }

    updateBasket(basket);
    /*localStorage.setItem('basket', JSON.stringify(basket));
 console.log(localStorage.getItem('basket'));*/
}

/**
 * function qui ajoute une commande dans le panier
 */
function addItemToBasket(basket, item, qte) {
    let command = {
        id: item.id,
        qte: qte,
        prix: getPrice(item.Prix),
    }
    basket.push(command);
    addToRecap(command);
}

/**
 * function qui retire l'item du panier
 */
function removeItemFromBasket(command) {
    let pos = basket.indexOf(command);
    basket.splice(pos, 1);
    removeFromRecap(command);
}

/**
 * function qui modifie l'item dans le panier
 * 
 */
function modifyItemFromBasket(command, qte) {
    command.qte = qte;
    modifyRecap(command);
}

function updateBasket(basket) {
    oNbArticles.innerHTML = updateNbArticles(basket);;
    oTotal.innerHTML = updateTotal(basket);
    oRecapTotal.value = oTotal.innerHTML;
}

function updateTotal(basket) {
    return basket.reduce((sum, command) => sum + command.qte * command.prix, 0).toFixed(2) + " €";
}
function updateNbArticles(basket) {
    return  basket.reduce((sum, command) => sum + command.qte, 0);
}

function showRecap() {
    oViewList.classList.remove('active');
    oViewRecap.classList.add('active');
}

function addToRecap(command) {
    let item = getItemFromShop(shop, command.id);
    oItem = document.createElement('div');
    oItem.classList.add('item');
    oItem.setAttribute('data-id', command.id);
    
    generateImage(item, oItem, 'toute_petite');
    generateTitle(item, oItem);
    generateQuantity(command, oItem);
    generateX(oItem);
    generatePrice(item, oItem);
    generateEqual(oItem);
    generateSubTotal(command, oItem);
    oRecap.append(oItem);
}

function modifyRecap(command) {
    let oItem = oRecap.querySelector(`[data-id="${command.id}"]`);
    oItem.querySelector('.qte').value = command.qte;
    oItem.querySelector('.subTotal').value = (command.qte*command.prix).toFixed(2)+" €";
}

function removeFromRecap(command) {
    let oItem = oRecap.querySelector(`[data-id="${command.id}"]`);
    oRecap.removeChild(oItem);
}

function generateSubTotal(command, oItem) {
    oOutput = document.createElement('output');
    oOutput.classList.add('subTotal');
    oOutput.value = (command.prix * command.qte).toFixed(2) +' €'
    oItem.append(oOutput);
}

function generateX(oItem) {
    let oDiv= document.createElement('div');
    oDiv.append(document.createTextNode(' x '));
    oItem.append(oDiv);
}
function generateEqual(oItem) {
    let oDiv= document.createElement('div');
    oDiv.append(document.createTextNode(' = '));
    oItem.append(oDiv);
}

function generateQuantity(command, oItem) {
    let oInput = document.createElement('input')
    oInput.setAttribute('type', 'Number');
    oInput.classList.add('qte');
    oInput.addEventListener('change', updateRecap);
    oInput.value = command.qte;
    oItem.append(oInput);
}

function clearBasket() {
    if (confirm('Etes-vous sûr de vouloir vider le panier ?')) {
        basket = [];
        oRecap.innerHTML = '';
        updateBasket(basket);
    }
}

function getStorage() {
    let basket = []
    /*let store = (localStorage.getItem('basket') !== null) ? JSON.parse(localStorage.getItem('basket')) :[];

    store.forEach(command => {
        if (shop.find(item => command.id === item.id) !== null) {
            basket.push(command);
            addToRecap(command);
        }
    });*/

    return basket;
}