
let articles=document.querySelector('.articles');
let detail=document.querySelector('.detail');
let main=document.querySelector('main');
let quantArt=document.querySelector('.quantArt');
let commander=document.querySelector('.commander');
let somme=document.querySelector('.somme');
let nbrArticles=document.querySelector('.quantite');
let buttonPanier=document.querySelector('.buttonPanier');
let fenetre1=document.querySelector('.fenetre1');
let fenetre2=document.querySelector('.fenetre2');
let retourAchat=document.querySelector('.retourAchat');
let resume=document.querySelector('.resume');
let totalResume=document.querySelector('.totalResume');
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
function selection(newObject){
    document.querySelector('.selection').classList.remove('selection');
    newObject.classList.add('selection');
}




//fonction creation panier...........................................................
function ajoutArticle(object,nbr){
    
    let articleFind=tabPanier.find(article=>object.id==article.id);
    if (articleFind) {
        articleFind.quantite=nbr;
    } else {
        tabPanier.push({

            id:object.id,
            titre:object.titre,
            prix:parseFloat(object.Prix),
            quantite:nbr,

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





//fonction detail panier + retour...........................................................
buttonPanier.addEventListener('click',()=>{
        display1();
        recapPanier(tabPanier);
    })

function display1(){
    fenetre1.classList.add('inPanier');
    fenetre2.classList.remove('inPanier');
}

retourAchat.addEventListener('click',display2)

function display2(){
    fenetre2.classList.add('inPanier');
    fenetre1.classList.remove('inPanier');
}





//fonction creation recapitulatif panier...........................................................
function recapPanier(tab){
    resume.innerHTML="";
    if(tab.length>0){
        tab.forEach(element => {
            let div=document.createElement('div');
           resume.appendChild(div);
            div.classList.add("article");
            div.setAttribute('data-id',element.id)
            const titre=document.createElement('span');
            const prix=document.createElement('span');
            const imgArticle=document.createElement('img');
            const quant=document.createElement('input');
            const sousTotal=document.createElement('output');
            quant.type="number";
            div.appendChild(imgArticle);
            div.appendChild(titre);
            div.appendChild(prix);
            div.append(quant,sousTotal);
            imgArticle.setAttribute('src',`img/${getObject(element.id).image.toute_petite}`);
            titre.innerHTML=element.titre;
            prix.innerHTML=element.prix;
            quant.value=element.quantite;
            sousTotal.value=element.quantite*element.prix;
            quant.addEventListener('change',(event)=>{
                affichagePanier();
                ajoutArticle(getObject(element.id),quant.value);
                recapPanier(tab);
                
            })
        });

        totalResume.value=prixTotalPanier()
    }
    
}





//Appel de fonctions...........................................................

articleCreation(tab_img);
let articleSelect=document.querySelectorAll('.article');
let quantite=parseInt(quantArt.value);
for (const art of articleSelect) {
    art.addEventListener('click',(event)=>{

        detailArticle(getObject(event.currentTarget.dataset.id))
        selection(event.currentTarget);

    });
    
}

function getObject(id){
    return tab_img.find(object=> parseInt(id)==object.id );  
}

detailArticle(getObject(1));
articles.children[0].classList.add('selection');

commander.addEventListener('click',()=>{

    ajoutArticle(getObject(divArticle.dataset.id),quantite);
    affichagePanier();
    
});