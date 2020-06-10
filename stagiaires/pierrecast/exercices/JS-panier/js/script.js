const shop = tab_img;
const oList = document.querySelector('.block-liste');
const oDetail = document.querySelector('.block-detail');
const oRecap = document.querySelector('.block-recap');
const generateDetail = () => {
    zoom(event.currentTarget.closest('.item'));
}

const panier = [];

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
        }
    });

    return seletedArticle;
}

function zoom(oArticle) {
    activeArticle(oArticle);
   
    let id = Number(oArticle.getAttribute('data-id')); 
    console.log('id' ,id)
    let seletedArticle = getArticleFromId(id);

    oDetail.innerHTML = '';
    if (seletedArticle !== null) {
        generateZoom(seletedArticle);
    }
}

function activeArticle(oArticle) {
    let active = oList.querySelector('.active');
    if (active !== null) {
        active.classList.remove('active');
    }
    oArticle.classList.add('active');
}

function generateZoom(article) {
    let oTitle = document.createElement('h2');
    oTitle.appendChild(document.createTextNode(article.titre));
    oDetail.appendChild(oTitle);
    
    let oImg = document.createElement('img');
    oImg.classList.add('img-zoom');
    oImg.setAttribute('src', 'img/'+article.image.grande);
    oImg.setAttribute('alt', article.titre)
    oDetail.appendChild(oImg);

    let oOrigin = document.createElement('p');
    oOrigin.appendChild(document.createTextNode(`De ${article.auteur}, ${article.Pays}`));
    oDetail.appendChild(oOrigin);

    let oComment = document.createElement('p');
    oComment.appendChild(document.createTextNode(article.commentaire))
    oDetail.appendChild(oComment);

    generatePrice(article, oDetail);
    generateInput(article, oDetail);
    generateButton(article, oDetail);
}

function generateInput(article) {
    let oInput = document.createElement('input');
    oInput.setAttribute('type', 'number');
    oInput.setAttribute('data-id', article.id);
    oDetail.appendChild(oInput);
}

function generateButton() {
    let oButton = document.createElement('button');
    oButton.appendChild(document.createTextNode('commander'));
    oDetail.appendChild(oButton);
    oButton.addEventListener('click', sendQuantity);   
}

function sendQuantity() {
    let oInput = document.querySelector('.block-detail input');
    let qte = Number(oInput.value);
    let id = oInput.dataset.id;
    if (qte > 0) {
        commandArticle(id, qte);    
    } else if (qte === 0) {
        removeArticle(id);
    }
}

function commandArticle(id, qte) {
    console.log('commande id', id);
    let article = getArticleFromId(id);
    let present = false;
    panier.forEach(command => {
        if (command.article.id === article.id) {
            present = true;
            command.qte = qte;
            alert('modify');
        }
    });

    if (!present) {
        addArticle(article, qte);   
    }

    console.log(panier);
}

function addArticle(article, qte) {
    alert('add');
    let command = {
        article: article,
        qte, qte
    };

    // ajouter dans Objet 
    panier.push(command);

    // affiche dans block-panier
    oRecap.append(createItem(command));
}

function removeArticle(article) {
    alert('remove')
    panier.filter(command => command.article.id !== article.id );
    console.log(panier);
}

function createItem(command) {
    let oItem = document.createElement('div');
    oItem.classList.add('item');

    let oImg = document.createElement('img');
    oImg.setAttribute('src', 'img/'+command.article.image.petite);
    oImg.setAttribute('alt', command.article.title);
    oItem.append(oImg) ;

    return oItem;
}
