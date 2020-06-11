
let articles=document.querySelector('.articles');
let detail=document.querySelector('.detail');
let main=document.querySelector('main');
let quantArt=document.querySelector('.quantArt');
let commander=document.querySelector('.commander');
let somme=document.querySelector('.somme');
let nbrArticles=document.querySelector('.quantite')
let divArticle;
let sum=0;
let tabPanier=[];
//fonction d'ajout d'article...........................................................


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

//fonction creation detail...........................................................

function detailArticle(object){
    document.querySelector('main').innerHTML="";
    let detail=document.createElement('div');
    main.appendChild(detail);
    detail.classList.add('detail');
    let div=document.createElement('div');
    detail.appendChild(div);
    div.classList.add('divArticle');
    div.setAttribute('data-id',object.id);
    divArticle=document.querySelector('.divArticle');

    

    
    const titre=document.createElement('span');

    const auteur=document.createElement('span');

    const prix=document.createElement('span');

    const commentaire=document.createElement('span');

    const pays=document.createElement('span');

    const imgArticle=document.createElement('img');
    

    div.appendChild(titre);
    titre.innerHTML=object.titre;


    div.appendChild(imgArticle);
    imgArticle.setAttribute('src',`img/${object.image.moyenne}`);


    div.appendChild(prix);
    prix.innerHTML=object.Prix;

    div.appendChild(auteur);
    auteur.innerHTML=object.auteur;

    div.appendChild(commentaire);
    commentaire.innerHTML=object.commentaire;

    div.appendChild(pays);
    pays.innerHTML=object.Pays;

}


//fonction creation panier...........................................................
function ajoutArticle(object){
    let quantite=parseInt(quantArt.value);
    let articleFind=tabPanier.find(article=>object.id==article.id);
    if (articleFind) {
        articleFind.quantite=quantite;
    } else {
        tabPanier.push({

            id:object.id,
            titre:object.titre,
            prix:parseFloat(object.Prix),
            quantite,

            })
    }
    console.log(tabPanier);
}
function prixTotalPanier(){

   return tabPanier.reduce((sum,article)=>sum+article.prix*article.quantite,0); 

}

function quantiteArticlePanier(){
    return tabPanier.reduce((sum,article)=>sum+article.quantite,0); 
}

function affichagePanier(){
    somme.innerHTML=prixTotalPanier();
    nbrArticles.innerHTML=quantiteArticlePanier();
}

//Appel de fonctions...........................................................

articleCreation(tab_img);
let articleSelect=document.querySelectorAll('.article');

for (const art of articleSelect) {
    art.addEventListener('click',(event)=>detailArticle(getObject(event.currentTarget.dataset.id)));
    
}

function getObject(id){
    return tab_img.find(object=> parseInt(id)==object.id );  
}

detailArticle(getObject(1));

commander.addEventListener('click',()=>{

    ajoutArticle(getObject(divArticle.dataset.id));
    affichagePanier();
    
});