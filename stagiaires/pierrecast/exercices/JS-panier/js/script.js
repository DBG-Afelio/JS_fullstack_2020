const shop = tab_img;
const oList = document.querySelector('.block-liste');
const oDetail = document.querySelector('.block-detail');
const generateDetail = () => {
    zoom(event.target.closest('.item'));
}

showList(shop);

function showList(shop) {
    shop.forEach(article => generateArticle(article)); 
}

function generateArticle(article) {
    let oArticle = document.createElement('div');
    oArticle.classList.add('item');
    oArticle.setAttribute('data-id', article.id);
    generateImage(article, oArticle);
    generateTitle(article, oArticle);
    generatePrice(article, oArticle);
    oList.appendChild(oArticle);
    
    oArticle.addEventListener('click', generateDetail);
}

function generateImage(article, oArticle) {
    let oImg = document.createElement('img');
    oImg.setAttribute('src', 'img/'+article.image.petite);
    oImg.setAttribute('alt', article.title);
    oArticle.appendChild(oImg);
}

function generateTitle(article, oArticle) {
    let oTitle = document.createElement('div');
    oTitle.classList.add('title');
    oTitle.appendChild(document.createTextNode(article.titre))
    oArticle.appendChild(oTitle);
}

function generatePrice(article, oArticle) {
    let oPrice = document.createElement('div');
    oPrice.classList.add('price');
    let price = article.Prix.split(' ')[0];
    oPrice.appendChild(document.createTextNode(Number(price).toFixed(2)));
    oArticle.appendChild(oPrice);

    let oUnit = document.createElement('div');
    oUnit.classList.add('unit'); 
    oUnit.appendChild(document.createTextNode('€'))
    oArticle.appendChild(oUnit);
}

function getArticleFromId(id) {
    let seletedArticle = null;
    shop.forEach(article => {
        if (article.id === Number(id)) {
            seletedArticle = article;
            console.log(seletedArticle);
            
        }
    });

    return seletedArticle;
}

function zoom(oArticle) {
    activeArticle(oArticle);
   
    let id = Number(oArticle.getAttribute('data-id')); 
    console.log('id' ,id)
    let seletedArticle = getArticleFromId(id);
    /*console.log("id", seletedArticle.id);*/
    console.log( seletedArticle);
    oDetail.innerHTML = '';
    if (seletedArticle !== null) {
        alert(seletedArticle.titre);
    }
}

function activeArticle(oArticle) {
    let active = oList.querySelector('.active');
    if (active !== null) {
        active.classList.remove('active');
    }
    oArticle.classList.add('active');
}

