let listEl = document.querySelector('.photo-list');
let panierQteEl = document.querySelector('.data-panier-quantite');
let panierTotalEl = document.querySelector('data-panier-total');
let myForm = document.querySelector('.form'); 
let quantiteSaisiEl = document.querySelector('.data-input-quantite');
let commanderBtnEl = document.querySelector('.btn-commander');
//console.log(tab_img);
let thisArticle = {}; console.log(thisArticle);
let thisArticleId = 0;
let panierObj = {
    totalArticlesPanier: 0,
    prixTotalPanier: 0
};
let listArticlesPanier = [];


const selectArticle = (e) => {
    thisArticleId = Number(e.target.closest('.articles').dataset.id);
    thisArticle = tab_img.find(obj => obj.id === thisArticleId); console.log(thisArticle)
    updateView(thisArticle, myForm);
};

const mouseOverArticle = (e) => e.currentTarget.classList.add('surbrillance');
const mouseOutArticle = (e) => e.currentTarget.classList.remove('surbrillance');
displayArticles_El(listEl);

const firstArticle = tab_img.find(obj => obj.id = 1);
updateView(firstArticle, myForm);

commanderBtnEl.addEventListener('click', (e) => {
    isQuantiteValid(quantiteSaisiEl) ? updatePanier(thisArticle, quantiteSaisiEl, panierTotalEl, panierQteEl) : alert('Quantite incorrecte');
    //classList.add ('message-qte-incorrecte')
    e.preventDefault();
});
//quantiteSaisiEl.addEventListener('change', isQuantiteValid);


function updatePanier(thisArticle, qteSaisiEl, totalEl, quantiteEl) {

    let qteSaisi = parseInt(qteSaisiEl.value);
    let articleExists = listArticlesPanier.find(obj => obj === thisArticle); 
    let articleIndex = listArticlesPanier.indexOf(obj => obj === thisArticle);
    if (articleExists === undefined && qteSaisi > 0) {
        listArticlesPanier.push(addNewArticleToList(thisArticle, qteSaisi)); 
    } else if (articleExists) {
        qteSaisi === 0 ? listArticlesPanier.splice(articleIndex, 1) : listArticlesPanier.splice(articleIndex, 1, updateSinglegArticle(articleExists, qteSaisi));
    }
 
    listArticlesPanier.forEach(articlePanier => {
        panierObj.totalArticlesPanier += articlePanier.qteArticle;
        panierObj.prixTotalPanier += articlePanier.prixArticleTotal;
    });
    console.log('Qut :' + panierObj.totalArticlesPanier, 'Total :' + panierObj.prixTotalPanier);
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
    return articleToUpdate    
}

function addNewArticleToList(thisArticle, qteSaisi) {
 
    newArticle = {
    idArticle: thisArticle.id,
    qteArticle: qteSaisi,
    prixArticleUnitaire: parseInt(thisArticle.Prix),
    prixArticleTotal: parseInt(thisArticle.Prix) * qteSaisi,
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















//----------
//bacAsable
/*
for (let [key, value] of Object.entries(articleObj)) {
            console.log(key, value);
            if (value instanceof Object) {

            } else {
                articleEl.setAttribute(`$key, value);
            }
        }
*/