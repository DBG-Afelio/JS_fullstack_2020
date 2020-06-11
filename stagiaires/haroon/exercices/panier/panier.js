let buttonCommander = document.getElementById("buttonCommander");
let buttonPanier = document.getElementById("panier");
let backButton = document.getElementById("backButton");
let buttonEmptying = document.getElementById("buttonEmptying");

function creatList() {
    document.getElementById("pagePanier").style.display = "none";
    document.getElementById("detailsPrix").innerHTML = tab_img[0].Prix;
    document.getElementById("detailsTitre").innerHTML = tab_img[0].titre;
    let imageDetails =document.getElementById("imageGrand");
    imageDetails.setAttribute("src", "img/" + tab_img[0].image.grande);
    document.getElementById("detailsCommentaire").innerHTML = tab_img[0].commentaire;
    document.getElementById("detailsPays").innerHTML = tab_img[0].Pays;
    document.getElementById("detailsAuteur").innerHTML = tab_img[0].auteur;

    let ul = document.getElementById("listImages");
    for (let i = 0; i < tab_img.length; i++) {
        let list = document.createElement("li");
        ul.appendChild(list);
        let images = document.createElement("img");
        list.appendChild(images);
        let source = document.createAttribute("src");
        source.value = "img/" + tab_img[i].image.toute_petite;
        images.setAttributeNode(source);
        let price = document.createElement("p");
        list.appendChild(price);
        price.textContent = tab_img[i].Prix;
        let idLi = document.createAttribute("data-id");
        let id = "photo" + i;
        idLi.value = id;
        list.setAttributeNode(idLi);
        list.addEventListener("click", () => showDetails(id));

    }
    
     
}
function showDetails(id) {
    console.log(id);
    photoId = id.substring(5);
    document.getElementById("detailsPrix").innerHTML = tab_img[photoId].Prix;
    document.getElementById("detailsTitre").innerHTML = tab_img[photoId].titre;
    let grandImage = document.getElementById("imageGrand");
    grandImage.setAttribute("src", "img/" + tab_img[photoId].image.grande);
    document.getElementById("detailsCommentaire").innerHTML = tab_img[photoId].commentaire;
    document.getElementById("detailsPays").innerHTML = tab_img[photoId].Pays;
    document.getElementById("detailsAuteur").innerHTML = tab_img[photoId].auteur;
    return photoId;
}

buttonCommander.addEventListener('click', (e) => {
    e.preventDefault();
    ordering();
})

let panier = [];
//panier.quantinty = [];
//panier.idChosecPhotos = [];
//panier.priceChosen = [];
//panier.photosChosen = [];


function ordering() {
    
    let numberOforders = document.getElementById("quantity").value;
    if (numberOforders > 0) {
        let command ={};
        command.quantinty=Number(numberOforders);
        photoIdNumerique = Number(photoId);
        command.idChosecPhotos=photoIdNumerique;
        command.priceChosen=tab_img[photoId].Prix;
        command.photosChosen=tab_img[photoId].image.toute_petite;
        panier.push(command);
        showingArticles();
        
    }
    
    return panier;
}
let = totalQuantities = 0 ;
function showingArticles(){
    let numberOforders = document.getElementById("quantity").value;
    totalQuantities = totalQuantities + Number(numberOforders) ;
    console.log(totalQuantities);
    document.getElementById("totalArticleNumber").innerHTML=totalQuantities;
}



