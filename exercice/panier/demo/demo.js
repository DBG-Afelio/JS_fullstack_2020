/////////////////// VUE ////////////////////////

function showDetails(article, qt) {}

function showList(listArticle) {
    const divList = document.querySelector(".articleList");
    const ulNode = document.createElement("ul");
    
    listArticle.forEach(article => {
        const liNode = showItemList(article);
        liNode.addEventListener('click', () => { clickDetails(article.id) });
        ulNode.appendChild(liNode);
    });
    
    divList.appendChild(ulNode);
}

function showItemList(article) {
    const liArticle = document.createElement("li");
    const imgArticle = document.createElement("img");
    imgArticle.setAttribute('src', `../img/${article.image.petite}`);
    const spanNameArticle = document.createElement("span");
    const nameNode = document.createTextNode(article.titre);
    spanNameArticle.appendChild(nameNode);
    const spanPriceArticle = document.createElement("span");
    const priceNode = document.createTextNode(article.Prix);
    spanPriceArticle.appendChild(priceNode);
    liArticle.appendChild(imgArticle);
    liArticle.appendChild(spanNameArticle);
    liArticle.appendChild(spanPriceArticle);
    return liArticle;
}

function showBasket(basket) {}

function changePage(pageReference) {}

function showBasketDetail(basket) {}

/////////////////// MODEL ////////////////////////
/**
 * {
 *  article: Article,
 *  qt: number
 * }[]
 */
let basket = [];

/**
 * Fonction pilotant les sous fonctions du basket
 * @param {any} article 
 * @param {any[]} basket 
 * @param {number} qt 
 */
function updateBasket(article, basket, qt) {
    const articleInBasket = getArticleByIdInBasket(basket, article.id);
    if (qt === 0 && articleInBasket) {
        deleteArticle(articleInBasket, basket);
    } else if (articleInBasket) {
        updateArticleQuantity(articleInBasket, basket, qt);
    } else if (qt !== 0 ){
        addArticle(article, basket);
    }
}

function addArticle(article, basket) {

}

function updateArticleQuantity(article, basket, qt) {}

function deleteArticle(article, basket) {}

function emptyBasket(basket) {}

function getTotalPrice(basket) {}

function getTotalArticle(basket) {}

function getArticleById(tabArticle, id) {
    return tabArticle.find((article) => article.id === id);
}

function getArticleByIdInBasket(basket, id) {
    return basket.find((article) => article.article.id === id);
}

//action dans le localStorage
function save() {}

function retrieve() {}

/////////////////// CONTROLLER ////////////////////////

function clickCommand(idArticle, qtString) {}

function clickDetails(idArticle) {
    const article = getArticleById(tab_img, idArticle);
    if (article) {
        basket = updateBasket(article, basket, 1);
    }
}

function clickRecap() {}

function clickEshopPage() {}

function clickEmptyBasket() {}

function changeArticleQuantity(idArticle, qtString) {}

function loadInterface () {
    showList(tab_img);
}
window.addEventListener('load', loadInterface);