let itemListNode = document.querySelector('.photo-list');
let outputQuantityCart = document.querySelector('.data-panier-quantite');
let outputPriceCart = document.querySelector('.data-panier-total');
let homeForm = document.querySelector('.form'); 
let inputQuantity = document.querySelector('.data-input-quantite');
let btnConfirmItem = document.querySelector('.btn-commander');
let goToCartNode = document.querySelector('.cart-info');
let goBackHomePageNode = document.querySelector('.btn-goBackHome');
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


const selectItem = (e) => {
    selectedItemID = Number(e.target.closest('.articles').dataset.id);
    selectedItem = tab_img.find(obj => obj.id === selectedItemID);
    updateView(selectedItem, homeForm);
    updateInputQuantity(inputQuantity);
};
const mouseOverItem = (e) => e.currentTarget.classList.add('surbrillance');
const mouseOutItem = (e) => e.currentTarget.classList.remove('surbrillance');
btnConfirmItem.addEventListener('click', (e) => {
    isQuantiteValid(inputQuantity) ? updateCart(selectedItem, inputQuantity, outputPriceCart, outputQuantityCart) : alert('Quantite incorrecte');
    //classList.add ('message-qte-incorrecte')
   e.preventDefault();
});
//inputQuantity.addEventListener('change', isQuantiteValid);
goToCartNode.addEventListener('click', () => {
    showCartRecapPage(homePageNode, cartRecapPageNode)
    displayCartRecap(itemCartNode);
});
goBackHomePageNode.addEventListener('click', () => {
    showHomePage(homePageNode, cartRecapPageNode);
 
})

init();

/**--------------------------------- */

function showHomePage(homePageNode, cartRecapPageNode) {
    homePageNode.classList.remove('hide');
    cartRecapPageNode.classList.remove('show');
    homePageNode.classList.add('show');
    cartRecapPageNode.classList.add('hide');
}

function showCartRecapPage(homePageNode, cartRecapPageNode) {
    homePageNode.classList.remove('show');
    cartRecapPageNode.classList.remove('hide');
    homePageNode.classList.add('hide');
    cartRecapPageNode.classList.add('show');
}

function init() {
    homePageNode.classList.add('show');
    cartRecapPageNode.classList.add('hide');
    const firstItemToShow = tab_img.find(obj => obj.id === 1);
    selectedItem = firstItemToShow;
    displayItemlist(itemListNode);
    updateView(firstItemToShow, homeForm);
    updateInputQuantity(inputQuantity); 
    updateCartDisplay(outputPriceCart, outputQuantityCart);
    
}

function updateInputQuantity(inputQte) {
    let itemIndex = itemsInCart.findIndex(item => item.myItemId === selectedItemID);
    itemIndex === -1 ? inputQte.value = 0 : inputQte.value = itemsInCart[itemIndex].myItemQuantity;
}
/**Fonction  qui met a jour le prix total et la quantite total du panier 
 * 
*/
function updateCart(selectedItem, inputQuantity, outputPriceCart, outputQuantityCart) {
    let qttyIn = parseInt(inputQuantity.value);
    let itemIndex = itemsInCart.findIndex(item => item.myItemId === selectedItem.id);
    let delta = qttyIn;

    if (itemIndex === -1 && qttyIn === 0) {
    } else if (itemIndex === -1 && qttyIn > 0) {
        let myNewItem = addItemIntoList(selectedItem, qttyIn);
        updateCartValues(myNewItem, delta);
        updateCartDisplay(outputPriceCart, outputQuantityCart)
    } else {
        let myItem = itemsInCart[itemIndex];
        let previousQtte = myItem.myItemQuantity;
        delta = qttyIn - previousQtte;
        if (delta !== 0) {
            if (qttyIn === 0) {
                itemsInCart.splice(itemIndex, 1);
                updateCartValues(myItem, delta);
                updateCartDisplay(outputPriceCart, outputQuantityCart)
            } else {
                let modifiedItem = modifyItemQttyIntoList(myItem, qttyIn); 
                itemsInCart.splice(itemIndex, 1, modifiedItem);
                updateCartValues(modifiedItem, delta);
                updateCartDisplay(outputPriceCart, outputQuantityCart)
            }
        }
    }
}

/**
 * Fonction qui met a jour les valeurs du panier
 * @param {{}} item 
 * @param {number} delta 
 */
function updateCartValues(item,delta) {
    myCart.quantityCart += delta; 
    myCart.priceCart+= item.myItemUnitPrice * delta;
}

/**
 * Fonction qui met a jour l'affichage des valeurs du panier
 * @param {OutputHTMLElement} outputPriceCart 
 * @param {OutputHTMLElement} outputQuantityCart 
 */
function updateCartDisplay(outputPriceCart, outputQuantityCart) {
    outputPriceCart.value = '€ ' + myCart.priceCart; 
    outputQuantityCart.value = myCart.quantityCart;
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
    modifiedItem.myItemTotalPrice = modifiedItem.myItemUnitPrice * qttyIn;
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
        let itemNode = document.createElement('div');
        listItemParentNode.append(itemNode);
        itemNode.setAttribute('data-id', item.id);
        itemNode.classList.add('articles');
        itemNode.addEventListener('mouseover', mouseOverItem);
        itemNode.addEventListener('mouseout', mouseOutItem);
        itemNode.addEventListener('click', selectItem);

        let itemImage = document.createElement('img');
        itemImage.src = `img/${item.image.petite}`;
        itemNode.append(itemImage);

        let itemName = document.createElement('div');
        itemName.textContent = item.titre;
        itemNode.append(itemName);

        let itemPrice = document.createElement('div');
        itemPrice.textContent = item.Prix;
        itemNode.append(itemPrice);
    });
}

function updateView(selectedItem, detailViewParentNode) {
    detailViewParentNode.querySelector('.data-titre').textContent = selectedItem.titre;
    detailViewParentNode.querySelector('.data-auteur-pays').textContent = `De ${selectedItem.auteur}, ${selectedItem.Pays}`;
    detailViewParentNode.querySelector('.data-comments').textContent = selectedItem.commentaire;
    detailViewParentNode.querySelector('.data-prix').textContent = selectedItem.Prix;
    detailViewParentNode.querySelector('.data-img-details').src = `img/${selectedItem.image.moyenne}`;
}

function displayCartRecap(itemCartNode) {
    
}