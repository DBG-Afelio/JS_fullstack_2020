"use strict";
/*--------------------------------------------------Variables------------------------------------------------------------*/
var inputNbre = document.getElementById('inputNbre');

const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');

const nNInput = document.getElementById('nN');
const sNInput = document.getElementById('sN');
const gNInput = document.getElementById('gN');
const pNInput = document.getElementById('pN');
const mNInput = document.getElementById('mN');
const lNInput = document.getElementById('lN');
const gsNInput = document.getElementById('gsN');

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

//Calcule la moyenne des nombres d'un tableau.
/*function moyenneNbre(a) {
    var b = a.length;
    var c = 0;
    var i;
    
    for (i = 0; i < b; i++) {
        c += a[i];
    }
    return c / b;
}*/

/*--------------------------------------------------Evenements------------------------------------------------------------*/
//Au chargement de la page => fonction "resetNumbers".
window.addEventListener("load", resetNumbers);

//quand on click sur recommencer => fonction "resetNumbers".
resetBtn.addEventListener('click', resetNumbers);

//quand on click sur soumettre...
submitBtn.addEventListener('click', (e) => {
    
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
        
        //on assigne la fonction "moyenneNbre" à son input avec la liste "listNum" comme argument.
        mNInput.value = sNInput.value/listNum.length; /* moyenneNbre(listNum);*/
        
        //Si le nombre entré est plus grand ou égale au plus grand des nombres du tableau "listNum".
        if (inputNbre.valueAsNumber>=Math.max(...listNum)){
            
            //On ajoute la nombre entré au tableau "croissant" et on l'affiche.
            croissant.push(inputNbre.valueAsNumber);
            gsNInput.value = croissant.join(',');
        }
    }
});


