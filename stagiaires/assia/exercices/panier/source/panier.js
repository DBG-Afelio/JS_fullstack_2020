let listEl = document.querySelector('.photo-list');
let quantiteInput_el = document.querySelector('.input-photo-quantite');
let commanderBtn_el = document.querySelector('.btn-commander');
//console.log(tab_img);
displayArticles_El(listEl);
/*
const selectArticle = (e) => {
    updateView(e.target.dataset.id);
};


const mouseOverArticle = (e) => {
    e.target.style.backgroundColor='#ccc';
};
*/

function displayArticles_El(parentEl) {
    tab_img.forEach(articleObj => {
        let articleEl = document.createElement('div');
        parentEl.append(articleEl);
        articleEl.setAttribute('data-id', articleObj.id);
        articleEl.classList.add('articles');
      //  articleEl.addEventListener('mouseover', mouseOverArticle);
      //  articleEl.addEventListener('click', selectArticle);

        let articleImage = document.createElement('img');
        articleImage.src = `img/${articleObj.image.petite}`;
        articleEl.append(articleImage);

        let articleNom = document.createElement('div');
        articleNom.textContent = articleObj.titre;
        articleEl.append(articleNom);

        let articlePrix = document.createElement('div');
        articlePrix.textContent = articleObj.Prix;
        articleEl.append(articlePrix);

       
    })
}

function updateView(articleId) {
    console.log(articleId);
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