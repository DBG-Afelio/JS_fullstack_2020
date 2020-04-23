/*--------------------------------------------------Variables------------------------------------------------------------*/

const levelSelect = document.getElementById("levelSelect");
const levelRules = document.getElementById("levelRules");
const reset = document.getElementById("reset");

const playerSeq = document.getElementById("playerSeq");
const submit = document.getElementById("submit");

let levelSelected = levelSelect.options[levelSelect.selectedIndex].value;

let colorBalls = document.getElementsByClassName('colorBall');
let playerSeqSlot = document.querySelectorAll(".slot");

let playerSeqValue=[];
let randomSeq = [];
// Tableau Noir et Blanc
let resultArr = [];
// Compteur d'essai
let counter = 0;
// 
let win = false;

/*--------------------------------------------------Evenements------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded',reload());

submit.addEventListener('click', ()=> {
        //console.clear();
        console.log(resultArr);
        
        if(counter >= 10) {
            gameOver();
            }          
           
        else{
            
           switch(levelSelected){

            case 'level1':
                
                let isEmpty = false;
                
                for (const item of playerSeqSlot) {
        
                    if(item.childElementCount === 0) {
                        
                        isEmpty = true;
                        
                }}
                
                /*si il y a au moins 1 "empty slots"*/
                if(isEmpty === true){
                    
                    alert("veuillez complèter entièrement la séquence");
                    
                }
                else{
                        counter++;
                        console.log("Nombre d'essai : ",counter);
                        compareSeq();
                        genRow();
                        
                }
            break;

            case 'level2':
                   
                   /*!Solution temporaire*/
                   playerSeqArray2=[];
                   
                   for (const item of playerSeqSlot) {
        
                       if(item.childElementCount === 0){
                           playerSeqArray2.push("empty")
                       }else{
                           playerSeqArray2.push(item.firstElementChild.getAttribute("data-color"));
                           
                       }
                   }
                   /*si le nbre d'elemnt unique est <4... */
                   if(Array.from(new Set (playerSeqArray2)).length < 4){
                       
                       alert("Il existe des éléments double");
                       
                   }else{
                        counter++;
                        console.log("Essai N°",counter);
                        compareSeq();
                        genRow();
                   }
                   break;
            case 'level3':
                
                counter++;
                console.log("Essai N°",counter);
                compareSeq();
                genRow();
                
            break;
        } 
            
        }
    
});

reset.addEventListener('click',()=>{
    console.clear();
    const reloadConfirm = confirm("Êtes vous sûr de vouloir recommencer la partie ?");
   if(reloadConfirm == true){
        reload();
    }
});                                   
levelSelect.addEventListener('change',()=>{
    console.clear();
    const reloadConfirm = confirm("Voulez vous changer de difficulté et recommencer la partie ?");
    
    if(reloadConfirm == true){
        reload();
    }else{
        /*remettre l'ancien niveau*/
    }
});

/*--------------------------------------------------Fonctions------------------------------------------------------------*/

function genRandomSeq () {

    randomSeq = [];
    randomSeq.push(colorBalls[Math.floor(Math.random()*colorBalls.length)].getAttribute("data-color"));


    let numberOfColors=1;
    
    for(i=0;i<numberOfColors;i++){
        
        if(numberOfColors<4){
            
            //génération d'un nombre aléatoire entre 0 et la longueur de la liste colorBalls
            let nbalea = Math.floor(Math.random()*colorBalls.length);
            let randomColor = colorBalls[nbalea].getAttribute("data-color");
            
            switch(levelSelected) {
                    
                case 'level1':
                case 'level2':

                    if(!randomSeq.includes(randomColor)){
                        randomSeq.push(randomColor);
                        numberOfColors++;
                    }else{
                        i--;
                    }
                    break;
                case 'level3':

                    randomSeq.push(randomColor);
                    numberOfColors++;
                    break;
            }           
        }      
    }
}

function addEmptyBall () {
    
    const emptyBall = document.getElementById("empty");
    
    switch(levelSelected) {
        
        case 'level1':
 
            if(emptyBall.className = "colorBall"){
                
                emptyBall.className = "emptyBall";
                
                
            }
            
            break;
           
        case 'level2':
        case 'level3':

            if(emptyBall.className = "emptyBall"){
                
             emptyBall.className = "colorBall";
                
            }
            
            break;
    }
}

