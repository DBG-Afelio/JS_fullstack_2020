"use strict";

let inputNbre = document.getElementById('inputNbre');
let submitBtn = document.getElementById('submit');
let resetBtn = document.getElementById('reset');

let nNInput = document.getElementById('nN');
let sNInput = document.getElementById('sN');
let gNInput = document.getElementById('gN');
let pNInput = document.getElementById('pN');
let mNInput = document.getElementById('mN');
let lNInput = document.getElementById('lN');
let gsNInput = document.getElementById('gsN');

let listNum = [];
let tab2=[];

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
}

function moyenneNbre(a) {
    let b = a.length;
    let c = 0;
    let i;
    
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