buttonPanier.addEventListener('click', (e) => {
    e.preventDefault();
    panierShowing();
})
let priceTotalOfOnePhoto = 0; // declaration a variable of price for one photo
let totaOfTotal = 0 ;  // declation of a variable of the total price of all photos chosen 
// function for showing the basket 
function panierShowing() {
    document.getElementById("pageAllPhotos").style.display = "none";
    document.getElementById("pagePanier").style.display = "block";
    if (panier.length == 0) {
        document.getElementById("panierEmpty").innerHTML = "Votre panier et Vide"
    }
    else {
        document.getElementById("pageAllPhotos").style.display = "none";
        let ulPanier = document.getElementById("panierList");
        
        for (let i = 0; i < panier.length; i++) {
            let totalNumeric = 0 ;
            let liPanier = document.createElement("li");
            ulPanier.appendChild(liPanier);
            let images = document.createElement("img");
            liPanier.appendChild(images);
            let sourceImages = document.createAttribute("src");
            sourceImages.value = "img/" + panier[i].photosChosen;
            images.setAttributeNode(sourceImages);
            totalNumeric=panier[i].quantinty * parseFloat(panier[i].priceChosen); 
            priceTotalOfOnePhoto =totalNumeric.toFixed(2)+" €";
            let pPrice = document.createElement("p");
            pPrice.textContent = parseFloat(panier[i].priceChosen)+" =  ";
            liPanier.appendChild(pPrice);
            let pQuantinty = document.createElement("input"); //Creating input for Qauintity
            liPanier.appendChild(pQuantinty);
            pQuantinty.value =  + panier[i].quantinty ;
            let valueInput = document.createAttribute("value");
            valueInput.value=panier[i].quantinty;
            pQuantinty.setAttributeNode(valueInput);
            //adding type attribute to input to make input accepts just Numbers 
            let inputType = document.createAttribute("type");
            inputType.value ="number";
            //adding add event Listter for controlling quantity of photos
            pQuantinty.addEventListener("input", function(){
                
                priceTotalOfOnePhoto = pQuantinty.value * parseFloat(panier[i].priceChosen);
                pPriceTotal.textContent = priceTotalOfOnePhoto;
                totaOfTotal = totaOfTotal +priceTotalOfOnePhoto;
                document.getElementById("totalPriceOfAll").innerHTML="Total ="+totaOfTotal+" €";
                totaOfTotal = 0;
            });

            pQuantinty.setAttributeNode(inputType);

            let inputMin = document.createAttribute("min");
            inputMin.value ="1"; 
            pQuantinty.setAttributeNode(inputMin);
            let pPriceTotal = document.createElement("p");
            liPanier.appendChild(pPriceTotal);
            pPriceTotal.textContent = priceTotalOfOnePhoto ;
            let classPrice = document.createAttribute("class");//creating class attribute in p price
            pPrice.setAttributeNode(classPrice);
            classPrice.value = "onePhotoPrice" ;
            let classPriceTotal = document.createAttribute("class");//creating class attribute in p price  total
            pPriceTotal.setAttributeNode(classPriceTotal);
            classPriceTotal.value = "totalPhotoPrice" ;
            console.log(classPriceTotal.value);
            let classQuantity = document.createAttribute("class");
            pQuantinty.setAttributeNode(classQuantity);
            classQuantity.value = "quantityPhoto" ;
            totaOfTotal = totaOfTotal +totalNumeric ;
            document.getElementById("totalPriceOfAll").innerHTML="Total ="+totaOfTotal+" €";
            
        }
        
    }

    backButton.addEventListener('click', (e) => {
        e.preventDefault();
        backToMainPage();

    });

}

function backToMainPage() {
    let ulPanier = document.querySelectorAll('#panierList li');
    document.getElementById("panierEmpty").innerHTML = "";
    document.getElementById("pageAllPhotos").style.display = "block";
    document.getElementById("pagePanier").style.display = "none";
        for (let i = 0; i < ulPanier.length; i++) {
            li = ulPanier[i]
            li.parentNode.removeChild(li);
        }
    
}
buttonEmptying.addEventListener('click', (e) => {
    e.preventDefault();
    viderLePaner()
})
function viderLePaner() {
    
    totalQuantities =0;
    document.getElementById("totalArticleNumber").innerHTML=totalQuantities;
    totaOfTotal = 0 ;
    document.getElementById("totalPriceOfAll").innerHTML="Total ="+0+" €";
    panier=[];
    let ulPanier = document.querySelectorAll('#panierList li');
    if (ulPanier.length > 0) {
        document.getElementById("panierEmpty").innerHTML = "vous avez supprimé toutes les photos de votre panier, votre panier est maintenant vide retour à la page principale pour choisir la photo que vous souhaitez";
        for (let i = 0; i < ulPanier.length; i++) {
            li = ulPanier[i]
            li.parentNode.removeChild(li);
        }
    }
}



creatList();
