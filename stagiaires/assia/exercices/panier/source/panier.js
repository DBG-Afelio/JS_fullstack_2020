let itemListNode = document.querySelector('.photo-list');
let outputQuantityCart = document.querySelector('.data-panier-quantite');
let outputPriceCart = document.querySelector('.data-panier-total');
let homeForm = document.querySelector('.form'); 
let inputQuantityHome = document.querySelector('.data-input-quantite');
let btnConfirmItem = document.querySelector('.btn-commander');
let goToCartNode = document.querySelector('.cart-info');
let goBackHomePageNode = document.querySelector('.btn-goBackHome');
let emptyCartNode = document.querySelector('.btn-empty-list');
let itemCartNode = document.querySelector('.recap-list');
let homePageNode = document.querySelector('.homePage');
let cartRecapPageNode = document.querySelector('.cartRecapPage');

let selectedItem = {}; 
let selectedItemID= 0;
let myCart = {
    quantityCart :0,
    priceCart   :0
};
let itemsInCart = [];
/**------------------------------------------------------------------------------------------------------------- */

const selectItem = (e) => {
    selectedItemID = Number(e.currentTarget.closest('.item').dataset.id);
    selectedItem = tab_img.find(obj => obj.id === selectedItemID);
    updateHomeView(selectedItem, homeForm);
    updateHomeInputQtty(inputQuantityHome);
    showHomePage(homePageNode, cartRecapPageNode);
    
};
const mouseOverItem = (e) => e.currentTarget.classList.add('surbrillance');
const mouseOutItem = (e) => e.currentTarget.classList.remove('surbrillance');

btnConfirmItem.addEventListener('click', (e) => {
    let inputQttyToGetFrom = inputQuantityHome;
    updateCart(selectedItem, inputQttyToGetFrom, outputPriceCart, outputQuantityCart, itemCartNode);
   e.preventDefault();
});
const changeQttyFromRecap = (e) => {
    selectedItemID = Number(e.currentTarget.closest('.item').dataset.id);
    selectedItem = tab_img.find(obj => obj.id === selectedItemID);
    /* let inputQttyToGetFrom = e.currentTarget('.input') */
    let inputQttyToGetFrom = getRecapItemNode(itemCartNode).querySelector('.item-qtte');
    updateCart(selectedItem, inputQttyToGetFrom, outputPriceCart, outputQuantityCart, itemCartNode);
    manageEmptyCartImg(cartRecapPageNode);
};
const deleteItemFromRecap = (e) => {
    selectedItemID = Number(e.currentTarget.closest('.item').dataset.id);
    selectedItem = tab_img.find(obj => obj.id === selectedItemID);
    inputQttyToGetFrom = e.currentTarget.closest('.item').querySelector('input');
    inputQttyToGetFrom.value = 0; 
    updateCart(selectedItem, inputQttyToGetFrom, outputPriceCart, outputQuantityCart, itemCartNode);
    updateHomeInputQtty(inputQuantityHome, itemCartNode); 
    manageEmptyCartImg(cartRecapPageNode);
};
//inputQuantityHome.addEventListener('change', isQuantiteValid);
goToCartNode.addEventListener('click', () => {
    showCartRecapPage(homePageNode, cartRecapPageNode);
});
goBackHomePageNode.addEventListener('click', () => {
    showHomePage(homePageNode, cartRecapPageNode);
});

emptyCartNode.addEventListener('click', () => {
    firstItemToShowId = 1;
    firstItemToShow = tab_img.find(obj => obj.id === firstItemToShowId);
    selectedItem = firstItemToShow;
    selectedItemID = firstItemToShowId;
    myCart = {
        quantityCart: 0,
        priceCart: 0
    };  
    itemsInCart = [];
    updateHomeView(firstItemToShow, homeForm);
    removeRecapItemNodes(itemCartNode);
    updateHomeInputQtty(inputQuantityHome, itemCartNode); 
    updateOutputDisplay(outputPriceCart, outputQuantityCart, inputQuantityHome, 0, itemCartNode, itemsInCart);
    manageEmptyCartImg(cartRecapPageNode);
});

init();

/**------------------------------------------------------------------------------------------------------------- */

function init() {
    const firstItemToShowId = 1;
    const firstItemToShow = tab_img.find(obj => obj.id === firstItemToShowId);
    selectedItem = firstItemToShow;
    selectedItemID = firstItemToShowId;
    myCart = {
        quantityCart: 0,
        priceCart: 0
    };  
    itemsInCart = [];
    showHomePage(homePageNode, cartRecapPageNode);
    displayItemlist(itemListNode);
    updateHomeView(firstItemToShow, homeForm);
    updateHomeInputQtty(inputQuantityHome, itemCartNode); 
    updateOutputDisplay(outputPriceCart, outputQuantityCart, inputQuantityHome, 0, itemCartNode,itemsInCart);
    
}

