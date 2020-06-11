let listEl = document.querySelector('.photo-list');
let panierQteEl = document.querySelector('.data-panier-quantite');
console.log(panierQteEl);
let panierTotalEl = document.querySelector('.data-panier-total');
console.log(panierTotalEl);
let myForm = document.querySelector('.form'); 
let quantiteSaisiEl = document.querySelector('.data-input-quantite');
let commanderBtnEl = document.querySelector('.btn-commander');
let thisArticleFullObj = {}; 
let thisArticleId= 0;
let panierObj = {
    totalArticlesPanier :0,
    prixTotalPanier     :0
};
let listArticlesPanier = [];
const firstArticle = tab_img.find(obj => obj.id === 1);

const selectArticle = (e) => {
    thisArticleId = Number(e.target.closest('.articles').dataset.id);
    thisArticleFullObj = tab_img.find(obj => obj.id === thisArticleId);
    updateView(thisArticleFullObj, myForm);
    updateInputQuantity(quantiteSaisiEl);
};
const mouseOverArticle = (e) => e.currentTarget.classList.add('surbrillance');
const mouseOutArticle = (e) => e.currentTarget.classList.remove('surbrillance');
commanderBtnEl.addEventListener('click', (e) => {
    isQuantiteValid(quantiteSaisiEl) ? updatePanier(thisArticleFullObj, quantiteSaisiEl, panierTotalEl, panierQteEl) : alert('Quantite incorrecte');
    //classList.add ('message-qte-incorrecte')
   e.preventDefault();
});
//quantiteSaisiEl.addEventListener('change', isQuantiteValid);

init();

/**--------------------------------- */

function init() {
    displayArticles_El(listEl);
    updateView(firstArticle, myForm);
    panierTotalEl.value = '€ ' + panierObj.prixTotalPanier; 
    panierQteEl.value = panierObj.totalArticlesPanier;
    updateInputQuantity(quantiteSaisiEl);
}

function updateInputQuantity(inputQte) {
    let articleIndex = listArticlesPanier.findIndex(obj => obj.idArticle === thisArticleId);
    articleIndex === -1 ? inputQte.value = 0 : inputQte.value = listArticlesPanier[articleIndex].qteArticle;
}

function updatePanier(thisArticle, qteSaisiEl, totalEl, quantiteEl) {
    let qteSaisi = parseInt(qteSaisiEl.value);
    let articleIndex = listArticlesPanier.findIndex(obj => obj.idArticle === thisArticle.id);
    let delta = qteSaisi;

    if (articleIndex === -1 && qteSaisi === 0) {

    } else if (articleIndex === -1 && qteSaisi > 0) {
        console.log('New Article');
        myArticleInList = addNewArticleToList(thisArticle, qteSaisi);
        listArticlesPanier.push(myArticleInList); console.log(addNewArticleToList);
        updateQtePrixPanier(myArticleInList, delta, totalEl, quantiteEl);
    } else {
        console.log('NOT New Article');
        let myArticleInList = listArticlesPanier[articleIndex];
        let prevQte = myArticleInList.qteArticle;
        delta = qteSaisi - prevQte;
        if (delta !== 0) {
            if (qteSaisi === 0) {
                listArticlesPanier.splice(articleIndex, 1);
                updateQtePrixPanier(myArticleInList, delta, totalEl, quantiteEl);
            } else {
                let articleUpdated = updateSingleArticle(myArticleInList, qteSaisi); console.log(articleUpdated);
                listArticlesPanier.splice(articleIndex, 1, articleUpdated);
                updateQtePrixPanier(articleUpdated, delta, totalEl, quantiteEl);
            }
        }
    }
}
function updateQtePrixPanier(articleObj,delta, totalEl, quantiteEl) {
    panierObj.totalArticlesPanier += delta; 
    panierObj.prixTotalPanier += articleObj.prixArticleUnitaire * delta;
    console.log(panierObj.totalArticlesPanier, panierObj.prixTotalPanier);
    totalEl.value = '€ ' + panierObj.prixTotalPanier; 
    quantiteEl.value = panierObj.totalArticlesPanier;
}
    
/**
 * Fonction qui met a jour les quantite et prix pour 1 article ajouté/modifié et renvoit l'objet modifié : {
            idArticle: <inchange>,
            qteArticle: updated,
            prixArticleUnitaire: <inchange>,
            prixArticleTotal: updated,
        }
 * @param {{}} articleToUpdate 
 * @param {number} qteSaisi 
 * @return {{}}
 */
function updateSingleArticle(articleToUpdate, qteSaisi) {
    articleToUpdate.qteArticle = qteSaisi;
    articleToUpdate.prixArticleTotal = articleToUpdate.prixArticleUnitaire * qteSaisi;
    return articleToUpdate;
}
function addNewArticleToList(thisArticle, qteSaisi) {
    let newArticle =  {
    idArticle: thisArticle.id,
    qteArticle: qteSaisi,
    prixArticleUnitaire: parseFloat(thisArticle.Prix),
    prixArticleTotal: parseFloat(thisArticle.Prix) * qteSaisi,
    };
    console.log(newArticle);
    return newArticle;
}

function isQuantiteValid() {
    return true;
}

function displayArticles_El(parentEl) {
    tab_img.forEach(articleObj => {
        let articleEl = document.createElement('div');
        parentEl.append(articleEl);
        articleEl.setAttribute('data-id', articleObj.id);
        articleEl.classList.add('articles');
        articleEl.addEventListener('mouseover', mouseOverArticle);
        articleEl.addEventListener('mouseout', mouseOutArticle);
        articleEl.addEventListener('click', selectArticle);

        let articleImage = document.createElement('img');
        articleImage.src = `img/${articleObj.image.petite}`;
        articleEl.append(articleImage);

        let articleNom = document.createElement('div');
        articleNom.textContent = articleObj.titre;
        articleEl.append(articleNom);

        let articlePrix = document.createElement('div');
        articlePrix.textContent = articleObj.Prix;
        articleEl.append(articlePrix);
    });
}

function updateView(thisArticle, parentEl) {
    parentEl.querySelector('.data-titre').textContent = thisArticle.titre;
    parentEl.querySelector('.data-auteur-pays').textContent = `De ${thisArticle.auteur}, ${thisArticle.Pays}`;
    parentEl.querySelector('.data-comments').textContent = thisArticle.commentaire;
    parentEl.querySelector('.data-prix').textContent = thisArticle.Prix;
    parentEl.querySelector('.data-img-details').src = `img/${thisArticle.image.moyenne}`;
}