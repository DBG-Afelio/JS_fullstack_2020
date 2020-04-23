"use strict";
/*var valeurs = document.querySelectorAll("input[type=number]");*/
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
var tab2=[];

function resetNumbers() {

    listNum.splice(0);
    tab2.splice(0);
    
    inputNbre.value = "";
    nNInput.value= "";
    sNInput.valueAsNumber = "";
    gNInput.value = "";
    pNInput.value= "";
    mNInput.value = "";
    lNInput.value = "";
    gsNInput.value = "";

/*valeurs.forEach(function(){
  this.value = 0;
});*/
}

function moyenneNbre(a) {
    var b = a.length;
    var c = 0;
    var i;
    
    for (i = 0; i < b; i++) {
        c += a[i];
    }
    return c / b;
}


window.addEventListener("load", resetNumbers);

resetBtn.addEventListener('click', resetNumbers);

//quand on click sur soumettre
submitBtn.addEventListener('click', function () {
//Si le nombre est un entier
    
    if (Number.isInteger(inputNbre.valueAsNumber)) {
   
        nNInput.value++;
        sNInput.valueAsNumber += inputNbre.valueAsNumber;
    
        listNum.push(inputNbre.valueAsNumber);
        
        lNInput.value=listNum.join(",");
        
        gNInput.value = Math.max(...listNum);
        pNInput.value = Math.min(...listNum);
        mNInput.value = moyenneNbre(listNum);
        if(inputNbre.valueAsNumber>=Math.max(...listNum)){
            tab2.push(inputNbre.valueAsNumber);
            gsNInput.value=tab2.join(",");
        }
    }
});