/**Fonction  qui met a jour le prix total et la quantite total du panier 
 * 
*/
function updateCart(selectedItem, inputQttyToGetFrom, outputPriceCart, outputQuantityCart, itemCartNode) {
    let qttyIn = inputQttyToGetFrom.valueAsNumber;
    let itemIndex = itemsInCart.findIndex(item => item.myItemId === selectedItem.id);

    if (itemIndex === -1 && qttyIn === 0) {
    } else if (itemIndex === -1 && qttyIn > 0) {
        let myNewItem = addItemIntoList(selectedItem, qttyIn);
        let inputQttyToSetTo = createItemForRecapView(itemCartNode, myNewItem).querySelector('.item-qtte');
        updateCartValues(myNewItem, qttyIn);
        updateOutputDisplay(outputPriceCart, outputQuantityCart, inputQttyToGetFrom, inputQttyToSetTo, itemCartNode, itemsInCart);
    } else {
        let inputQttyToSetTo = getInputQttyNodeToCopyFrom(inputQttyToGetFrom, itemCartNode);
        let myItem = itemsInCart[itemIndex];
        let previousQtte = myItem.myItemQuantity;
        let delta = qttyIn - previousQtte;
        if (delta !== 0) {
            if (qttyIn === 0) {
                deleteItem(itemsInCart, itemCartNode);
                updateCartValues(myItem, delta);
                updateOutputDisplay(outputPriceCart, outputQuantityCart, inputQttyToGetFrom, 0, itemCartNode, itemsInCart);
            } else {
                let modifiedItem = modifyItemQttyIntoList(myItem, qttyIn); 
                itemsInCart.splice(itemIndex, 1, modifiedItem);
                updateCartValues(modifiedItem, delta);
                updateOutputDisplay(outputPriceCart, outputQuantityCart, inputQttyToGetFrom, inputQttyToSetTo, itemCartNode, itemsInCart);
            }
        }
    }
}

function updateHomeInputQtty(homeInputQte) {
    let itemIndex = itemsInCart.findIndex(item => item.myItemId === selectedItemID);
    if (itemIndex === -1) {
        homeInputQte.value = 0
    } else {
        homeInputQte.value = itemsInCart[itemIndex].myItemQuantity;
    }
}

function deleteItem(itemsInCart, itemCartNode) {
    itemCartNode.removeChild(getRecapItemNode(itemCartNode));
    itemsInCart.splice(itemsInCart.findIndex(item => item.myItemId === selectedItem.id), 1);  
}

function removeRecapItemNodes(itemCartNode) {
    while (itemCartNode.hasChildNodes()) {
        itemCartNode.removeChild(itemCartNode.firstChild);
    } 
}

/**
 * Fonction qui met a jour les valeurs du panier
 * @param {{}} item 
 * @param {number} delta 
 */
function updateCartValues(item,delta) {
    myCart.quantityCart += delta; 
    myCart.priceCart += item.myItemUnitPrice * delta;
}

/**
 * Fonction qui met a jour l'affichage des valeurs du panier
 * @param {OutputHTMLElement} outputPriceCart 
 * @param {OutputHTMLElement} outputQuantityCart 
 */
function updateOutputDisplay(outputPriceCart, outputQuantityCart, inputQttyReadFrom, inputQttyWriteTo, itemCartNode, itemsInCart) {
    outputPriceCart.value = '€ ' + myCart.priceCart.toFixed(2); 
    outputQuantityCart.value = myCart.quantityCart;
    if (itemsInCart.length !== 0 && inputQttyWriteTo !== 0) {
        inputQttyWriteTo.valueAsNumber = inputQttyReadFrom.valueAsNumber;
        getRecapItemNode(itemCartNode).querySelector('.item-totalPrice').value = itemsInCart.myItemTotalPrice;
    }
}

function getRecapItemNode(itemCartNode) {
    let myItem = itemsInCart.find(item => item.myItemId === selectedItemID);
    let node = itemCartNode.querySelector(`[data-id="${myItem.myItemId}"]`); 
    return node;
}

function getInputQttyNodeToCopyFrom(inputQttyModified, itemCartNode) {
    return inputQttyModified === inputQuantityHome ? getRecapItemNode(itemCartNode).querySelector('.item-qtte') : inputQuantityHome;
}

/**
 * Fonction qui met a jour les quantite et prix pour 1 article ajouté/diminue et renvoit l'objet modifié : {
            myItemId: <inchange>,
            myItemQuantity: updated,
            myItemUnitPrice: <inchange>,
            myItemTotalPrice: updated,
        }
 * @param {{}} itemToUpdate 
 * @param {number} qttyIn 
 * @return {{}}
 */
function modifyItemQttyIntoList(modifiedItem, qttyIn) {
    modifiedItem.myItemQuantity = qttyIn;
    modifiedItem.myItemTotalPrice = (modifiedItem.myItemUnitPrice * qttyIn);
    return modifiedItem;
}

