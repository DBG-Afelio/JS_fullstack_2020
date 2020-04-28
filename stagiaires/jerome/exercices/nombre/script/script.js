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
let tableau=[];
let listNum=[];
let tab1=[];
let tab2=[];


function resetNumbers() {

    tab1.splice(0);
    tab2.splice(0);
    tableau.splice(0)
    listNum.splice(0)
    
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
    
    for (let i = 0; i < b; i++) {
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
        /*if(inputNbre.valueAsNumber>=Math.max(...listNum)){
            tableau.push(inputNbre.valueAsNumber);
            gsNInput.value=tableau.join(",");
        }*/
        gsNInput.value= plusGrandeSeq(listNum);
    }

});
function plusGrandeSeq(suite){
	let tab1 = [suite[0]];
	let tab2=[suite[0]];

	for (var i = 0; i < suite.length; i++) {
		if(suite[i]>=suite[i-1]){
			tab2.push(suite[i]);

		}else{
			tab2=[suite[i]]
		}
		if(tab2.length>tab1.length){
			tab1=[...tab2];
		}
	}
	return tab1;
}


