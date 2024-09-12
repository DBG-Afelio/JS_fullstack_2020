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
   
    photoId = id;
    document.getElementById("detailsPrix").innerHTML = tab_img[id.substring(5)].Prix;
    document.getElementById("detailsTitre").innerHTML = tab_img[id.substring(5)].titre;
    let grandImage = document.getElementById("imageGrand");
    grandImage.setAttribute("src", "img/" + tab_img[id.substring(5)].image.grande);
    document.getElementById("detailsCommentaire").innerHTML = tab_img[id.substring(5)].commentaire;
    document.getElementById("detailsPays").innerHTML = tab_img[id.substring(5)].Pays;
    document.getElementById("detailsAuteur").innerHTML = tab_img[id.substring(5)].auteur;
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

let totalPriceChosen = 0 ;
function ordering() {
    
    let numberOforders = document.getElementById("quantity").value;
    if (numberOforders > 0) {
        let command ={};
        command.quantinty=Number(numberOforders);
        command.idChosecPhotos=photoId;
        command.priceChosen=tab_img[photoId.substring(5)].Prix; 
        command.photosChosen=tab_img[photoId.substring(5)].image.toute_petite; 
        //calculating price of photos chosen
        totalPriceChosen=parseFloat(command.priceChosen) * numberOforders;
        totaOfTotal =totaOfTotal + totalPriceChosen;
        document.getElementById("totalOfTotalPriceChosen").innerHTML=totaOfTotal;
        panier.push(command);
        console.log(totaOfTotal);
        //console.log(command.idChosecPhotos.includes(photoId));
        /*console.log(photoId);
        if (panier.length == 0 ){
            console.log("zero");
            panier.push(command);
            console.log(panier);
        }
        else if (panier.length > 0 ) {
            for (let i=0  ; i < panier.length ; i++){
                if (panier[i].idChosecPhotos.includes(photoId)==true){
                    command.quantinty=Number(numberOforders)+panier[i].quantinty;
                    console.log("the quantity is :"+command.quantinty);
                    console.log(panier[i].idChosecPhotos.includes(photoId)==true);
                    
                }
                else {
                    
                    panier.push(command);
                    console.log(panier);
                    
                }
            }
            
        }
        */
        //console.log(panier[0].idChosecPhotos.includes(photoId));
        
        //console.log(panier[0].idChosecPhotos.includes(photoId));

        showingArticles();
        
    }
    
    return panier;
}
let = totalQuantities = 0 ;
function showingArticles(){
    let numberOforders = document.getElementById("quantity").value;
    totalQuantities = totalQuantities + Number(numberOforders) ;
    document.getElementById("totalArticleNumber").innerHTML=totalQuantities;
    console.log(totaOfTotal);
}



buttonPanier.addEventListener('click', (e) => {
    e.preventDefault();
    panierShowing();
})
let priceTotalOfOnePhoto = 0; // declaration a variable of price for one photo
let totaOfTotal = 0 ;  // declation of a variable of the total price of all photos chosen 
// function for showing the basket
let totalNumeric = 0;
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
            let totalNumeric = 0;
             
            
            let liPanier = document.createElement("li");
            ulPanier.appendChild(liPanier);
            let images = document.createElement("img");
            liPanier.appendChild(images);
            let sourceImages = document.createAttribute("src");
            sourceImages.value = "img/" + panier[i].photosChosen;
            images.setAttributeNode(sourceImages);
            totalNumeric=Number(panier[i].quantinty) * parseFloat(panier[i].priceChosen); 
            totalNumeric.toFixed(2);
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
                 
                
                console.log("ptice total for one photo Befor="+priceTotalOfOnePhoto);
                
                console.log("total of total befor="+totaOfTotal);

                let quantityNumeric = Number(pQuantinty.value);
                console.log("numberof photos befor="+quantityNumeric);
                priceTotalOfOnePhoto = (quantityNumeric * Number(parseFloat(panier[i].priceChosen)));
                console.log("quantity"+quantityNumeric);
                
                
                pPriceTotal.textContent = priceTotalOfOnePhoto.toFixed(2);
                
                totaOfTotal = totaOfTotal+priceTotalOfOnePhoto ;
                console.log("ptice total for one photo Affter="+priceTotalOfOnePhoto);
                
                console.log("total of total After="+totaOfTotal);
                console.log(typeof priceTotalOfOnePhoto);
                document.getElementById("totalPriceOfAll").innerHTML="Total ="+totaOfTotal+" €";
                console.log(priceTotalOfOnePhoto);
                
                
                
            });
            
            pQuantinty.setAttributeNode(inputType);

            let inputMin = document.createAttribute("min");
            inputMin.value ="1"; 
            pQuantinty.setAttributeNode(inputMin);
            let pPriceTotal = document.createElement("p");
            liPanier.appendChild(pPriceTotal);
            
            pPriceTotal.textContent = totalNumeric ;
            let classPrice = document.createAttribute("class");//creating class attribute in p price
            pPrice.setAttributeNode(classPrice);
            classPrice.value = "onePhotoPrice" ;
            let classPriceTotal = document.createAttribute("class");//creating class attribute in p price  total
            pPriceTotal.setAttributeNode(classPriceTotal);
            classPriceTotal.value = "totalPhotoPrice" ;
            let classQuantity = document.createAttribute("class");
            pQuantinty.setAttributeNode(classQuantity);
            classQuantity.value = "quantityPhoto" ;
            
           
            console.log(totalNumeric);
            console.log(totaOfTotal);

            
            
        }
        console.log(totalNumeric);
        console.log(totaOfTotal);
        totaOfTotal = totaOfTotal +totalNumeric;
        console.log( totaOfTotal);
        document.getElementById("totalPriceOfAll").innerHTML="Total ="+totaOfTotal+" €";
        console.log(totaOfTotal);
        
        
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
    // vider total pixe et quantities
    totaOfTotal = 0 ; 
    console.log(totaOfTotal);
    totalQuantities =0;
    document.getElementById("totalArticleNumber").innerHTML=totalQuantities;
    totaOfTotal = 0 ;
    document.getElementById("totalPriceOfAll").innerHTML="Total ="+0+" €";
    panier=[];
    document.getElementById("totalOfTotalPriceChosen").innerHTML=totaOfTotal;
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
