let listEl = document.querySelector('.photo-list');
let myForm = document.querySelector('.form'); 
let quantiteInputEl = document.querySelector('.data-input-quantite');
let commanderBtnEl = document.querySelector('.btn-commander');
//console.log(tab_img);
let currentArticleId = 0;
let panierObj = {
    totalArticlesPanier : 0,
    prixTotalPanier     : 0,
    listArticlesPanier  : [
                        {
                            idArticle           : 0,
                            qteArticle          : 0,
                            prixArticleUnitaire : 0,
                            prixArticleTotal    : 0,
                        }
                    ]
};
const selectArticle = (e) => {
    currentArticleId = Number(e.target.closest('.articles').dataset.id);
    updateView(currentArticleId, myForm);
};

const mouseOverArticle = (e) => e.currentTarget.classList.add('surbrillance');
const mouseOutArticle = (e) => e.currentTarget.classList.remove('surbrillance');
displayArticles_El(listEl);
updateView(1, myForm);

commanderBtnEl.addEventListener('click', (e) => {
    isQuantiteValid(quantiteInputEl) ? addArticle(quantiteInputEl): alert('Quantite incorrecte'); //classList.add ('message-qte-incorrecte')
    e.preventDefault();
});
quantiteInputEl.addEventListener('change', isQuantiteValid);


/**
 * Fonction qui ajoute un article en quantite choisie, dans le panier au click button
 * @param
 * @return
 */
function addArticle(articleQte, panierObj) {
    panierObj.
    
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

function updateView(articleId, parentEl) {
    let thisArticle = tab_img.find(articleObj => Number(articleObj.id) === articleId);
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