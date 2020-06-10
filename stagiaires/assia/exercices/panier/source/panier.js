let listEl = document.querySelector('.photo-list');
let myForm = document.querySelector('.form'); 
let quantiteInputEl = document.querySelector('.input-photo-quantite');
let commanderBtnEl = document.querySelector('.btn-commander');
//console.log(tab_img);
const selectArticle = (e) => {
    updateView(Number(e.target.closest('.articles').dataset.id), myForm);
};

const mouseOverArticle = (e) => {
    e.currentTarget.classList.add('surbrillance');
};
const mouseOutArticle = (e) => {
    e.currentTarget.classList.remove('surbrillance');
}
displayArticles_El(listEl);
updateView(1, myForm);

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