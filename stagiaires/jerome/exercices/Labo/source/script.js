//const article=document.querySelector('.article');
//fonction d'ajout d'article...........................................................
let articles=document.querySelector('.articles');

function articleCreation(tab){
    tab.forEach(element => {
        let div=document.createElement('div');
        articles.appendChild(div);
        div.classList.add("article");
        const titre=document.createElement('span');
        const prix=document.createElement('span');
        const imgArticle=document.createElement('img');
        const idArticle=document.createElement('p');
        div.appendChild(imgArticle);
        div.appendChild(titre);
        div.appendChild(prix);
        div.appendChild(idArticle);
        imgArticle.setAttribute('src',`img/${element.image.toute_petite}`);
        idArticle.setAttribute('hidden',true);
        titre.innerHTML=element.titre;
        prix.innerHTML=element.Prix;
        idArticle.innerHTML=element.id

    });
}
//fonction creation panier...........................................................
//fonction creation detail...........................................................
function detailArticle(object){
    const titre=document.createElement('span');

    const auteur=document.createElement('span');

    const prix=document.createElement('span');

    const commentaire=document.createElement('span');

    const pays=document.createElement('span');

    const imgArticle=document.createElement('img');

    const idArticle=document.createElement('p');

    div.appendChild(imgArticle);
    div.appendChild(titre);
    div.appendChild(prix);
    imgArticle.setAttribute('src',`img/${element.image.grande}`);
    idArticle.setAttribute('hidden',true);
    titre.innerHTML=element.titre;
    //auteur.innerHTML=;
    prix.innerHTML=element.Prix;
    //commentaire.innerHTML=;
    //pays.innerHTML=;
    idArticle.innerHTML=element.id;

}



//Appel de fonctions...........................................................
articleCreation(tab_img);
//article.addEventListener('click',detailArticle(id));