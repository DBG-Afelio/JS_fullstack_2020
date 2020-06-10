//const article=document.querySelector('.article');
//fonction d'ajout d'article...........................................................
let articles=document.querySelector('.articles');
let detail=document.querySelector('.detail');

function articleCreation(tab){
    tab.forEach(element => {
        let div=document.createElement('div');
        articles.appendChild(div);
        div.classList.add("article");
        div.setAttribute('data-id',element.id)
        const titre=document.createElement('span');
        const prix=document.createElement('span');
        const imgArticle=document.createElement('img');
        div.appendChild(imgArticle);
        div.appendChild(titre);
        div.appendChild(prix);
        imgArticle.setAttribute('src',`img/${element.image.toute_petite}`);
        titre.innerHTML=element.titre;
        prix.innerHTML=element.Prix;

    });
}
//fonction creation panier...........................................................
//fonction creation detail...........................................................
function detailArticle(object){
   
    let div=document.createElement('div');
    detail.appendChild(div);
    
    const titre=document.createElement('span');

    const auteur=document.createElement('span');

    const prix=document.createElement('span');

    const commentaire=document.createElement('span');

    const pays=document.createElement('span');

    const imgArticle=document.createElement('img');

    div.appendChild(imgArticle);
    imgArticle.setAttribute('src',`img/${object.image.grande}`);

    div.appendChild(titre);
    titre.innerHTML=object.titre;

    div.appendChild(prix);
    prix.innerHTML=object.Prix;

    div.appendChild(auteur);
    auteur.innerHTML=object.auteur;

    div.appendChild(commentaire);
    commentaire.innerHTML=object.commentaire;

    div.appendChild(pays);
    pays.innerHTML=object.Pays;

}



//Appel de fonctions...........................................................

articleCreation(tab_img);
let articleSelect=document.querySelectorAll('.article');
for (const art of articleSelect) {
    art.addEventListener('click',eventClick)
}
function eventClick(event){
    let imageObject=tab_img.find(object=> event.currentTarget.getAttribute('data-id')==object.id );

    detailArticle(imageObject);
    console.log(event.currentTarget.getAttribute('data-id'));
}