function reload (){ 

    console.log("reloaded")
    
    //On réassigne la valeur du niveau
    levelSelected = levelSelect.options[levelSelect.selectedIndex].value;
    
    //on remet le compteur de partie à zéro 
    counter = 0;
    
    //on supprime toute les ligne de classe "static"
    for (const row of document.querySelectorAll('.static')) {
        playerSeq.removeChild(row);
    }
    //On remet les couleurs à leurs place ou on les supprime selon le niveau
    
    /*if(levelSelected === "level3"){
        
        
        
    }else{
        
        
        
    }
    */
    //on ajoute ou on supprime la colorball "vide"
    addEmptyBall();
    
    //On affiche la difficulté sélectionnée"
    switchRulesText();
    
    //On génère une nouvelle séquence aléatoire
    genRandomSeq();
    
    
    console.log("réponse : " , randomSeq);
}

function compareSeq () {
    playerSeqValue=[];
    
    // pour chaque emplacement laissé vide , on ajoute "empty" à la séquence du joueur
    for (const item of playerSeqSlot) {
        
        if(!item.hasChildNodes()){
            playerSeqValue.push("empty");
        }
        else{
            playerSeqValue.push(item.children.item(0).getAttribute("data-color"));

        }
    }
    
    
    for(let playerI = 0; playerI < playerSeqValue.length;playerI++){

        for(let gameI = 0; gameI < randomSeq.length;gameI++){
            if(playerSeqValue[playerI] === randomSeq[gameI]){
            
                if(playerI === gameI){
                    resultArr.unshift("black"); // PIERRE  les noirs doivent etre placés avant les blanches (push place l'element à la fin et unshift au debut !)

                } else {
                    resultArr.push("white");
                }
            }
        }
    }
    /*
        playerSeqValue.forEach((playerItem, playerItemIndex) => {
            randomSeq.forEach((gameItem, gameItemIndex) => { 
                
                if((playerItem === gameItem) && (playerItemIndex === gameItemIndex)){

                    resultArr.push("black");
                    gameItemIndex = randomSeq.length;

         
                }else if((playerItem === gameItem) && !(playerItemIndex === gameItemIndex)){

                    resultArr.push("white");
                    gameItemIndex = randomSeq.length;
                }
            })
        })*/
    console.log("séquence jeu : " + randomSeq); 
    console.log("séquence joueur : " + playerSeqValue);
    console.log(resultArr);
    
    win = resultArr.every(item => item === "black"); 

    if(win === true){
        genRow();
        gameOver();
    }
}

function genRow () {
    
    //scroll auto sur la Séq courante.
    window.scroll(0,submit.offsetTop);
    
    //on cible l'élément précédant le bouton submit (séq actuelle) et on le déplace avec le bouton submit
    const currentRow=submit.previousElementSibling;
    currentRow.style.gridRow=counter+1;
    submit.style.gridRow=counter+1;
    
    //on crée une copie de la séquence en cours et on lui attribue la classe "static"
    const newRow = currentRow.cloneNode(true);
    newRow.classList.add("static");
    
    //on insère la copie dans le div "palyerSeq" et on détermine sa position
    playerSeq.appendChild(newRow);
    newRow.style.gridRow=counter;
    
    //on crèe la séquence de réponse et on l'insère dans la "newRow"
 
    resultArr.forEach((item) => {
 
        if(item == "black"){
            
            /*blackBall*/
            const blackBall = document.createElement("div");
            blackBall.classList.add("blackBall");
            newRow.appendChild(blackBall);
            
        }else if (item == "white"){
            
            /*whiteBall*/
            const whiteBall = document.createElement("div");
            whiteBall.classList.add("whiteBall");
            newRow.appendChild(whiteBall);
            
        }
    })
    resultArr.splice(0);
}

function switchRulesText () {
    
    const rule1 = document.getElementById("rule1");
    const rule2 = document.getElementById("rule2");
    
    
    switch(levelSelected) {
    
      case 'level1':
            
        console.log(levelSelected);
            
        rule1.innerHTML = "PAS de double couleur";
        rule2.innerHTML = "Les emplacements NE peuvent PAS rester vides";
        break;
           
      case 'level2':
            
        console.log(levelSelected);
            
        rule1.innerHTML = "PAS de double couleur";
        rule2.innerHTML = "Les emplacements peuvent rester vides";
             
        break;
      case 'level3':
            
        console.log(levelSelected);
            
        rule1.innerHTML = "Double couleur possible";
        rule2.innerHTML = "Les emplacements peuvent rester vides";
        break;
    }
    
}

function gameOver() {
    
    if(win === true){
        alert("félicitation vous avez gagné !");
    }else{
        alert("désolé, vous avez perdu.");
    }
    
    reload();
    
}