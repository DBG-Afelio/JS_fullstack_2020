"use strict";
/*--------------------------------------------------Variables------------------------------------------------------------*/
var inputNbre = document.getElementById('inputNbre');

var submitBtn = document.getElementById('submit');
var resetBtn = document.getElementById('reset');

var nNInput = document.getElementById('nN');
var sNInput = document.getElementById('sN');
var gNInput = document.getElementById('gN');
var pNInput = document.getElementById('pN');
var mNInput = document.getElementById('mN');
var lNInput = document.getElementById('lN');
var gsNInput = document.getElementById('gsN');

var listNum = [];
var croissant = [];
/*--------------------------------------------------Fonctions------------------------------------------------------------*/
//Réinitialisation des valeurs.
function resetNumbers () {

    listNum.splice(0);
    croissant.splice(0);
    
    inputNbre.value = "";
    nNInput.value = "";
    sNInput.valueAsNumber = "";
    gNInput.value = "";
    pNInput.value = "";
    mNInput.value = "";
    lNInput.value = "";
    gsNInput.value = "";
}

function plusGrandeSeq(liste) {
    
    let plusGrandeSeqActuelle = [liste[0]];
    let seqActuelle = [liste[0]];
    
    for (let index=0; index < liste.length; index++){
        if(liste[index] >= liste[index - 1]){
            
            seqActuelle.push(liste[index]);
            
        }else{
            
            seqActuelle = [liste[index]];
            
        }
        if(seqActuelle.length > plusGrandeSeqActuelle.length){
            
            plusGrandeSeqActuelle = [...seqActuelle];
            
        }
    }
    return plusGrandeSeqActuelle;
}
/*--------------------------------------------------Evenements------------------------------------------------------------*/
//Au chargement de la page => fonction "resetNumbers".
window.addEventListener("load", resetNumbers);

//quand on click sur recommencer => fonction "resetNumbers".
resetBtn.addEventListener('click', resetNumbers);

//quand on click sur soumettre...
submitBtn.addEventListener('click', function () {
    
    //Si le nombre est un entier.
    if (Number.isInteger(inputNbre.valueAsNumber)) {
        
        //On ajoute la nombre entré au tableau "listNum" et on l'affiche.
        listNum.push(inputNbre.valueAsNumber);
        lNInput.value = listNum.join(',');
        
        //on fait +1 à la valeur du nombre de nombres.
        nNInput.value++;
        sNInput.valueAsNumber += inputNbre.valueAsNumber;
        
        //on assigne les plus petites/grandes valeurs du tableau "listNum" à leurs Input.
        gNInput.value = Math.max(...listNum);
        pNInput.value = Math.min(...listNum);
        
        mNInput.value = sNInput.value/listNum.length;
        
        gsNInput.value = plusGrandeSeq(listNum).join(', ');
    }
});