/**
 * Fonction qui cree l'objet {new item} ajouté par le user et l'ajoute dans le panier 
 * */
function addItemIntoList(selectedItem, qttyIn) {
    let newItem =  {
    myItemId: selectedItem.id,
    myItemQuantity: qttyIn,
    myItemUnitPrice: parseFloat(selectedItem.Prix),
    myItemTotalPrice: parseFloat(selectedItem.Prix) * qttyIn,
    };
    itemsInCart.push(newItem); 
    return newItem;
}

function isQuantiteValid() {
    return true;
}

function displayItemlist(listItemParentNode) {
    tab_img.forEach(item => {
        let itemNode = createNewElement('div', listItemParentNode);
        itemNode.setAttribute('data-id', item.id);
        itemNode.classList.add('item-list', 'item');
        itemNode.addEventListener('mouseover', mouseOverItem);
        itemNode.addEventListener('mouseout', mouseOutItem);
        itemNode.addEventListener('click', selectItem);
        let itemImage = createNewElement('img', itemNode);
        itemImage.src = `img/${item.image.petite}`;
        let itemName = createNewElement('div', itemNode);
        itemName.textContent = item.titre;
        let itemPrice = createNewElement('div', itemNode);
        itemPrice.textContent = item.Prix;
    });
}

function createNewElement(elementType, parentNode) {
    let newElement = document.createElement(elementType);
    parentNode.append(newElement);
    return newElement;
}

function updateHomeView(selectedItem, detailViewParentNode) {
    detailViewParentNode.querySelector('.data-titre').textContent = selectedItem.titre;
    detailViewParentNode.querySelector('.data-auteur-pays').textContent = `De ${selectedItem.auteur}, ${selectedItem.Pays}`;
    detailViewParentNode.querySelector('.data-comments').textContent = selectedItem.commentaire;
    detailViewParentNode.querySelector('.data-prix').textContent = selectedItem.Prix;
    detailViewParentNode.querySelector('.data-img-details').src = `img/${selectedItem.image.moyenne}`;
}

function createItemForRecapView(itemCartNode, cartItem){   
    let fullInfoItem = tab_img.find(listItem => listItem.id === cartItem.myItemId);
    let itemNode = createNewElement('div', itemCartNode);
    itemNode.setAttribute('data-id', fullInfoItem.id);
    itemNode.classList.add('myItems', 'item');
    itemNode.addEventListener('mouseover', mouseOverItem);
    itemNode.addEventListener('mouseout', mouseOutItem);
    
    let itemImage = createNewElement('img', itemNode);
    itemImage.src = `img/${fullInfoItem.image.toute_petite}`;
    itemImage.addEventListener('click', selectItem);

    let itemName = createNewElement('div', itemNode);
    itemName.textContent = fullInfoItem.titre;
    itemName.addEventListener('click', selectItem);

    let itemQtte = createNewElement('input', itemNode);
    itemQtte.classList.add('item-qtte');
    itemQtte.setAttribute('type', 'number');
    itemQtte.setAttribute('min', 1);
    itemQtte.setAttribute('value', `${cartItem.myItemQuantity}`);
    itemQtte.addEventListener('change', changeQttyFromRecap);

    let itemUnitPrice = createNewElement('div', itemNode);
    itemUnitPrice.textContent = `x € ${cartItem.myItemUnitPrice} = `;

    let itemTotalPrice = createNewElement('output', itemNode);
    itemTotalPrice.classList.add('item-totalPrice');
    itemTotalPrice.setAttribute('value', `${cartItem.myItemTotalPrice.toFixed(2)}`);

    let itemDelete = createNewElement('div', itemNode);
    itemDelete.classList.add('data-item-delete');
    itemDelete.addEventListener('click', deleteItemFromRecap); 
    return itemNode;
}

function showHomePage(homePageNode, cartRecapPageNode) {
    homePageNode.classList.remove('hide');
    cartRecapPageNode.classList.remove('show');
    homePageNode.classList.add('show');
    cartRecapPageNode.classList.add('hide');
    document.title = "Page d'accueil";
}

function showCartRecapPage(homePageNode, cartRecapPageNode) {
    homePageNode.classList.remove('show');
    cartRecapPageNode.classList.remove('hide');
    homePageNode.classList.add('hide');
    cartRecapPageNode.classList.add('show');
    document.title = "Recapitulatif Panier";
    manageEmptyCartImg(cartRecapPageNode);
}

function manageEmptyCartImg(cartRecapPageNode) {
    let imgEmptyCart = cartRecapPageNode.querySelector('.empty-cart-img');
    if (itemsInCart.length === 0) {
        imgEmptyCart.classList.add('show');
        imgEmptyCart.classList.remove('hide');
    } else {
        imgEmptyCart.classList.add('hide');
        imgEmptyCart.classList.remove('show');
    }
}